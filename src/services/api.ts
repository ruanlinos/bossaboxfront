import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_BACKEND : process.env.REACT_APP_PROD_BACKEND;

const api = axios.create({
  baseURL,
});

export default api;
