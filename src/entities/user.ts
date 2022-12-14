import mongoose, { Schema } from 'mongoose';
import { id } from '../dbops/repo';

export type ProtoUser = {
    name?: string;
    email?: string;
    passwd?: string;
    role?: string;
    robots?: Array<typeof mongoose.Types.ObjectId>;
};

export type User = {
    _id: id;
    id: string;
    name: string;
    email: string;
    passwd: string;
    role: string;
    robots: Array<typeof mongoose.Types.ObjectId>;
};

export const userSchema = new Schema<User>({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: String,
    passwd: String,
    role: String,
    robots: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Robot',
        },
    ],
});

// userSchema.set('toJSON', {
//     transform: (_document, returnedObject) => {
//         returnedObject.id = returnedObject._id;
//         delete returnedObject.__v;
//         delete returnedObject._id;
//         delete returnedObject.passwd;
//     },
// });
