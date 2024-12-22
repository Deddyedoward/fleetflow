import * as argon2 from "argon2";

const hashPassword = async (passwordPlain: string) => {
    return await argon2.hash(passwordPlain);
}

const verifyPassword = async (passwordPlain: string, passwordHash: string) => {
    return await argon2.verify(passwordHash, passwordPlain);
}

export default { hashPassword, verifyPassword }