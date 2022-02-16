export const ERRORS = "ERRORS";
export const GET_ALL_CAMPAIGNS = "GET_ALL_CAMPAIGNS";
export const GET_ALL_CAMPAIGNS_DISTRICT = "GET_ALL_CAMPAIGNS_DISTRICT";
export const CREATE_CAMPAIGN = "CREATE_CAMPAIGN";
export const UPDATE_CAMPAIGN = "UPDATA_CAMPAIGN";
export const GET_CAMPAIGN = "GET_CAMPAIGN";
export const GET_CAMPAIGN_LATEST = "GET_CAMPAIGN_LATEST";
export const UPLOAD_IMAGE = "UPLOAD_IMAGE";


export interface IErrors {
  status: number;
  statusText: string;
}
export interface ISubErrors {
  message: string;
  fieldName: string;
}

export interface ICampaign {
  id?: string;
  name: string;
  description: string;
  quantity?: string;
  quality?: string;
  createdDate?: any;
  image?: string;
  file?:string;
}

interface ICreateCampaign {
  type: typeof CREATE_CAMPAIGN;
  payload: {
    message: string;
  };
}

interface IUpdateCampaing {
  type: typeof UPDATE_CAMPAIGN;
  payload: {
    message: string;
  };
}

interface ICampaignList {
  type: typeof GET_ALL_CAMPAIGNS;
  payload: {
    campaigns: ICampaign[];
  };
}

interface ICampaignDistrcitList {
  type: typeof GET_ALL_CAMPAIGNS_DISTRICT;
  payload: {
    campaignsDistrict: ICampaign[];
  };
}

interface IGetCampaign {
  type: typeof GET_CAMPAIGN;
  payload: {
    campaign: ICampaign;
  };
}

interface IGetCampaignLatest {
  type: typeof GET_CAMPAIGN_LATEST;
  payload: {
    latest: ICampaign;
  };
}

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

interface IUploadImage {
  type: typeof UPLOAD_IMAGE;
  payload: {
    message: string;
  };
}

export type CampaignType =
  | IWriteErrors
  | ICampaignList
  | ICreateCampaign
  | IGetCampaign
  | IGetCampaignLatest
  | ICampaignDistrcitList
  | IUpdateCampaing
  | IUploadImage
