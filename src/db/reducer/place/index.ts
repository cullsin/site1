import { REGISTER_PLACE_REQUEST, REGISTER_PLACE_SUCCESS 
} from '../../actionTypes/place';

const placeReducer = (state = {}, action) => {
    switch (action.type) {  
      case REGISTER_PLACE_REQUEST:
        state = { place:{} };
        break;
      case REGISTER_PLACE_SUCCESS:
        state = { ...state, ...action };
        break;
      default:
        break;
    }
    return state;
};

export default placeReducer;