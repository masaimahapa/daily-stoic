import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getAllUsers = async()=> {
    return axios.get(`${API_URL}/users`);
}

export const getUserById = async(userId:string)=> {
    return axios.get(`${API_URL}/users/${userId}`);
}