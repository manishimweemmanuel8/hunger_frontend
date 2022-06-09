import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EditFeedbackComponent from "../../../../components/District/feedback/EditFeedback";
import AdminDashboardLayout from "../../../../components/layout/Admin";
import ModalBox from "../../../../components/ui/Modal/MessageAlert";
import { AppState } from "../../../../store/configureStore";
import { updateFeedback } from "../../../../store/feedback/actions";
import { IFeedback } from "../../../../store/feedback/types";

type Props = {
  history: any;
  location: any;
};


export default function EditFeedback(props: Props) {
  const dispatch = useDispatch();

  const feedbackReducer = useSelector((state: AppState) => state.feedback);
  const { comment }: { comment: IFeedback } =feedbackReducer;


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
    names: comment.names,
    phone: comment.phone,
    location:comment.location,
    feedback:comment.feedback,
    spinner: false,
  });
  const [modalState, setModalState] = React.useState({
    open: false,
  });
  const { names, phone,location,feedback } = state;
  const data = {
    names,
    phone,
    location,
    feedback,
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setState({ ...state, spinner: true });
    dispatch(
      updateFeedback(comment.id, comment.campaign?.id, data, props.history)

    );
  };
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setModalState({ ...modalState, open: false });
  };
  return (
    <AdminDashboardLayout>
      <ModalBox
        handleClose={handleClose}
        state={modalState}
        message={message}
        error={errors && errors.message}
        title={"Edit Feedback"}
      />
      <EditFeedbackComponent
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
 
      />
    </AdminDashboardLayout>
  );
}
