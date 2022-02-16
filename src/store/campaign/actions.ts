import axios from "axios";
import { AppThunk } from "../configureStore";
import { dispatchHandler } from "../helper/dispatchHandler";
import {
  CREATE_CAMPAIGN,
  ERRORS,
  GET_ALL_CAMPAIGNS,
  GET_ALL_CAMPAIGNS_DISTRICT,
  GET_CAMPAIGN,
  GET_CAMPAIGN_LATEST,
  ICampaign,
  UPDATE_CAMPAIGN,
  UPLOAD_IMAGE,
} from "./types";

export const createCampaign =
  (formData: ICampaign, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });

    try {
      const URL = "/campaign";

      const { data } = await axios.post(URL, formData);

      // if (data) {
      history.push("/district/campaign");
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

export const getCampaigns = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/campaign/active";

    const { data } = await axios.get(URL);
    if (data) {
      dispatchHandler({
        type: GET_ALL_CAMPAIGNS,
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

export const getCampaignsDistrcit = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/campaign/district";

    const { data } = await axios.get(URL);
    console.log(data);
    if (data) {
      dispatchHandler({
        type: GET_ALL_CAMPAIGNS_DISTRICT,
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

export const getCampaign =
  (campaignId: any, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/campaign/${campaignId}`;

      const { data } = await axios.get(URL);

      if (data) {
        console.log(data)

        dispatchHandler({
          type: GET_CAMPAIGN,
          data,
          dispatch,
        });
        history.push(`/district/campaign/${campaignId}`);
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

export const getCampaignLatest = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = `/campaign/latest`;

    const { data } = await axios.get(URL);

    if (data) {
      dispatchHandler({
        type: GET_CAMPAIGN_LATEST,
        data,
        dispatch,
      });
    }
  } catch (error: any) {
    if (error) {
      const data = error.response;
      console.log(data);
      return dispatchHandler({
        type: ERRORS,
        data,
        dispatch,
      });
    }
  }
};

export const updateCampaign =
  (campaignId: any, formData: ICampaign, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/campaign/${campaignId}`;

      const { data } = await axios.patch(URL, formData);
      history.push("/district/campaign");
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

export const uploadImage =
  (campaignId: any, information: any, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/campaign/upload/${campaignId}`;

      const file = information.name;
      const formData = new FormData();
      formData.append("file", information);

      const { data } = await axios.post(URL, formData);
      history.push("/district/campaign");
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
