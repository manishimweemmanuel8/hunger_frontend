import {
  CREATE_SUBSCRIPTION,
  ERRORS, GET_ALL_SUBSCRIPTIONS, GET_SUBSCRIPTION, SubscriptionType, UPDATE_SUBSCRIPTION,
} from "./types";

const initialState = {
  messageS: null,
  subscription: false,
  subscriptions: [],
};

export const subscriptionReducer = (
  stateS = initialState,
  { type, payload }: SubscriptionType
) => {
  switch (type) {
    case ERRORS:
      return { ...stateS, errorsS: payload };
    case GET_ALL_SUBSCRIPTIONS:
      return { ...stateS, subscriptions: payload };
    case GET_SUBSCRIPTION:
      return { ...stateS, subscription: payload };
    case CREATE_SUBSCRIPTION:
      return { ...stateS, messageS: payload };
    case UPDATE_SUBSCRIPTION:
      return { ...stateS, messageS: payload };
    default:
      return stateS;
  }
};
