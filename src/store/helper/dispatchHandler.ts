import { Dispatch } from "redux";

export const dispatchHandler: <T>(params: {
  type: T;
  data: any;
  dispatch: Dispatch;
}) => void = ({ type, data, dispatch }) => {
  dispatch({
    type,
    payload: data,
  });
};
