export const ERRORS = "ERRORS";
export const GET_ALL_CONTACTS = "GET_ALL_CONTACTS";
export const CREATE_CONTACT = "CREATE_CONTACT";
export const UPDATE_CONTACT = "UPDATA_CONTACT";
export const GET_CONTACT = "GET_CONTACT";

export interface IErrors {
  status: number;
  statusText: string;
}
export interface ISubErrors {
  message: string;
  fieldName: string;
}

export interface IContact {
  id?: string;
  name: string;
  value: string;
}

interface IICreateContact {
  type: typeof CREATE_CONTACT;
  payload: {
    message: string;
  };
}

interface IUpdateContact {
  type: typeof UPDATE_CONTACT;
  payload: {
    message: string;
  };
}

interface IContactList {
  type: typeof GET_ALL_CONTACTS;
  payload: {
    contacts: IContact;
  };
}

interface IGetContact {
  type: typeof GET_CONTACT;
  payload: {
    contact: IContact;
  };
}

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export type ContactType =
  | IWriteErrors
  | IContactList
  | IICreateContact
  | IGetContact
  | IUpdateContact;
