export function renderImages(imagesArr) {
  return imagesArr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="list-item">
     <a class="gallery-link" href ="${largeImageURL}">
     <img src="${webformatURL}" alt="${tags}" class="gallery-image"
     </a>
     
      <ul class="information-list">
        <li class="item-information-container">
          <h2 class="main-info">Likes </h2>
            <p class="info">${likes}</p>
          
        </li>
        <li class="item-information-container">
          <h2 class="main-info"> Views</h2>
            <p class="info">${views}</p>
          
        </li>
        <li class="item-information-container">
          <h2 class="main-info">Comments </h2>
            <p class="info">${comments}</p>
          
        </li>
        <li class="item-information-container">
          <h2 class="main-info">Downloads </h2>
            <p class="info">${downloads}</p>
        </li>
      </ul>
   
    </li>`;
      }
    )
    .join('');
}
