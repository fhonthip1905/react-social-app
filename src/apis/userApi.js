import axios from './axios.config';

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';


export const getUserById = async (id) => {
    return await axios.get(`/users/${id}`);
};
