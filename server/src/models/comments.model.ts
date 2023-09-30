import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getComments = async()=> {
    return axios.get(`${API_URL}/comments`);
}

export const getCommentsByPostId = async(postId: string)=> {
    return axios.get(`${API_URL}/comments?postId=${postId}`);
}