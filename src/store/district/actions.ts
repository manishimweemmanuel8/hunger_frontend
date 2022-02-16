import axios from "axios";
import { ERRORS, GET_ALL_DISTRICTS, GET_DISTRICT, IDistrict } from "./types";
import { AppThunk } from "../configureStore";
import { dispatchHandler } from "../helper/dispatchHandler";

export const createDistrict =
  (formData: IDistrict, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });

    try {
      const URL = "/district";

      const { data } = await axios.post(URL, formData);

      // if (data) {
      history.push("/admin/district");
      // }
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

export const getDistricts = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  console.log("hello");
  try {
    const URL = "/district";

    const { data } = await axios.get(URL);
    console.log(data);
    if (data) {
      dispatchHandler({
        type: GET_ALL_DISTRICTS,
        data,
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

export const getDistrict =
  (districtId: string, history:any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/district/${districtId}`;

      const { data } = await axios.get(URL);
      console.log(data);

      if (data) {
        dispatchHandler({
          type: GET_DISTRICT,
          data,
          dispatch,
        });
        history.push(`/admin/district/${districtId}`);

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

export const updateDistrict =
  (district: any, formData: IDistrict, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/district/${district}`;

      const { data } = await axios.patch(URL, formData);
      history.push("/admin/district");
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
