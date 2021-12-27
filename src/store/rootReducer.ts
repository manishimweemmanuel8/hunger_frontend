import { combineReducers } from "redux";
import { authReducer } from "./auth/reducers";
import { itemReducer } from "./manager/item/reducers";

export const rootReducer = combineReducers({
  auth: authReducer,
  item:itemReducer,
});
