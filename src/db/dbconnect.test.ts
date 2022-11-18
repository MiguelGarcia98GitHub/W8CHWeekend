import mongoose from 'mongoose';
import { dbConnect } from './dbconnect';

describe('Given error.ts', () => {
    describe('When we test connection to the database', () => {
        test('Then it should provide a valid type of mongoose database', async () => {
            const dbConnectResult = await dbConnect();
            expect(typeof dbConnectResult).toBe(typeof mongoose);
            mongoose.disconnect();
        });
    });
});
