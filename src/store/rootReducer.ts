import { combineReducers } from "redux";
import { authReducer } from "./auth/reducers";
import { campaignReducer } from "./campaign/reducers";
import { aboutReducer } from "./masterData/about/reducers";
import { contactReducer } from "./masterData/contact/reducers";
import { serviceReducer } from "./masterData/services/reducers";

export const rootReducer = combineReducers({
    about: aboutReducer,
    contact: contactReducer,
    service: serviceReducer,
    campaign: campaignReducer,
    auth:authReducer,
});
