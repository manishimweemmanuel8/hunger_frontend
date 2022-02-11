export const ERRORS = "ERRORS";
export const GET_ALL_SERVICES = "GET_ALL_SERVICES";
export const CREATE_SERVICE = "CREATE_SERVICE";
export const UPDATE_SERVICE = "UPDATA_SERVICE";
export const GET_SERVICE = "GET_SERVICE";

export interface IErrors {
  status: number;
  statusText: string;
}
export interface ISubErrors {
  message: string;
  fieldName: string;
}

export interface IService {
  id?: string;
  name: string;
  description: string;
}

interface IICreateService {
  type: typeof CREATE_SERVICE;
  payload: {
    serviceMessage: string;
  };
}

interface IUpdateService {
  type: typeof UPDATE_SERVICE;
  payload: {
    serviceMessage: string;
  };
}

interface IServiceList {
  type: typeof GET_ALL_SERVICES;
  payload: {
    services: IService[];
  };
}

interface IGetService {
  type: typeof GET_SERVICE;
  payload: {
    service: IService;
  };
}

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export type serviceType =
  | IWriteErrors
  | IServiceList
  | IICreateService
  | IGetService
  | IUpdateService;
