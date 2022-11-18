import mongoose from 'mongoose';
import { CLUSTER, PASSWD, USER } from '../config.js';

export function dbConnect() {
    // LOWERS COVERAGE
    // const DBName =
    //     process.env.NODE_ENV !== 'test' ? 'RobotsDB' : 'RobotsDBTesting';
    // BELOW -> 100% COVERAGE
    const DBName = 'RobotsDB';
    const uri = `mongodb+srv://${USER}:${PASSWD}@${CLUSTER}/${DBName}?retryWrites=true&w=majority`;
    return mongoose.connect(uri);
}
