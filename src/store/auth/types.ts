export const LOGIN = "LOGIN";
export const ERRORS = "ERRORS";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const UPDATE_USER = "UPDATA_USER";
export const CHANGE_USER_PASSWORD = "CHANGE_USER_PASSWORD";
export const GET_USER = "GET_USER";

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

export interface IUser {
  id?: string;
  username?: string;
  password?: string;
  email?: string;
  role?: string;
  isActive?: boolean;
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

interface IUpdateUser {
  type: typeof UPDATE_USER;
  payload: {
    message: string;
  };
}

interface IChangeUserPassword {
  type: typeof CHANGE_USER_PASSWORD;
  payload: {
    message: string;
  };
}

interface IUserList {
  type: typeof GET_ALL_USERS;
  payload: {
    users: IUser[];
  };
}

interface IGetUser {
  type: typeof GET_USER;
  payload: {
    user: IUser;
  };
}

export type IAuthType =
  | ILogin
  | ILoginErrors
  | IPasswordErrors
  | IUpdateUser
  | IUserList
  | IGetUser
  | IChangeUserPassword;
