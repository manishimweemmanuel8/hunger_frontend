import axios from "axios";
import {
  LOGIN,
  ERRORS,
  ILoginParams,
  GET_ALL_USERS,
  GET_USER,
  IUser,
  CHANGE_USER_PASSWORD,
} from "./types";
import { AppThunk } from "../configureStore";
import { dispatchHandler } from "../helper/dispatchHandler";
import { decode } from "jsonwebtoken";

export const authActions =
  (formData: ILoginParams, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });

    console.log(formData);
    try {
      const URL = "/auth/signin/";

      const { data } = await axios.post(URL, formData);

      if (data) {
        dispatchHandler({ type: LOGIN, data: data, dispatch });

        const token: any = decode(data.accessToken);

        localStorage.setItem("TOKEN", data.accessToken);
        localStorage.setItem("USERNAME", token.username);

        if (token.role === "ADMIN") {
          history.push("/admin/dashboard");
        }

        if (token.role === "DISTRICT") {
          history.push("/district/dashboard");
        }
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

export const getUsers = (): AppThunk => async (dispatch) => {
  dispatchHandler({ type: ERRORS, data: null, dispatch });
  try {
    const URL = "/auth";

    const { data } = await axios.get(URL);
    if (data) {
      dispatchHandler({
        type: GET_ALL_USERS,
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

export const getUser =
  (userId: string, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/auth/${userId}`;

      const { data } = await axios.get(URL);
      console.log(data);

      if (data) {
        dispatchHandler({
          type: GET_USER,
          data,
          dispatch,
        });
        history.push(`/admin/user/${userId}`);
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

export const updateUser =
  (userId: any, formData: IUser, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    try {
      const URL = `/auth/${userId}`;

      const { data } = await axios.patch(URL, formData);
      history.push("/admin/user");
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

export const changeUserPassword =
  (formData: IUser, history: any): AppThunk =>
  async (dispatch) => {
    dispatchHandler({ type: ERRORS, data: null, dispatch });
    console.log(formData);
    try {
      const URL = `/auth/password`;

      const { data } = await axios.post(URL, formData);
      // history.push("/admin/user");
      return dispatchHandler({
        type: CHANGE_USER_PASSWORD,
        data: "Password changed Successful",
        dispatch,
      });
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

export const SignOut = () => {
  localStorage.removeItem("TOKEN");
  localStorage.removeItem("USERNAME");
  window.location.replace("/");
};
