import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://shopping-list-718e1.firebaseio.com/'
});

export default instance;