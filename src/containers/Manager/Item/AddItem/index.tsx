import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
  MouseEvent,
} from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../store/configureStore";
import { IState } from "../../../../components/Manager/Items/AddItem/type";
import { IItem } from "../../../../store/manager/item/types";
import { createItem } from "../../../../store/manager/item/actions";
import ManagerLayout from "../../../../components/Layout/Manager";
import AddItem from "../../../../components/Manager/Items/AddItem";

type IModalState = {
  open: boolean;
};
interface IErrors {
  status: number;
  statusText: string;
}

const CreateItem = () => {
  // const [searchKey, setSearchKey] = useState<String>("");

  const dispatch = useDispatch();

  // const authReducer = useSelector((state: AppState) => state.auth);

  // const { user }: { user: IUserParams } = authReducer;

  const [state, setState] = useState<IState>({
    name: "",
    status: true,
    description: "",
  });

  const {
    configMenuErrors,
    itemMessage,
  }: {
    configMenuErrors: IErrors;
    itemMessage: string;
  } = useSelector((state: AppState) => state.item);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data: IItem = {
      status: state.status,
      name: state.name,
      description: state.description,
    };
    console.log(data);
    dispatch(createItem(data));
    setModalState({ ...modalState, open: true });
  };

  const [modalState, setModalState] = useState<IModalState>({
    open: false,
  });

  const handleClose = (event: MouseEvent<HTMLElement>) => {
    setModalState({ ...modalState, open: false });
  };

  const location: any = useLocation().pathname;

  return (
    <ManagerLayout>
      <AddItem
        onChange={onChange}
        state={state}
        onSubmit={onSubmit}
        handleClose={handleClose}
        modalState={modalState}
        itemMessage={itemMessage}
        configMenuErrors={configMenuErrors}
      />
    </ManagerLayout>
  );
};

export default CreateItem;
