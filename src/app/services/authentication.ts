const jwt = require("jsonwebtoken");
function generateToken(
    payload: any,
    secret: string,
    expiry_minutes: number
): string {
    return jwt.sign(payload, secret, {
        issuer: "xxx", //TODO Add issuer
        expiresIn: `${expiry_minutes}m`,
    });
}

export { generateToken };
