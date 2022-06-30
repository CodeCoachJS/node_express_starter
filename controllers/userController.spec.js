const request = require('supertest');
const { app } = require('../server');

describe('userController', () => {
    // let's add a user before each test that we can rely on to be in the database
    beforeEach(async () => {
        await request(app).post('/user').send({
            id: '123',
            email: 'brianjenney83@gmail.com',
            name: 'brian',
        });
    });

    it('rejects requests with no `id` property', async () => {
        const res = await request(app).post('/user').send({
            email: 'brianjenney83@gmail.com',
            name: 'brian',
        });

        const errorMessage = res.body.message;
        expect(errorMessage).toEqual('You must include an id');
    });

    it('creates a user', async () => {
        // we call the route to create a user
        await request(app).post('/user').send({
            id: '123',
            email: 'brianjenney83@gmail.com',
            name: 'brian',
        });

        // we confirm the request above worked by making another request to fetch that user by their id `123`
        const res = await request(app).get('/user/123');

        const user = res.body.user;
        expect(user.id).toEqual('123');
    });

    it('updates a user', async () => {
        const updatedEmail = 'somenewemail@hotmail.com';
        await request(app).put('/user').send({
            id: '123',
            email: updatedEmail,
            name: 'brian',
        });

        // we confirm the request above worked by making another request to fetch that user by their id `123`
        const res = await request(app).get('/user/123');

        const user = res.body.user;
        expect(user.email).toEqual(updatedEmail);
    });

    it('deletes a user', async () => {
        await request(app).delete('/user/123');

        // we confirm the request above worked by making another request to fetch that user by their id `123`
        const res = await request(app).get('/user/123');
        expect(res.status).toEqual(400);
    });
});
