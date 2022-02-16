export const ERRORS = "ERRORS";
export const GET_ALL_SUBSCRIPTIONS = "GET_ALL_SUBSCRIPTIONS";
export const CREATE_SUBSCRIPTION = "CREATE_SUBSCRIPTION";
export const UPDATE_SUBSCRIPTION = "UPDATA_SUBSCRIPTION";
export const GET_SUBSCRIPTION = "GET_SUBSCRIPTION";

export interface IErrors {
  status: number;
  statusText: string;
}
export interface ISubErrors {
  messageS: string;
  fieldName: string;
}

export interface ISubscription {
  id?: string;
  emailS: string;
  campaignIdS: any;
}

interface ICreateSubscription {
  type: typeof CREATE_SUBSCRIPTION;
  payload: {
    messageS: string;
  };
}

interface IUpdateSubscription {
  type: typeof UPDATE_SUBSCRIPTION;
  payload: {
    messageS: string;
  };
}

interface ISubscriptionList {
  type: typeof GET_ALL_SUBSCRIPTIONS;
  payload: {
    subscriptions: ISubscription[];
  };
}

interface IGetSubscription  {
  type: typeof GET_SUBSCRIPTION;
  payload: {
    subscription: ISubscription;
  };
}

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errorsS: IErrors;
  };
}

export type SubscriptionType =
  | IWriteErrors
  | ISubscriptionList
  | ICreateSubscription
  | IGetSubscription
  | IUpdateSubscription;
