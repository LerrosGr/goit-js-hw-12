export function getImages(q) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '43096972-1afb589163252f275da428b1d',
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const url = `${BASE_URL}?${params}`;
  return fetch(url)
    .then(res => res.json())
    .catch(error => {
      console.error('Error occurred while fetching images:', error);
      throw error;
    });
}
