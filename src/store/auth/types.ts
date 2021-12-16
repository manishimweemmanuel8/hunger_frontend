export const LOGIN = "LOGIN";
export const REQUEST_RESET_PASSWORD= "REQUEST_RESET_PASSWORD";
export const RESET_PASSWORD= "RESET_PASSWORD";
export const ERRORS = "ERRORS";
export const GET_USER = "GET_USER";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ALL_EMPLOYEE = "GET_ALL_EMPLOYEE";
export interface IErrors {
  status: string;
  statusText: string;
}

export interface ISubErrors {
  message: string;
  fieldName: string;
}

export interface ILoginParams {
  username: string;
  password: string;
}
interface ILogin {
  type: typeof LOGIN;
  payload: {
    data: ILoginParams;
  };
}

interface ILoginErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}



interface IPasswordErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}




export type IAuthType =
  | ILogin
  | ILoginErrors
  | IPasswordErrors

