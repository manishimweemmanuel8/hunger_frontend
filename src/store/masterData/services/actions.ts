import axios from "axios";
import { CREATE_SERVICE, ERRORS, GET_ALL_SERVICES, GET_SERVICE, IService, UPDATE_SERVICE } from "./types";
import { AppThunk } from "../../configureStore";
import { dispatchHandler } from "../../helper/dispatchHandler";

export const createService =
  (information: IService): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = "/services";

      // const header = {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // };

      const info = {
        name: information.name,
        description: information.description,
      };

      const { data } = await axios.post(URL, info);

      if (data) {
        dispatchHandler({
          type: CREATE_SERVICE,
          data: "Service was created successful",
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

export const getServices = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/services";

    const { data } = await axios.get(URL);
    console.log(data);
    if (data) {
      dispatchHandler({
        type: GET_ALL_SERVICES,
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

export const getService =
  (serviceId: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/services/${serviceId}`;

      const { data } = await axios.get(URL);
      console.log(data);

      if (data) {
        dispatchHandler({
          type: GET_SERVICE,
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

export const updateService =
  (serviceId: any, information: IService): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/services/${serviceId}`;

      // const file = information.name;
      // const formData = new FormData();
      // formData.append("file", information);

      console.log(information);

      const { data } = await axios.patch(URL, information);
      if (data) {
        dispatchHandler({
          type: UPDATE_SERVICE,
          data: "Service was updated successful",
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
