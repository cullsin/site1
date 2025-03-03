import { REGISTER_PLACE_REQUEST, REGISTER_PLACE_SUCCESS
} from '../../actionTypes/place';

export const registerPlaceRequest = (params) => {
return {
  type: REGISTER_PLACE_REQUEST,
  payload:params
};
};

export const registerPlaceSuccess = () => {
return {
  type: REGISTER_PLACE_SUCCESS
};
};

// [insert|register|init]Module_name_[Request|Success]