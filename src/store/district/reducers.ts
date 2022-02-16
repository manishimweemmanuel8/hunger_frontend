import {
  CREATE_DISTRICT,
  DistrictType,
  ERRORS,
  GET_ALL_DISTRICTS,
  GET_DISTRICT,
  UPDATE_DISTRICT,
} from "./types";

const initialState = {
  message: null,
  district: false,
  districts: [],
};

export const districtReducer = (
  state = initialState,
  { type, payload }: DistrictType
) => {
  switch (type) {
    case ERRORS:
      return { ...state, errors: payload };
    case GET_ALL_DISTRICTS:
      return { ...state, districts: payload };
    case GET_DISTRICT:
      return { ...state, district: payload };
    case CREATE_DISTRICT:
      return { ...state, message: payload };
    case UPDATE_DISTRICT:
      return { ...state, message: payload };

    default:
      return state;
  }
};
