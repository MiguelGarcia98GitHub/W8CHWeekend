import { model, Schema } from 'mongoose';
import { ProtoRobot, Robot } from '../interfaces/robot';
import { DataInterface, id } from './dataInterface';

export class RobotsDbOps implements DataInterface<Robot> {
    #schema = new Schema({
        name: {
            type: String,
            required: true,
            unique: true,
        },
        resistance: {
            type: String,
            required: true,
        },
        speed: {
            type: String,
            required: true,
        },
        creationDate: {
            type: String,
        },
    });

    #Model = model('Robot', this.#schema, 'robots');

    constructor() {
        this.#schema.set('toJSON', {
            transform: (_document, returnedObject) => {
                returnedObject.id = returnedObject._id;
                delete returnedObject.__v;
                delete returnedObject._id;
            },
        });
    }

    async getAll(): Promise<Array<Robot>> {
        return this.#Model.find();
    }

    async get(id: id): Promise<Robot> {
        try {
            const result = await this.#Model.findById(id);
            return result as Robot;
        } catch (error) {
            return {} as Robot;
        }
    }

    async post(data: ProtoRobot): Promise<Robot> {
        try {
            const result = await this.#Model.create(data);
            return result as Robot;
        } catch (error) {
            return {} as Robot;
        }
    }

    async patch(id: id, data: Partial<Robot>): Promise<Robot> {
        try {
            const result = await this.#Model.findByIdAndUpdate(id, data, {
                new: true,
            });
            return result as Robot;
        } catch (error) {
            return {} as Robot;
        }
    }

    async delete(id: id): Promise<void> {
        try {
            const result = await this.#Model.findByIdAndDelete(id);
        } catch (error) {
            console.log('error');
        }
    }

    getModel() {
        return this.#Model;
    }
}
