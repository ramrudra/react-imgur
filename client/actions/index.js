
import axios from 'axios';

const CLIENT_ID = '6fb536bfcc4155e';
const CLIENT_SECRET = '1aa382f637b15c68702bc8ec8da06d4d082b98c9';
const API_URL = 'https://api.imgur.com/3/gallery';

axios.defaults.baseURL = 'https://api.imgur.com/oauth2/authorize';
axios.defaults.headers.common['Authorization'] = 'Client-ID ' + CLIENT_ID;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


export const FETCH_GALLERY = 'FETCH_GALLERY';

export const FetchGallery = (section) => {
  const URL = `${API_URL}/${section}/viral/1`;
  const REQUEST = axios.get(URL);

  return {
      type: FETCH_GALLERY,
      payload: REQUEST
  };
};
