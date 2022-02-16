import axios from "axios";
import { ERRORS, GET_ALL_SERVICES, GET_SERVICE, IService } from "./types";
import { AppThunk } from "../../configureStore";
import { dispatchHandler } from "../../helper/dispatchHandler";

export const createService =
  (formData: IService, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });

    try {
      const URL = "/services";

      const { data } = await axios.post(URL, formData);

      // if (data) {
      history.push("/admin/service");
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

export const getServices = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/services";

    const { data } = await axios.get(URL);
    console.log(data);
    if (data) {
      dispatchHandler({
        type: GET_ALL_SERVICES,
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

export const getService =
  (serviceId: string,history:any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/services/${serviceId}`;

      const { data } = await axios.get(URL);
      console.log(data);

      if (data) {
        dispatchHandler({
          type: GET_SERVICE,
          data,
          dispatch,
        });
        history.push(`/admin/service/${serviceId}`);

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

export const updateService =
  (serviceId: any, formData: IService, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/services/${serviceId}`;

      const { data } = await axios.patch(URL, formData);
      history.push("/admin/service");
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
