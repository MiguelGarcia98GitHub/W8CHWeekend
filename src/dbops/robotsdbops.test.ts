// import { RobotsDbOps } from './robotsdbops';
// import { dbConnect } from './../db/dbconnect';
// import { Robot } from '../entities/robot';
// import mongoose from 'mongoose';
// const mockData = [
//     {
//         name: 'PepeRobot1',
//         resistance: '5',
//         speed: '2',
//         creationDate: new Date().toLocaleDateString(),
//     },
//     {
//         name: 'PepeRobot2',
//         resistance: '3',
//         speed: '4',
//         creationDate: new Date().toLocaleDateString(),
//     },
// ];

// describe('Given robotsdbops class', () => {
//     const repository = new RobotsDbOps();

//     beforeAll(async () => {
//         await dbConnect();
//         await repository.getModel().deleteMany();
//         await repository.getModel().insertMany(mockData);
//     });

//     afterAll(() => {
//         mongoose.disconnect();
//     });

//     describe('When we use getAll method', () => {
//         test('Then it should give us a list of robots', async () => {
//             //

//             //

//             const result = await repository.getAll();
//             expect(result[0].name).toEqual(mockData[0].name);
//             expect(result[1].name).toEqual(mockData[1].name);
//         });
//     });

//     describe('When we use get method', () => {
//         test('Then it should give us a robot', async () => {
//             const newRobot = {
//                 name: 'PepeRobot' + Math.floor(Math.random() * 1000000),
//                 resistance: '5',
//                 speed: '2',
//             };
//             await repository.post(newRobot);
//             const listOfRobots = await repository.getAll();

//             await repository.get(listOfRobots[0].id);
//         });
//         test('Then it should give us an error', async () => {
//             await repository.get('123456');
//         });
//     });

//     describe('When we use post method', () => {
//         test('Then it should create a new robot', async () => {
//             const newRobot = {
//                 name: 'PepeRobot123',
//                 resistance: '5',
//                 speed: '2',
//             };
//             const result = await repository.post(newRobot);
//             expect(result.speed).toEqual(mockData[0].speed);
//         });
//         test('Then it should give us an error', async () => {
//             await repository.post({} as Robot);
//         });
//     });
//     describe('When we use patch method', () => {
//         test('Then it should patch a robot', async () => {
//             const newRobot = {
//                 name: 'PepeRobot' + +Math.floor(Math.random() * 1000000),
//                 resistance: '5',
//                 speed: '2',
//             };
//             await repository.post(newRobot);
//             const listOfRobots = await repository.getAll();
//             const result = await repository.patch(listOfRobots[0].id, {
//                 resistance: '8',
//             });
//             expect(result.speed).toEqual(mockData[0].speed);
//         });
//         test('Then it should give us an error', async () => {
//             await repository.patch('123', {} as Robot);
//         });
//     });
//     describe('When we use delete method', () => {
//         test('Then it should delete a robot', async () => {
//             const newRobot = {
//                 name: 'PepeRobot' + Math.floor(Math.random() * 1000000),
//                 resistance: '5',
//                 speed: '2',
//             };
//             await repository.post(newRobot);
//             const listOfRobots = await repository.getAll();
//             await repository.delete(listOfRobots[0].id);
//         });
//         test('Then it should give us an error', async () => {
//             await repository.delete('123');
//         });
//     });
// });

export {};
