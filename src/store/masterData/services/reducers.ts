import {
  CREATE_SERVICE,
  ERRORS, GET_ALL_SERVICES, GET_SERVICE, ServiceType, UPDATE_SERVICE,
} from "./types";

const initialState = {
  message: null,
  service:false,
  services: [],
};

export const serviceReducer = (
  state = initialState,
  { type, payload }: ServiceType
) => {

  switch (type) {
    case ERRORS:
      return { ...state, errors: payload };
    case GET_ALL_SERVICES:
      return { ...state, services: payload };
    case GET_SERVICE:
      return { ...state, service: payload };
    case CREATE_SERVICE:
      return { ...state, message: payload };
    case UPDATE_SERVICE:
      return { ...state, message: payload };

    default:
      return state;
  }
};
