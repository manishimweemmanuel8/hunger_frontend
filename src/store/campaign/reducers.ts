import {
  CampaignType,
  CREATE_CAMPAIGN,
  ERRORS,
  GET_ALL_CAMPAIGNS,
  GET_CAMPAIGN,
  GET_CAMPAIGN_LATEST,
  UPDATE_CAMPAIGN,
} from "./types";

const initialState = {
  configMenuErrors: null,
  latest:false,
  campaigns: [],
};

export const campaignReducer = (
  state = initialState,
  { type, payload }: CampaignType
) => {
  switch (type) {
    case ERRORS:
      return { ...state, configMenuErrors: payload, campaignMessage: null };
    case GET_ALL_CAMPAIGNS:
      return { ...state, campaigns: payload };
    case GET_CAMPAIGN:
      return { ...state, campaign: payload };
    case GET_CAMPAIGN_LATEST:
      return { ...state, latest: payload };
    case CREATE_CAMPAIGN:
      return { ...state, campaignMessage: payload };
    case UPDATE_CAMPAIGN:
      return { ...state, campaignMessage: payload };
    default:
      return state;
  }
};
