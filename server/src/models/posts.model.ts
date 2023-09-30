import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async()=> {
    return axios.get(`${API_URL}/posts`);
}

export const getPostsByUserId = async(userId: string)=> {
    return axios.get(`${API_URL}/posts?userId=${userId}`);
}