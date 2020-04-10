import axios from 'axios';


const api = axios.create({
  baseURL: 'https://bossaboxapi.herokuapp.com'
});

export default api;
