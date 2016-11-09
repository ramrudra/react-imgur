import { FETCH_GALLERY } from '../Actions';

const GalleryReducer = (state = null, action) => {

    switch (action.type) {
        case FETCH_GALLERY:
            return action.payload.data.data;
    }

    return state;
};

export default GalleryReducer;
