// import { createToken, passwdEncrypt, passwdValidate, readToken } from './auth';
// import jwt from 'jsonwebtoken';
// import { SECRET } from '../config';
// import bc from 'bcryptjs';
// // Para mockear el SECRET

// jest.mock('../config');

// const mock = {
//     userName: 'Pepe',
// };

// describe('Given createToken ', () => {
//     test('Then...', () => {
//         const signSpy = jest.spyOn(jwt, 'sign');
//         const r = createToken(mock);
//         expect(typeof r).toBe('string');
//         expect(signSpy).toHaveBeenCalledWith(mock, SECRET);
//     });
//     test('Then...', () => {
//         const signSpy = jest.spyOn(jwt, 'sign');
//         const r = createToken(mock);
//         expect(typeof r).toBe('string');
//         expect(signSpy).toHaveBeenCalledWith(mock, SECRET);
//     });
// });

// describe('Given readToken ', () => {
//     describe('When token is valid', () => {
//         const token = createToken(mock);
//         console.log(token);
//         test('Then', () => {
//             const r = readToken(token);
//             expect(r.userName).toEqual(mock.userName);
//         });
//     });

//     describe('Whne token is not valid', () => {
//         const token =
//             'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IlBlcGUiLCJpYXQiOjE2Njg3NzMwNTB9.DGdcCXGRUS4SaCMyY5RSy-8v9tylvmV_HE1rQJGYJ_5';
//         test('should', () => {
//             expect(() => {
//                 readToken(token);
//             }).toThrow();
//         });
//     });

//     describe('Whne token is bad formatted', () => {
//         const token = 'soy un token';
//         test('should', () => {
//             expect(() => {
//                 readToken(token);
//             }).toThrow();
//         });
//     });
//     describe('passEncryted must call 1 fn', () => {
//         test('should first', async () => {
//             const spyFn = jest.spyOn(bc, 'hash');
//             await passwdEncrypt('');
//             expect(spyFn).toHaveBeenCalled();
//         });
//     });
//     describe('passValidaye must call 1 fn', () => {
//         test('should first', async () => {
//             const spyFn = jest.spyOn(bc, 'compare');
//             await passwdValidate('', '');
//             expect(spyFn).toHaveBeenCalled();
//         });
//     });
// });
