const request = require('supertest');

import { app } from '../../server'; 

describe('Comments API', () => {
    
    it('should fetch all comments for a post', async () => {
        const postId = 1;
        const res = await request(app).get(`/api/posts/${postId}/comments`);
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
        expect(res.body[0]).toHaveProperty('body');
    });
})