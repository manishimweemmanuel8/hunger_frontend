import {
  CREATE_FEEDBACK,
  FeedbackType,
  ERRORS,
  GET_ALL_CAMPAIGN_FEEDBACKS,
  GET_ALL_FEEDBACKS,
  GET_FEEDBACK,
  UPDATE_FEEDBACK,
} from "./types";

const initialState = {
  message: null,
  comment: false,
  feedbacks: [],
  campaignFeedbacks: [],
};

export const feedbackReducer = (
  state = initialState,
  { type, payload }: FeedbackType
) => {
  console.log(payload);

  switch (type) {
    case ERRORS:
      return { ...state, errors: payload };
    case GET_ALL_FEEDBACKS:
      return { ...state, feedbacks: payload };
    case GET_ALL_CAMPAIGN_FEEDBACKS:
      return { ...state, campaignFeedbacks: payload };
    case GET_FEEDBACK:

      return { ...state, comment: payload };
    case CREATE_FEEDBACK:
      return { ...state, message: payload };
    case UPDATE_FEEDBACK:
      return { ...state, message: payload };
    default:
      return state;
  }
};
