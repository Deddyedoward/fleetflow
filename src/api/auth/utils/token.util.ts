import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'default';

const generateToken = (payload: object): string => {
    return jwt.sign(payload, secret, { expiresIn: '1h' });
}

const validateToken = (token: string): object | false | undefined => {
    try {
        jwt.verify(token, secret);
    } catch (err) {
        return false;
    }
}

export default { generateToken, validateToken };