import mongoose from 'mongoose';
import { CLUSTER, PASSWD, USER } from '../config.js';

export function dbConnect() {
    const DBName =
        process.env.NODE_ENV !== 'test' ? 'RobotsDB' : 'RobotsDBTesting';
    let uri = `mongodb+srv://${USER}:${PASSWD}`;
    uri += `@${CLUSTER}/${DBName}?retryWrites=true&w=majority`;
    console.log('URI');
    console.log(uri);

    console.log('URI: ' + uri);

    return mongoose.connect(uri);
}

export async function dbDisconnect() {
    await mongoose.disconnect();
    return mongoose.connection.readyState;
}
