declare const _INVALID: {
    valid: boolean;
    customerId: number;
    perpetual: boolean;
    expiresAt: Date | null;
    expired: boolean;
    flags: number;
};
export declare function validateLicense(key: string | undefined): typeof _INVALID;
export declare function isPro(key: string | undefined): boolean;
export {};
