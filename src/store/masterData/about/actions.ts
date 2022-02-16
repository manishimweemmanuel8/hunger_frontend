import axios from "axios";
import {
  CREATE_ABOUT,
  ERRORS,
  GET_ABOUT,
  GET_ALL_ABOUTS,
  IAbout,
  UPDATE_ABOUT,
} from "./types";
import { AppThunk } from "../../configureStore";
import { dispatchHandler } from "../../helper/dispatchHandler";

export const createAbout =
  (formData: IAbout, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    console.log(formData);

    try {
      const URL = "/about";

      const { data } = await axios.post(URL, formData);

      // if (data) {
      history.push("/admin/about");
      // }
    } catch (error: any) {
      if (error) {
        const data = error.response.data;
        console.log(data);
        return dispatchHandler({
          type: ERRORS,
          data,
          dispatch,
        });
      }
    }
  };

export const getAbouts = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/about";

    const { data } = await axios.get(URL);
    if (data) {
      dispatchHandler({
        type: GET_ALL_ABOUTS,
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

export const getAbout =
  (aboutId: string,history:any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/about/${aboutId}`;

      const { data } = await axios.get(URL);

      if (data) {
        dispatchHandler({
          type: GET_ABOUT,
          data:data,
          dispatch,
        });
        history.push(`/admin/about/${aboutId}`);

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

export const updateAbout =
  (aboutId: any, formData: IAbout, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/about/${aboutId}`;

      const { data } = await axios.patch(URL, formData);
      history.push("/admin/about");
    } catch (error: any) {
      if (error) {
        const data = error.response.data;
        return dispatchHandler({
          type: ERRORS,
          data,
          dispatch,
        });
      }
    }
  };
