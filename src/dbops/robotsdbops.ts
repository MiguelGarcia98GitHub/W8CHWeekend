import mongoose, { model } from 'mongoose';
import { Robot, ProtoRobot } from '../entities/robot.js';
import { robotSchema } from '../entities/robot.js';
import { User, userSchema } from '../entities/user.js';
import { Repo, id } from './repo.js';
import { UserRepository } from './user.js';

export class RobotRepository implements Repo<Robot> {
    #Model = model('Robot', robotSchema, 'robots');

    async getAll(): Promise<Array<Robot>> {
        return this.#Model.find();
        //.populate('owner', {
        //    name: 1,
        //    id: 0,
        //});
    }
    async get(id: id): Promise<Robot> {
        const result = await this.#Model.findById(id); //as Coffee;
        if (!result) throw new Error('Not found id');
        return result as Robot;
    }

    async find(search: {
        [key: string]: string | number | Date;
    }): Promise<Robot> {
        console.log({ search });
        const result = await this.#Model.findOne(search); //as Robot;
        // if (!result) throw new Error('Not found id');
        return result as unknown as Robot;
    }

    async post(data: any): Promise<any> {
        //TODO
        console.log('DATA: ');
        console.log(data);
        const newUserRepo = await new UserRepository();
        const owneruser = await newUserRepo.get(data?.owner as any);
        console.log('OWNER USER: ');
        console.log(owneruser);

        // await newUserRepo.patch(owneruser?._id, {...newUser, {$push: {robots: data}}});
        const Model1 = model('User', userSchema, 'users');

        // console.log(
        //     await Model1.updateOne(
        //         { id: owneruser.id },
        //         { $push: { robots: data } }
        //     )
        // );

        const result = await this.#Model.create(data);
        const findIDofResult: any = await this.#Model.find({
            name: result.name,
        });
        console.log('ID OF RESULT:');
        const IDofResult = findIDofResult[0]._id;
        console.log('FIND ID OF RESULT:');
        console.log(findIDofResult);
        console.log('FIND RESULT ID:');
        console.log(findIDofResult._id);
        console.log('RESULT:');
        console.log(result);
        console.log('ID:');
        console.log(typeof owneruser._id);
        console.log(owneruser._id);

        const newUpdate = await Model1.findByIdAndUpdate(
            owneruser._id,
            {
                $push: {
                    robots: [findIDofResult[0]._id as mongoose.Types.ObjectId],
                },
            },
            { new: true }
        );
        console.log(newUpdate);
        // .populate('owner', {
        //     robots: 0,
        // });

        return result as Robot;
    }
    async patch(id: id, data: Partial<Robot>): Promise<Robot> {
        const result = await this.#Model.findByIdAndUpdate(id, data, {
            new: true,
        });
        if (!result) throw new Error('Not found id');
        return result as Robot;
    }

    async delete(id: id): Promise<id> {
        const result = await this.#Model.findByIdAndDelete(id);
        if (result === null) throw new Error('Not found id');
        return id;
    }

    #disconnect() {
        mongoose.disconnect();
        console.log(mongoose.connection.readyState);
    }

    #generateDate(date: string | undefined) {
        if (!date) return new Date();
        const validDate =
            new Date(date) === new Date('') ? new Date() : new Date(date);
        return validDate;
    }

    getModel() {
        return this.#Model;
    }
}
