import jwt from 'jsonwebtoken';

const secret = 'default';

const generateToken = (payload: object): string => {
    return jwt.sign(payload, secret, { expiresIn: '1h' });
}

const validateToken = (token: string): object | false | undefined | string => {
    try {
        return jwt.verify(token, secret);
    } catch (err) {
        return false;
    }
}

export default { generateToken, validateToken };