import {
  CREATE_SERVICE,
  ERRORS,
  GET_ALL_SERVICES,
  GET_SERVICE,
  serviceType,
  UPDATE_SERVICE,
} from "./types";

const initialState = {
  configMenuErrors: null,
  services: [],
};

export const serviceReducer = (
  state = initialState,
  { type, payload }: serviceType
) => {
  switch (type) {
    case ERRORS:
      return { ...state, configMenuErrors: payload, serviceMessage: null };
    case GET_ALL_SERVICES:
      return { ...state, services: payload };
    case GET_SERVICE:
      return { ...state, service: payload };
    case CREATE_SERVICE:
      return { ...state, serviceMessage: payload };
    case UPDATE_SERVICE:
      return { ...state, serviceMessage: payload };
    default:
      return state;
  }
};
