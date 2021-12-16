import { LOGIN, ERRORS, IAuthType } from "./types";

const initialState = {
  message: null,
};

export const authReducer = (
  state = initialState,
  { type, payload }: IAuthType
) => {
  switch (type) {
    case LOGIN:
      return { ...state, message: payload };

    case ERRORS:
      return { ...state, errors: payload };

    default:
      return state;
  }
};
