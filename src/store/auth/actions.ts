import axios from "axios";
import { LOGIN, ERRORS, ILoginParams } from "./types";
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

export const SignOut = () => {
  localStorage.removeItem("TOKEN");
  localStorage.removeItem("USERNAME");
  window.location.replace("/");
};
