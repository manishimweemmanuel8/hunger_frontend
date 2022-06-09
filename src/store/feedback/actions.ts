import axios from "axios";
import { AppThunk } from "../configureStore";
import { dispatchHandler } from "../helper/dispatchHandler";
import {
  ERRORS,
  GET_ALL_CAMPAIGN_FEEDBACKS,
  GET_ALL_FEEDBACKS,
  GET_FEEDBACK,
  IFeedback,
} from "./types";

export const createFeedback =
  (formData: IFeedback, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });

    try {
      const URL = "/feedback";

      const { data } = await axios.post(URL, formData);
      history.push(`/district/campaign/feedback/${formData.campaignId}`);

      
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

export const getFeedbacks = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/feedback";

    const { data } = await axios.get(URL);
    if (data) {
      dispatchHandler({
        type: GET_ALL_FEEDBACKS,
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

export const getCampaignFeedbacks =
  (campaignId: string): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/feedback/campaign/${campaignId}`;

      const { data } = await axios.get(URL);
      console.log(data);

      if (data) {
        dispatchHandler({
          type: GET_ALL_CAMPAIGN_FEEDBACKS,
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

export const getFeedback =
  (feedbackId: string, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/feedback/${feedbackId}`;

      const { data } = await axios.get(URL);

      if (data) {
        dispatchHandler({
          type: GET_FEEDBACK,
          data,
          dispatch,
        });
        history.push(`/district/campaign/feedback/details/${feedbackId}`);
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

export const updateFeedback =
  (
    feedbackId: any,
    campainId: any,
    formData: IFeedback,
    history: any
  ): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    console.log(formData);
    try {
      const URL = `/feedback/${feedbackId}`;

      const { data } = await axios.patch(URL, formData);
      history.push(`/district/campaign/feedback/${campainId}`);
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
