import React, { ChangeEvent, FormEvent, useState, MouseEvent } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../../store/configureStore";
import { IItem } from "../../../../store/manager/item/types";
import {
  getItem,
  updateItem,
  uploadImage,
} from "../../../../store/manager/item/actions";
import ManagerLayout from "../../../../components/Layout/Manager";
import { useParams } from "react-router-dom";
import EditItem from "../../../../components/Manager/Items/EditItem";

type IModalState = {
  open: boolean;
};

interface RouteParams {
  id: string;
}
interface IErrors {
  status: number;
  statusText: string;
}

const UpdateItem = () => {

  const [state, setState] = useState(null);

  const [itemState, setItemState] = useState<IItem>({
    name: "",
    description: "",
    status: true,
  });



  const params = useParams<RouteParams>();
  const { item }: { item: IItem } = useSelector(
    (state: AppState) => state.item
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getItem(params.id));
  }, []);

  const [checked, setChecked] = React.useState(true);

  const {
    configMenuErrors,
    itemMessage,
  }: {
    configMenuErrors: IErrors;
    itemMessage: string;
  } = useSelector((state: AppState) => state.item);

  
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItemState({ ...itemState, [name]: value });
    setChecked(e.target.checked);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const info = {
      name: itemState.name,
      description: itemState.description,
      status: checked,
    };

    dispatch(updateItem(params.id, info));
    setModalState({ ...modalState, open: true });
  };

 

  const [modalState, setModalState] = useState<IModalState>({
    open: false,
  });

  const handleClose = (event: MouseEvent<HTMLElement>) => {
    setModalState({ ...modalState, open: false });
  };


  return (
    <ManagerLayout>
      <EditItem
        onChange={onChange}
        setItemState={setItemState}
        itemState={itemState}
        onSubmit={onSubmit}
        handleClose={handleClose}
        modalState={modalState}
        itemMessage={itemMessage}
        checked={checked}
        configMenuErrors={configMenuErrors}
        item={item}
      />
    </ManagerLayout>
  );
};

export default UpdateItem;
