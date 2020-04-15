import axios from 'axios';

export const getUserDetails = (username) => axios.get(`/api/user/${username}`);
