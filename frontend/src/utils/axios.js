import axios from 'axios';

const customisedAxios = axios.create({
  baseURL: 'https://mini-ecom-aiok.onrender.com/api',
  timeout: 150000,
});

export default customisedAxios;
