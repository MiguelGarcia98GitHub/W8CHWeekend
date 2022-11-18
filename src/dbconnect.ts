import mongoose from 'mongoose';
import { CLUSTER, PASSWD, USER } from './config.js';

export function dbConnect() {
    const DBName =
        process.env.NODE_ENV !== 'test' ? 'RobotsDB' : 'RobotsDBTesting';
    const uri = `mongodb+srv://${USER}:${PASSWD}@${CLUSTER}/${DBName}?retryWrites=true&w=majority`;
    return mongoose.connect(uri);
}
