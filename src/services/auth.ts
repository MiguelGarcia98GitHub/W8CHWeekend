import jwt from 'jsonwebtoken';
import { SECRET } from '../config.js';
import bc from 'bcryptjs';

export const createToken = (payload: { userName: string }) => {
    if (typeof SECRET !== 'string') throw new Error();
    return jwt.sign(payload, SECRET);
};

export const readToken = (token: string) => {
    if (typeof SECRET !== 'string') throw new Error();
    const payload = jwt.verify(token, SECRET);
    if (typeof payload === 'string') throw new Error('Token not valid');
    return payload;
};

export const passwdEncrypt = (passwd: string) => {
    return bc.hash(passwd, 10);
};

export const passwdValidate = (newPasswd: string, hash: string) => {
    return bc.compare(newPasswd, hash);
};

// VERIFY TOKEN CREATION
// const manoloToken = createToken({ userName: 'Miguel' });
// console.log(manoloToken);
// console.log(readToken(manoloToken));
