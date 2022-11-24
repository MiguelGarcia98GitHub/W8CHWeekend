import {
    createToken,
    passwdEncrypt,
    passwdValidate,
    readToken,
    getSecret,
} from './auth';
import jwt from 'jsonwebtoken';
import { SECRET } from '../config';
import bc from 'bcryptjs';
// Para mockear el SECRET

jest.mock('../config');

const mock = {
    id: '5000',
    name: 'Pepe',
    role: 'user',
};

describe('Given "getSecret"', () => {
    describe('When it is not string', () => {
        test('Then an error should be throw', () => {
            expect(() => {
                getSecret('');
            }).toThrowError();
        });
    });
});

describe('Given createToken ', () => {
    test('Then...', () => {
        const signSpy = jest.spyOn(jwt, 'sign');
        const r = createToken(mock);
        expect(typeof r).toBe('string');
        expect(signSpy).toHaveBeenCalledWith(mock, SECRET);
    });
});

describe('Given readToken ', () => {
    describe('When token is valid', () => {
        const token = createToken(mock);
        console.log(token);
        test('Then', () => {
            const r = readToken(token);
            expect(r.name).toEqual(mock.name);
        });
    });

    describe('Whne token is not valid', () => {
        const token =
            'eyJhbGciOiJIUzI1NilBlcGUiLCJpYXQiOjE2Njg3NzMwNTB9.DGdcCXGRUS4SaCMyY5RSy-8v9tylvmV_HE1rQJGYJ_5';

        test('should', () => {
            expect(() => {
                readToken(token);
            }).toThrow();
        });
    });

    describe('Whne token is bad formatted', () => {
        const token = 'soy un token';
        test('should', () => {
            expect(() => {
                readToken(token);
            }).toThrow();
        });
    });
    describe('passEncryted must call 1 fn', () => {
        test('should first', async () => {
            const spyFn = jest.spyOn(bc, 'hash');
            await passwdEncrypt('');
            expect(spyFn).toHaveBeenCalled();
        });
    });
    describe('passValidaye must call 1 fn', () => {
        test('should first', async () => {
            const spyFn = jest.spyOn(bc, 'compare');
            await passwdValidate('', '');
            expect(spyFn).toHaveBeenCalled();
        });
    });
});
