import axios from 'axios';


const BASE_URL = `https://pixabay.com/api/`;

const searchParams = new URLSearchParams({
  key: '36804541-6df310b69146ced50149f1ae2',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  page: 1,
  per_page: 40,
});
async function fetchImages(q, page = 1) {
  let result = await axios.get(`${BASE_URL}?${searchParams.toString()}`);
  console.log(result);
}
