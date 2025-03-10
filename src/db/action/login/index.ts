import { LOGIN_REQUEST, 
  LOGIN_SUCCESS,
  INIT_LOGIN_REQUEST
} from '../../actionTypes/login';

export const initLoginRequest = (params) => {
  return {
    type: INIT_LOGIN_REQUEST,
    payload:params
  };
};
  
export const loginRequest = (params) => {
return {
  type: LOGIN_REQUEST,
  payload:params
};
};

export const loginSuccess = () => {
return {
  type: LOGIN_SUCCESS
};
};
