import authService from './authService';
import http from './httpUtil';

const token = authService.fetchToken();
const options = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

function fetchImageWithId(id) {
  return http.get(`/3/gallery/${id}/`, options);
}

function fetchImages() {
  return http.get(`/3/gallery/hot`, options);
}

function fetchImagesWithSectionParam(section, qs) {
  return http.get(`/3/gallery/hot/${section}?showViral=${qs}`, options);
}

function fetchImagesWithSortParam(sort, qs) {
  return http.get(`/3/gallery/hot/${sort}?showViral=${qs}`, options);
}

function fetchImagesWithWindowParam(window, qs) {
  return http.get(`/3/gallery/hot/${window}?showViral=${qs}`, options);
}

function uploadImages(images) {
  const imagesRef = Array.from(images).map(image => {
    const imageData = new FormData();
    imageData.append('image', image);

    return http.post(`/3/image`, imageData, options);
  });

  return Promise.all(imagesRef);
}

function fetchPersonalImages() {
  return http.get(`/3/account/me/images`, options);
}

export default {
  fetchImageWithId,
  fetchImages,
  fetchImagesWithSectionParam,
  fetchImagesWithSortParam,
  fetchImagesWithWindowParam,
  uploadImages,
  fetchPersonalImages,
};
