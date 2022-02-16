export const ERRORS = "ERRORS";
export const GET_ALL_DISTRICTS = "GET_ALL_DISTRICTS";
export const CREATE_DISTRICT = "CREATE_DISTRICT";
export const UPDATE_DISTRICT = "UPDATA_DISTRICT";
export const GET_DISTRICT = "GET_DISTRICT";

export interface IErrors {
  status: number;
  statusText: string;
}
export interface ISubErrors {
  message: string;
  fieldName: string;
}

export interface IDistrict {
  id?: string;
  name: string;
  password?: string;
  email?: string;
  description: string;
  status?: string;
}

interface IICreateDistrict {
  type: typeof CREATE_DISTRICT;
  payload: {
    message: string;
  };
}

interface IUpdateDistrict {
  type: typeof UPDATE_DISTRICT;
  payload: {
    message: string;
  };
}

interface IDistrictList {
  type: typeof GET_ALL_DISTRICTS;
  payload: {
    districts: IDistrict[];
  };
}

interface IGetDistrict {
  type: typeof GET_DISTRICT;
  payload: {
    district: IDistrict;
  };
}

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export type DistrictType =
  | IWriteErrors
  | IDistrictList
  | IICreateDistrict
  | IGetDistrict
  | IUpdateDistrict;
