import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async()=> {
    return axios.get(`${API_URL}/posts`);
}

export const getPostsByUserId = async(userId: string)=> {
    return axios.get(`${API_URL}/users/${userId}/posts`);
}


export const getPostById = async(postId: string)=> {
    return axios.get(`${API_URL}/posts/${postId}`);
}

export const createPost = async(postData: any)=> {
    return axios.post(`${API_URL}/posts`, postData);
}

export const updatePost = async(postId: string, postData: any)=> {
    return axios.put(`${API_URL}/posts/${postId}`, postData);
}

export const deletePost = async(postId: string)=> {
    return axios.delete(`${API_URL}/posts/${postId}`);
}