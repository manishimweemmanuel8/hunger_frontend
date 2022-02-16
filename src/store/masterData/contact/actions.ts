import axios from "axios";
import { ERRORS, GET_ALL_CONTACTS, GET_CONTACT, IContact } from "./types";
import { AppThunk } from "../../configureStore";
import { dispatchHandler } from "../../helper/dispatchHandler";

export const createContact =
  (formData: IContact, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });

    try {
      const URL = "/contact";

      const { data } = await axios.post(URL, formData);

      // if (data) {
      history.push("/admin/contact");
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

export const getContacts = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/contact";

    const { data } = await axios.get(URL);
    if (data) {
      dispatchHandler({
        type: GET_ALL_CONTACTS,
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

export const getContact =
  (contactId: string,history:any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/contact/${contactId}`;

      const { data } = await axios.get(URL);
      console.log(data);

      if (data) {
        dispatchHandler({
          type: GET_CONTACT,
          data,
          dispatch,
        });
        history.push(`/admin/contact/${contactId}`);

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

export const updateContact =
  (contactId: any, formData: IContact, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/contact/${contactId}`;

      const { data } = await axios.patch(URL, formData);
      history.push("/admin/contact");
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
