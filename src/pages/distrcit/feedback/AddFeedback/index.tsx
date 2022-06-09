import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddFeedbackComponent from "../../../../components/District/feedback/AddFeedback";
import DistrictDashboardLayout from "../../../../components/layout/District";
import ModalBox from "../../../../components/ui/Modal/MessageAlert";
import { AppState } from "../../../../store/configureStore";
import { createFeedback } from "../../../../store/feedback/actions";
import { useParams } from "react-router-dom";


type Props = {
  history: any;
  location: any;
};
interface RouteParams {
  id: string;
}

export default function AddFeedback(props: Props) {
  const dispatch = useDispatch();
  const params = useParams<RouteParams>();

  const feedbackReducer = useSelector((state: AppState) => state.feedback);

  const {
    errors,
    message,
  }: {
    errors: any;
    message: string;
  } = feedbackReducer;
  React.useEffect(() => {
    if (message || errors) {
      setModalState({ ...modalState, open: true });
      setState({ ...state, spinner: false });
    }
    // eslint-disable-next-line
  }, [feedbackReducer]);


  const [state, setState] = React.useState({
    names: "",
    feedback: "",
    location:"",
    campaignId:"",
    phone:"",
    spinner: false,
  });
  const [modalState, setModalState] = React.useState({
    open: false,
  });
  const { names, feedback,location,phone,campaignId } = state;
  const data = {
    names,
    feedback,
    location,
    phone,
    campaignId:params.id,
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setState({ ...state, spinner: true });
    dispatch((createFeedback(data, props.history)));
  };
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setModalState({ ...modalState, open: false });
  };
  return (
    <DistrictDashboardLayout>
      <ModalBox
        handleClose={handleClose}
        state={modalState}
        message={message}
        error={errors && errors.message}
        title={"Add Feedback"}
      />
      <AddFeedbackComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
      />
    </DistrictDashboardLayout>
  );
}
