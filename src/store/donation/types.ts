import { ICampaign } from "../campaign/types";

export const ERRORS = "ERRORS";
export const GET_ALL_DONATIONS = "GET_ALL_DONATIONS";
export const GET_ALL_CAMPAIGN_DONATIONS = "GET_ALL_CAMPAIGN_DONATIONS";
export const CREATE_DONATION = "CREATE_DONATION";
export const UPDATE_DONATION = "UPDATA_DONATION";
export const GET_DONATION = "GET_DONATION";

export interface IErrors {
  status: number;
  statusText: string;
}
export interface ISubErrors {
  message: string;
  fieldName: string;
}

export interface IDonation {
  id?: string;
  names: string;
  email?: string;
  phone?: string;
  location?: string;
  campaignId?: any;
  description?: string;
  amount: number;
  received?: boolean;
  quantity?: number;
  campaign?:ICampaign;
}

interface ICreateDonation {
  type: typeof CREATE_DONATION;
  payload: {
    message: string;
  };
}

interface IUpdateDonation {
  type: typeof UPDATE_DONATION;
  payload: {
    message: string;
  };
}

interface IDonationList {
  type: typeof GET_ALL_DONATIONS;
  payload: {
    donations: IDonation[];
  };
}

interface ICampaignDonationList {
  type: typeof GET_ALL_CAMPAIGN_DONATIONS;
  payload: {
    campaignDonations: IDonation[];
  };
}
interface IGetDonation {
  type: typeof GET_DONATION;
  payload: {
    donation: IDonation;
  };
}

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export type DonationType =
  | IWriteErrors
  | IDonationList
  | ICreateDonation
  | IGetDonation
  | ICampaignDonationList
  | IUpdateDonation;
