const _S = [78, 167, 44, 245];
const _PREFIX = 'SCHED';

function _hash(bytes: number[]): number {
    let h = _S[0];
    for (const b of bytes) {
        h = ((h << 4) ^ (h >>> 4) ^ b ^ _S[h & 3]) & 255;
    }
    return h;
}

const _INVALID = {
    valid: false,
    customerId: 0,
    perpetual: false,
    expiresAt: null as Date | null,
    expired: false,
    flags: 0,
};

export function validateLicense(key: string | undefined): typeof _INVALID {
    if (!key || typeof key !== 'string') return { ..._INVALID };
    const parts = key.toUpperCase().trim().split('-');
    if (parts.length !== 4 || parts[0] !== _PREFIX) return { ..._INVALID };
    const [, g1, g2, g3] = parts;
    if (g1.length !== 5 || g2.length !== 5 || g3.length !== 5) return { ..._INVALID };
    const v1 = parseInt(g1, 36);
    const v2 = parseInt(g2, 36);
    const v3 = parseInt(g3, 36);
    if (isNaN(v1) || isNaN(v2) || isNaN(v3)) return { ..._INVALID };
    const r1 = (v1 >> 16) & 255;
    const idHi = (v1 >> 8) & 255;
    const idLo = v1 & 255;
    const r2 = (v2 >> 16) & 255;
    const expiryOffset = (v2 >> 8) & 255;
    const flags = v2 & 255;
    const r3 = (v3 >> 16) & 255;
    const salt = (v3 >> 8) & 255;
    const crc = v3 & 255;
    if (!(r1 & 128) || !(r2 & 128) || !(r3 & 128)) return { ..._INVALID };
    if (r1 !== (_hash([idHi, idLo, salt]) | 128)) return { ..._INVALID };
    if (r2 !== (_hash([expiryOffset, flags, salt]) | 128)) return { ..._INVALID };
    if (crc !== _hash([idHi, idLo, expiryOffset, flags, salt])) return { ..._INVALID };
    if (r3 !== (_hash([r1, r2, crc]) | 128)) return { ..._INVALID };
    const customerId = (idHi << 8) | idLo;
    let expiresAt: Date | null = null;
    let expired = false;
    if (expiryOffset > 0) {
        const expYear = 2025 + Math.floor((expiryOffset - 1) / 12);
        const expMonth = (expiryOffset - 1) % 12;
        expiresAt = new Date(expYear, expMonth, 1);
        const now = new Date();
        const nowOffset = (now.getFullYear() - 2025) * 12 + now.getMonth();
        expired = nowOffset >= expiryOffset;
    }
    return { valid: true, customerId, perpetual: expiryOffset === 0, expiresAt, expired, flags };
}

export function isPro(key: string | undefined): boolean {
    const info = validateLicense(key);
    return info.valid && !info.expired;
}
