/**
 * encode-template.js
 * Reads SchedulaTemplate.ts, extracts the SVG string, XOR-encodes it,
 * and rewrites the file with the encoded string + inline decipher.
 *
 * Usage: node tools/encode-template.js
 */

const fs = require('fs');
const path = require('path');

const SALT = 'schedula-core';
const INPUT = path.join(__dirname, '../src/ui/SchedulaTemplate.ts');

// ── XOR cipher ──────────────────────────────────────────────────────────────
function encode(text) {
    const saltChars = SALT.split('').map(c => c.charCodeAt(0));
    return text.split('').map((c, i) => {
        const xored = c.charCodeAt(0) ^ saltChars[i % saltChars.length];
        return ('0' + xored.toString(16)).slice(-2);
    }).join('');
}

// ── Extract SVG from source ──────────────────────────────────────────────────
const src = fs.readFileSync(INPUT, 'utf8');

// Match the template literal between public svgString = ` ... `;
const match = src.match(/public svgString\s*=\s*`([\s\S]*?)`;/);
if (!match) {
    console.error('ERROR: could not find svgString in SchedulaTemplate.ts');
    process.exit(1);
}

const svgRaw = match[1];
const encoded = encode(svgRaw);

console.log(`Original length: ${svgRaw.length} chars`);
console.log(`Encoded length:  ${encoded.length} chars`);

// ── Write updated SchedulaTemplate.ts ───────────────────────────────────────
const newSrc = `
const _sc_salt = '${SALT}';
const _sc_dec = (encoded: string): string => {
    const s = _sc_salt.split('').map((c: string) => c.charCodeAt(0));
    const pairs = encoded.match(/.{1,2}/g) ?? [];
    return pairs.map((h: string, i: number) => String.fromCharCode(parseInt(h, 16) ^ s[i % s.length])).join('');
};

export class SchedulaTemplate {
    public svgString = _sc_dec('${encoded}');
}
`;

fs.writeFileSync(INPUT, newSrc, 'utf8');
console.log('SchedulaTemplate.ts updated with encoded template.');
