import {
  LOGIN,
  ERRORS,
  IAuthType,
  GET_ALL_USERS,
  GET_USER,
  UPDATE_USER,
  CHANGE_USER_PASSWORD,
} from "./types";

const initialState = {
  message: null,
  user: false,
  users: [],
};

export const authReducer = (
  state = initialState,
  { type, payload }: IAuthType
) => {
  switch (type) {
    case LOGIN:
      return { ...state, message: payload };
    case GET_ALL_USERS:
      return { ...state, users: payload };
    case GET_USER:
      return { ...state, user: payload };
    case UPDATE_USER:
      return { ...state, message: payload };
    case CHANGE_USER_PASSWORD:
      return { ...state, message: payload };
    case ERRORS:
      return { ...state, errors: payload };
    default:
      return state;
  }
};
