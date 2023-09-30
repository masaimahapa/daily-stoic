import {app} from "../../server";
const request = require('supertest');


describe("Posts API", () => {

    describe("Test GET /posts", () =>{
        test("It should respond with 200 success", async ()=>{
            const response = await request(app).get("/api/posts");
            expect(Array.isArray(response.body)).toBeTruthy();
            expect(response.statusCode).toEqual(200);
        })
    });

    it('should fetch a single post', async () => {
        const res = await request(app).get('/api/posts/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('title');
      });


    it('should create a new post', async () => {
        const newPost = {
            title: 'Test Post',
            body: 'This is a test post'
        };
        const res = await request(app)
            .post('/api/posts')
            .send(newPost)
            .set('Accept', 'application/json');
        
        expect(res.statusCode).toEqual(200); 
        expect(res.body).toHaveProperty('id'); 
        expect(res.body.title).toBe(newPost.title);
    });

    it('should update an existing post', async () => {
        const updatedPost = {
            title: 'Updated Test Post',
            body: 'This is an updated test post'
        };
        const postIdToUpdate = 1; 
        const res = await request(app)
            .put(`/api/posts/${postIdToUpdate}`)
            .send(updatedPost)
            .set('Accept', 'application/json');
        
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toBe(updatedPost.title);
        expect(res.body.body).toBe(updatedPost.body);
    });

    it('should delete a post', async () => {
        const postIdToDelete = 1; 
        const res = await request(app)
            .delete(`/api/posts/${postIdToDelete}`);
        
        expect(res.statusCode).toEqual(200);
    });

})

