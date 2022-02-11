export const ERRORS = "ERRORS";
export const GET_ALL_ABOUTS = "GET_ALL_ABOUTS";
export const CREATE_ABOUT = "CREATE_ABOUT";
export const UPDATE_ABOUT = "UPDATA_ABOUT";
export const GET_ABOUT = "GET_ABOUT";

export interface IErrors {
  status: number;
  statusText: string;
}
export interface ISubErrors {
  message: string;
  fieldName: string;
}

export interface IAbout {
  id?: string;
  name: string;
  description: string;
}

interface IICreateAbout {
  type: typeof CREATE_ABOUT;
  payload: {
    message: string;
  };
}

interface IUpdateAbout {
  type: typeof UPDATE_ABOUT;
  payload: {
    aboutMessage: string;
  };
}

interface IAboutList {
  type: typeof GET_ALL_ABOUTS;
  payload: {
    abouts: IAbout;
  };
}

interface IGetAbout {
  type: typeof GET_ABOUT;
  payload: {
    about: IAbout;
  };
}

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export type AboutType =
  | IWriteErrors
  | IAboutList
  | IICreateAbout
  | IGetAbout
  | IUpdateAbout;
