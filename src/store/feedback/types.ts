import { ICampaign } from "../campaign/types";

export const ERRORS = "ERRORS";
export const GET_ALL_FEEDBACKS = "GET_ALL_FEEDBACKS";
export const GET_ALL_CAMPAIGN_FEEDBACKS = "GET_ALL_CAMPAIGN_FEEDBACKS";
export const CREATE_FEEDBACK = "CREATE_FEEDBACK";
export const UPDATE_FEEDBACK = "UPDATA_FEEDBACK";
export const GET_FEEDBACK = "GET_FEEDBACK";

export interface IErrors {
  status: number;
  statusText: string;
}
export interface ISubErrors {
  message: string;
  fieldName: string;
}

export interface IFeedback {
  id?: string;
  names: string;
  phone?: string;
  location?: string;
  campaignId?: any;
  feedback?: string;
  campaign?:ICampaign;
}

interface ICreateFeedback {
  type: typeof CREATE_FEEDBACK;
  payload: {
    message: string;
  };
}

interface IUpdateFeedback {
  type: typeof UPDATE_FEEDBACK;
  payload: {
    message: string;
  };
}

interface IFeedbackList {
  type: typeof GET_ALL_FEEDBACKS;
  payload: {
    feedbacks: IFeedback[];
  };
}

interface ICampaignFeedbackList {
  type: typeof GET_ALL_CAMPAIGN_FEEDBACKS;
  payload: {
    campaignFeedbacks: IFeedback[];
  };
}
interface IGetFeedback {
  type: typeof GET_FEEDBACK;
  payload: {
    comment: IFeedback;
  };
}

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export type FeedbackType =
  | IWriteErrors
  | IFeedbackList
  | ICreateFeedback
  | IGetFeedback
  | ICampaignFeedbackList
  | IUpdateFeedback;
