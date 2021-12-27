export const ERRORS = "ERRORS";
export const GET_ALL_ITEMS = "GET_ALL_ITEMS";
export const CREATE_ITEM = "CREATE_ITEM";
export const UPLOAD_IMAGE = "UPLOAD_IMAGE";
export const UPDATE_ITEM = "UPDATA_ITEM";
export const DELETE_ITEM = "DELETE_ITEME";
export const GET_ITEM = "GET_ITEM";

export interface IErrors {
  status: number;
  statusText: string;
}
export interface ISubErrors {
  message: string;
  fieldName: string;
}

export interface IItem {
  id?: string;
  name: string;
  description: string;
  image?: string;
  payload?: any;
  data?:any;
  status: boolean;
}



interface IICreateItem {
  type: typeof CREATE_ITEM;
  payload: {
    itemMessage: string;
  };
}

interface IUploadImage {
  type: typeof UPLOAD_IMAGE;
  payload: {
    itemMessage: string;
  };
}

interface IUpdateItem {
  type: typeof UPDATE_ITEM;
  payload: {
    itemMessage: string;
  };
}

interface IIDeleteItem{
  type: typeof DELETE_ITEM;
  payload:{
    itemDeleteMessage:string;
  }
}

interface IItemList {
  type: typeof GET_ALL_ITEMS;
  payload: {
    items: IItem;
  };
}

interface IGetItem {
  type: typeof GET_ITEM;
  payload: {
    item: IItem;
  };
}

interface IWriteErrors {
  type: typeof ERRORS;
  payload: {
    errors: IErrors;
  };
}

export type ItemType = IWriteErrors | IItemList | IICreateItem | IIDeleteItem|IGetItem|IUploadImage|IUpdateItem;
