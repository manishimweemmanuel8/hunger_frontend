import { combineReducers } from "redux";
import { authReducer } from "./auth/reducers";
import { campaignReducer } from "./campaign/reducers";
import { districtReducer } from "./district/reducers";
import { donationReducer } from "./donation/reducers";
import { feedbackReducer } from "./feedback/reducers";
import { aboutReducer } from "./masterData/about/reducers";
import { contactReducer } from "./masterData/contact/reducers";
import { serviceReducer } from "./masterData/services/reducers";
import { subscriptionReducer } from "./subscription/reducers";

export const rootReducer = combineReducers({
  about: aboutReducer,
  contact: contactReducer,
  service: serviceReducer,
  campaign: campaignReducer,
  auth: authReducer,
  district: districtReducer,
  donation: donationReducer,
  subscription: subscriptionReducer,
  feedback:feedbackReducer,
});
