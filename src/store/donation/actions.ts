import axios from "axios";
import { AppThunk } from "../configureStore";
import { dispatchHandler } from "../helper/dispatchHandler";
import {
  ERRORS,
  GET_ALL_CAMPAIGN_DONATIONS,
  GET_ALL_DONATIONS,
  GET_DONATION,
  IDonation,
} from "./types";

export const createDonate =
  (formData: IDonation, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });

    try {
      const URL = "/donate";

      const { data } = await axios.post(URL, formData);

      // if (data) {
      // history.push("https://web.whatsapp.com");
      window.location.href = "https://flutterwave.com/pay/hunger_ms";
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

export const getDonates = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/donate";

    const { data } = await axios.get(URL);
    if (data) {
      dispatchHandler({
        type: GET_ALL_DONATIONS,
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

export const getCampaignDonates =
  (campaignId: string): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/donate/campaign/${campaignId}`;

      const { data } = await axios.get(URL);
      console.log(data);

      if (data) {
        dispatchHandler({
          type: GET_ALL_CAMPAIGN_DONATIONS,
          data,
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

export const getDonate =
  (donateId: string, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/donate/${donateId}`;

      const { data } = await axios.get(URL);
      console.log(data);

      if (data) {
        dispatchHandler({
          type: GET_DONATION,
          data,
          dispatch,
        });
        history.push(`/district/campaign/donation/details/${donateId}`);
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

export const updateDonate =
  (
    donateId: any,
    campainId: any,
    formData: IDonation,
    history: any
  ): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    console.log(formData);
    try {
      const URL = `/donate/${donateId}`;

      const { data } = await axios.patch(URL, formData);
      history.push(`/district/campaign/donation/${campainId}`);
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
