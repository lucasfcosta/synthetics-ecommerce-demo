import totp from "totp-generator";

export const TOTP_VALUE = "JBSWY3DPEHPK3PXP"

export const generateTotp = (value, intervalSeconds = 90) => {
    return totp(value, {
        digits: 6,
        period: intervalSeconds,
        timestamp: Date.now()
    });
}
