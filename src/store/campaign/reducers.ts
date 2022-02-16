import {
  CampaignType,
  CREATE_CAMPAIGN,
  ERRORS,
  GET_ALL_CAMPAIGNS,
  GET_ALL_CAMPAIGNS_DISTRICT,
  GET_CAMPAIGN,
  GET_CAMPAIGN_LATEST,
  UPDATE_CAMPAIGN,
  UPLOAD_IMAGE,
} from "./types";

const initialState = {
  message: null,
  latest: false,
  campaign: false,
  campaigns: [],
  campaignsDistrict: [],
};

export const campaignReducer = (
  state = initialState,
  { type, payload }: CampaignType
) => {
  console.log(payload);
  switch (type) {
    case ERRORS:
      return { ...state, errors: payload };
    case GET_CAMPAIGN:
      return { ...state, campaign: payload };
    case GET_ALL_CAMPAIGNS:
      return { ...state, campaigns: payload };
    case GET_ALL_CAMPAIGNS_DISTRICT:
      return { ...state, campaignsDistrict: payload };
    case GET_CAMPAIGN_LATEST:
      return { ...state, latest: payload };
    case CREATE_CAMPAIGN:
      return { ...state, message: payload };
    case UPDATE_CAMPAIGN:
      return { ...state, message: payload };
    case UPLOAD_IMAGE:
      return { ...state, message: payload };
    default:
      return state;
  }
};
