import axios from 'axios';

const api = axios.create({ baseURL: 'https://bobarber-backend.herokuapp.com' });
// const api = axios.create({ baseURL: 'http://192.168.136.129:3333' });

export default api;
