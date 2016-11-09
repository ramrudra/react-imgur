import { combineReducers } from 'redux';
import GalleryReducer from './reducer_gallery';

const rootReducer = combineReducers({
  gallery: GalleryReducer
});

export default rootReducer;
