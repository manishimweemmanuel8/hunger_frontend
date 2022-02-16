import {
  CREATE_DONATION,
  DonationType,
  ERRORS,
  GET_ALL_CAMPAIGN_DONATIONS,
  GET_ALL_DONATIONS,
  GET_DONATION,
  UPDATE_DONATION,
} from "./types";

const initialState = {
  message: null,
  donation: false,
  donations: [],
  campaignDonations: [],
};

export const donationReducer = (
  state = initialState,
  { type, payload }: DonationType
) => {
  console.log(payload);

  switch (type) {
    case ERRORS:
      return { ...state, errors: payload };
    case GET_ALL_DONATIONS:
      return { ...state, donations: payload };
    case GET_ALL_CAMPAIGN_DONATIONS:
      return { ...state, campaignDonations: payload };
    case GET_DONATION:
      console.log(payload);

      return { ...state, donation: payload };
    case CREATE_DONATION:
      return { ...state, message: payload };
    case UPDATE_DONATION:
      return { ...state, message: payload };
    default:
      return state;
  }
};
