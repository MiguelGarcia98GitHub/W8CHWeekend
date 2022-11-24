import mongoose, { model } from 'mongoose';
import { Robot } from '../entities/robot.js';
import { userSchema } from '../entities/user.js';
import { Repo, id } from './repo.js';
import { UserRepository } from './user.js';

export class RobotRepository implements Repo<Robot> {
    static instance: RobotRepository;

    public static getInstance(): RobotRepository {
        if (!RobotRepository.instance) {
            RobotRepository.instance = new RobotRepository();
        }
        return RobotRepository.instance;
    }

    #Model = Robot;

    #ModelUsers = model('User', userSchema, 'users');

    async getAll(): Promise<Array<Robot>> {
        return this.#Model.find();
        //.populate('owner', {
        //    name: 1,
        //    id: 0,
        //});
    }
    async get(id: id): Promise<Robot> {
        const result = await this.#Model.findById(id);
        return result as Robot;
    }

    async find(search: {
        [key: string]: string | number | Date;
    }): Promise<Robot> {
        const result = await this.#Model.findOne(search);
        return result as unknown as Robot;
    }

    async post(data: Partial<Robot>): Promise<Robot> {
        const newUserRepo = await new UserRepository();
        const owneruser = await newUserRepo.get(data?.owner as any);

        const result = await this.#Model.create(data);
        const findResultByName = await this.#Model.find({
            name: result.name,
        });

        await findResultByName['_id' as unknown as number];

        await this.#ModelUsers.findByIdAndUpdate(
            owneruser._id,
            {
                $push: {
                    robots: [
                        findResultByName[0]
                            ._id as unknown as mongoose.Types.ObjectId,
                    ],
                },
            },
            { new: true }
        );

        // .populate('owner', {
        //     robots: 0,
        // });

        return result as Robot;
    }
    async patch(id: id, data: Partial<Robot>): Promise<Robot> {
        const result = await this.#Model.findByIdAndUpdate(id, data, {
            new: true,
        });
        return result as Robot;
    }

    async delete(id: id): Promise<id> {
        await this.#Model.findByIdAndDelete(id);
        return id;
    }
}
