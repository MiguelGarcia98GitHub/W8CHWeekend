import mongoose, { model, Schema, Types } from 'mongoose';

export type ProtoRobot = {
    id: string;
    name?: string;
    resistance?: number;
    speed?: number;
    image?: string;
    owner?: Types.ObjectId;
};

export type Robot = {
    _id?: typeof mongoose.Types.ObjectId;
    id: typeof mongoose.Types.ObjectId;
    name: string;
    resistance: number;
    speed: number;
    image: string;
    owner?: Types.ObjectId;
};

export const robotSchema = new Schema<Robot>({
    id: {
        type: mongoose.Types.ObjectId,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
    },
    speed: { type: Number, min: 0, max: 10 },
    resistance: { type: Number, min: 0, max: 10 },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

// robotSchema.set('toJSON', {
//     transform: (_document, returnedObject) => {
//         returnedObject.id = returnedObject._id;
//         delete returnedObject.__v;
//         delete returnedObject._id;
//     },
// });

export const Robot = model<Robot>('Robot', robotSchema, 'robots');
