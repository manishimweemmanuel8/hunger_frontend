import axios from "axios";
import { AppThunk } from "../configureStore";
import { dispatchHandler } from "../helper/dispatchHandler";
import {
  CREATE_CAMPAIGN,
  ERRORS,
  GET_ALL_CAMPAIGNS,
  GET_CAMPAIGN,
  GET_CAMPAIGN_LATEST,
  ICampaign,
  UPDATE_CAMPAIGN,
} from "./types";

export const createCampaign =
  (information: ICampaign): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = "/campaign";

      const header = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const info = {
        name: information.name,
        description: information.description,
        quantity: information.quantity,
        quality: information.quality,
      };

      const { data } = await axios.post(URL, info, header);

      if (data) {
        dispatchHandler({
          type: CREATE_CAMPAIGN,
          data: "Campaign was created successful",
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

export const getCampaigns = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/campaign/active";

    const { data } = await axios.get(URL);
    if (data) {
      dispatchHandler({
        type: GET_ALL_CAMPAIGNS,
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

export const getCampaign =
  (campaignId: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/campaign/${campaignId}`;

      const { data } = await axios.get(URL);
      console.log(data);

      if (data) {
        dispatchHandler({
          type: GET_CAMPAIGN,
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

export const getCampaignLatest = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = `/campaign/latest`;

    const { data } = await axios.get(URL);

    if (data) {
      dispatchHandler({
        type: GET_CAMPAIGN_LATEST,
        data: data,
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
  (campaignId: any, information: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/campaign/${campaignId}`;

      // const file = information.name;
      // const formData = new FormData();
      // formData.append("file", information);

      console.log(information);

      const { data } = await axios.patch(URL, information);
      if (data) {
        dispatchHandler({
          type: UPDATE_CAMPAIGN,
          data: "Campaign was updated successful",
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
