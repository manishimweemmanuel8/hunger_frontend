import {
  ContactType,
  CREATE_CONTACT,
  ERRORS,
  GET_ALL_CONTACTS,
  GET_CONTACT,
  UPDATE_CONTACT,
} from "./types";

const initialState = {
  configMenuErrors: null,
  contacts: [],
};

export const contactReducer = (
  state = initialState,
  { type, payload }: ContactType
) => {
  switch (type) {
    case ERRORS:
      return { ...state, configMenuErrors: payload, contactMessage: null };
    case GET_ALL_CONTACTS:
      return { ...state, contacts: payload };
    case GET_CONTACT:
      return { ...state, contact: payload };
    case CREATE_CONTACT:
      return { ...state, contactMessage: payload };
    case UPDATE_CONTACT:
      return { ...state, contactMessage: payload };
    default:
      return state;
  }
};
