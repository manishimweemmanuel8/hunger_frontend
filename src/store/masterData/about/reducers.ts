import {
  ERRORS,
  AboutType,
  GET_ALL_ABOUTS,
  GET_ABOUT,
  CREATE_ABOUT,
  UPDATE_ABOUT,
} from "./types";

const initialState = {
  message: null,
  about:false,
  abouts: [],
};

export const aboutReducer = (
  state = initialState,
  { type, payload }: AboutType
) => {

  switch (type) {
    case ERRORS:
      return { ...state, errors: payload };
    case GET_ALL_ABOUTS:
      return { ...state, abouts: payload };
    case GET_ABOUT:
      return { ...state, about: payload };
    case CREATE_ABOUT:
      return { ...state, message: payload };
    case UPDATE_ABOUT:
      return { ...state, message: payload };

    default:
      return state;
  }
};
