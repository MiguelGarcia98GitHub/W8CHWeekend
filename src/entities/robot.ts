import mongoose, { Schema } from 'mongoose';

export type ProtoRobot = {
    name?: string;
    resistance?: number;
    speed?: number;
    image?: string;
    owner?: string;
};

export type Robot = {
    id: typeof mongoose.Types.ObjectId;
    name: string;
    resistance: number;
    speed: number;
    image: string;
    owner: string;
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
        type: String,
        ref: 'User',
    },
});

robotSchema.set('toJSON', {
    transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject._id;
    },
});
