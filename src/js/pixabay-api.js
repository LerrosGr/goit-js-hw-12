import axios from 'axios';

export async function getImages(q, currentPage) {
  const url = 'https://pixabay.com/api/';
  const params = {
    key: '43096972-1afb589163252f275da428b1d',
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 15,
    page: currentPage,
  };

  try {
    const res = await axios.get(url, { params });
    return res.data;
  } catch (err) {
    console.error('Error occurred while fetching images:', error);
    throw error;
  }
}
