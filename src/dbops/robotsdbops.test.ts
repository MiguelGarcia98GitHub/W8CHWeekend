import { RobotsDbOps } from './robotsdbops';
import { dbConnect } from './../db/dbconnect';
const mockData = [
    {
        name: 'PepeRobot1',
        resistance: '5',
        speed: '2',
        creationDate: new Date().toLocaleDateString(),
    },
    {
        name: 'PepeRobot2',
        resistance: '3',
        speed: '4',
        creationDate: new Date().toLocaleDateString(),
    },
];

describe('Given robotsdbops class', () => {
    const repository = new RobotsDbOps();

    beforeAll(async () => {
        await dbConnect();
        await repository.getModel().deleteMany();
        await repository.getModel().insertMany(mockData);
        const data = await repository.getModel().find();
        const testIds = [data[0].id, data[1].id];
    });

    describe('When we use getAll method', () => {
        test('Then it should give us a list of robots', async () => {
            const result = await repository.getAll();
            expect(result[0].name).toEqual(mockData[0].name);
            expect(result[1].name).toEqual(mockData[1].name);
        });
    });

    describe('When we use post method', () => {
        test('Then it should create a new robot', async () => {
            const newRobot = {
                name: 'PepeRobot123',
                resistance: '5',
                speed: '2',
            };
            const result = await repository.post(newRobot);
            expect(result.speed).toEqual(mockData[0].speed);
        });
    });
});
