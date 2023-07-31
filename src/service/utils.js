import axios from 'axios';

const KEY = '36804541-6df310b69146ced50149f1ae2';
axios.defaults.baseURL = `https://pixabay.com/api/?key=${KEY}`;
async function grabImages(q, page = 1) {
  let result = await axios.get('', { params: { q, page } });
  return result.data;
}
