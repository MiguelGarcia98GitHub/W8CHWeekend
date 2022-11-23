import mongoose, { Schema, Types } from 'mongoose';

export type ProtoRobot = {
    id: any;
    name?: string;
    resistance?: number;
    speed?: number;
    image?: string;
    owner?: Types.ObjectId;
};

export type Robot = {
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
