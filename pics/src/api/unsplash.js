import axios from 'axios';
import UNSPLASH_KEY from './secret';
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: UNSPLASH_KEY,
  },
});
