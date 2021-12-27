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
import {
  getItem,
  uploadImage,
} from "../../../../store/manager/item/actions";
import ManagerLayout from "../../../../components/Layout/Manager";
import AddItem from "../../../../components/Manager/Items/AddItem";
import EditItem from "../../../../components/Manager/Items/UploadImage";
import { useParams } from "react-router-dom";
import { IImageState } from "../../../../components/Manager/Items/UploadImage/type";
import UploadImageCompanent from "../../../../components/Manager/Items/UploadImage";

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

const UploadImage = () => {
  const [state, setState] = useState(null);

  const params = useParams<RouteParams>();
  const { item }: { item: IItem } = useSelector(
    (state: AppState) => state.item
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getItem(params.id));
  }, []);

  const {
    configMenuErrors,
    itemMessage,
  }: {
    configMenuErrors: IErrors;
    itemMessage: string;
  } = useSelector((state: AppState) => state.item);

  const onChange = (e: any) => {
    const formData = new FormData(); 
    //FILE INFO NAME WILL BE "my-image-file"
    formData.append('file', e.target.files[0], e.target.files[0].name);

    setState(e.target.files[0]);
  };
  // const onHandleFileImage = (f: File[]) => {
  //   setState({ ...state, file: f });
  // };

  


  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formData=new FormData();
    const file=state;
    // formData.append('file',state);
    console.log(state)
  
    dispatch(uploadImage(params.id, file));
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
      <UploadImageCompanent
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

export default UploadImage;
