const request = require('supertest');
const { app } = require('../server');

describe('userController', () => {
    it('rejects requests with no `id` property', async () => {
        // we call the route to create a user
        const res = await request(app).post('/user/add').send({
            email: 'brianjenney83@gmail.com',
            name: 'brian',
        });

        const errorMessage = res.body.message;
        expect(errorMessage).toEqual('You must include an id');
    });
    it('creates a user', async () => {
        // we call the route to create a user
        await request(app).post('/user/add').send({
            id: '123',
            email: 'brianjenney83@gmail.com',
            name: 'brian',
        });

        // we confirm the request above worked by making another request to fetch that user by their id `123`
        const res = await request(app).get('/user/get?id=123');
        const user = res.body.user;
        expect(user.id).toEqual('123');
    });
});
