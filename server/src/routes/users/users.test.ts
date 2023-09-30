const request = require('supertest');

import { app } from "../../server";

describe('Users API', () => {

    it('should fetch all users', async () => {
        const res = await request(app).get('/api/users');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body[0]).toHaveProperty('name');
    });

    it('should fetch a single user', async () => {
        const userId = 1;
        const res = await request(app).get(`/api/users/${userId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('name');
    });

});