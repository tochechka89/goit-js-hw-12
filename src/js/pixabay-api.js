import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43997117-306e8cb8a0972afaf1f3fc80b';

const fetchPhotos = async (searchImage, page) => {
 
    const response = await axios(BASE_URL, {
      params: {
        key: API_KEY,
        q: searchImage,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
        per_page: 15,
      },
    });
    return response.data;
};

export default fetchPhotos;