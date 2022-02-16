import axios from "axios";
import { AppThunk } from "../configureStore";
import { dispatchHandler } from "../helper/dispatchHandler";
import {
  ERRORS,
  GET_ALL_SUBSCRIPTIONS,
  GET_SUBSCRIPTION,
  ISubscription,
} from "./types";

export const createSubscription =
  (formData: ISubscription, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = "/subscription/subscribe";
      const info={
        email:formData.emailS,
        campaignId:formData.campaignIdS
      }
      console.log(info);



      const { data } = await axios.post(URL, info);
      

      // if (data) {
      history.push("/");
      // }
    } catch (error: any) {
      if (error) {
        const data = error.response.data;
        console.log(data)
        return dispatchHandler({
          type: ERRORS,
          data,
          dispatch,
        });
      }
    }
  };

export const getSubscriptios = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/subscription";

    const { data } = await axios.get(URL);
    if (data) {
      dispatchHandler({
        type: GET_ALL_SUBSCRIPTIONS,
        data: data,
        dispatch,
      });
    }
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

export const getSubscription =
  (subscriptionId: string): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/subscription/${subscriptionId}`;

      const { data } = await axios.get(URL);
      console.log(data);

      if (data) {
        dispatchHandler({
          type: GET_SUBSCRIPTION,
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

export const updatesubscription =
  (subscriptionId: any, formData: ISubscription, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/subscription/${subscriptionId}`;

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
