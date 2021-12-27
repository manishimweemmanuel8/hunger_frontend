import axios from "axios";
import {
  ERRORS,
  GET_ALL_ITEMS,
  CREATE_ITEM,
  IItem,
  DELETE_ITEM,
  GET_ITEM,
  UPLOAD_IMAGE,
  UPDATE_ITEM,
} from "./types";
import { AppThunk } from "../../configureStore";
import { dispatchHandler } from "../../helper/dispatchHandler";

export const createItem =
  (information: IItem): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = "/items";

      const header = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const info = {
        name: information.name,
        description: information.description,
        status: information.status,
      };

      const { data } = await axios.post(URL, info);

      if (data) {
        dispatchHandler({
          type: CREATE_ITEM,
          data: data.message,
          dispatch,
        });
      }
    } catch (error: any) {
      if (error) {
        const data = error.response;
        return dispatchHandler({
          type: ERRORS,
          data,
          dispatch,
        });
      }
    }
  };

export const getItems = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/items";
    const header = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.get(URL, header);
    if (data) {
      dispatchHandler({
        type: GET_ALL_ITEMS,
        data: data,
        dispatch,
      });
    }
  } catch (error: any) {
    if (error) {
      const data = error.response;
      return dispatchHandler({
        type: ERRORS,
        data,
        dispatch,
      });
    }
  }
};

export const deleteItem =
  (itemId: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/items/${itemId}`;
      const { data } = await axios.delete(URL);
      if (data) {
        dispatchHandler({
          type: DELETE_ITEM,
          data: data.message,
          dispatch,
        });
      }
    } catch (error: any) {
      if (error) {
        const data = error.response;
        return dispatchHandler({
          type: ERRORS,
          data,
          dispatch,
        });
      }
    }
  };

export const getItem =
  (itemId: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/items/${itemId}`;

      const { data } = await axios.get(URL);
      console.log(data);

      if (data) {
        dispatchHandler({
          type: GET_ITEM,
          data: data,
          dispatch,
        });
      }
    } catch (error: any) {
      if (error) {
        const data = error.response;
        return dispatchHandler({
          type: ERRORS,
          data,
          dispatch,
        });
      }
    }
  };

export const uploadImage =
  (itemId: any, information: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/items/uploadImage/${itemId}`;

      const file = information.name;
      const formData = new FormData();
      formData.append("file", information);

      const { data } = await axios.post(URL, formData);
      if (data) {
        dispatchHandler({
          type: UPLOAD_IMAGE,
          data: data.message,
          dispatch,
        });
      }
    } catch (error: any) {
      if (error) {
        const data = error.response;
        return dispatchHandler({
          type: ERRORS,
          data,
          dispatch,
        });
      }
    }
  };

export const updateItem =
  (itemId: any, information: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/items/${itemId}`;

      // const file = information.name;
      // const formData = new FormData();
      // formData.append("file", information);

      console.log(information);

      const { data } = await axios.patch(URL, information);
      if (data) {
        dispatchHandler({
          type: UPDATE_ITEM,
          data: data.message,
          dispatch,
        });
      }
    } catch (error: any) {
      if (error) {
        const data = error.response;
        return dispatchHandler({
          type: ERRORS,
          data,
          dispatch,
        });
      }
    }
  };
