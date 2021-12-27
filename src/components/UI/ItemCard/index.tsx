import { Delete, Edit, PhotoCamera } from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../store/configureStore";
import { deleteItem, getItem } from "../../../store/manager/item/actions";
import { IItem } from "../../../store/manager/item/types";
import "./style.scss";
import { useHistory } from "react-router-dom";
import ModalBox from "../Modal/MessageAlert";

type Props = {
  item: IItem;
};

const ItemCard = (props: Props) => {
  const itemReducer = useSelector((state: AppState) => state.item);
  const history = useHistory()


  console.log(itemReducer);
  const { item } = props;

  const dispatch = useDispatch();

  const handleDelete = (id: any) => {
    dispatch(deleteItem(id));
  };
  const handleViewById = (id: any) => {
    // dispatch(getItem(id));
    history.push(`/manager/items/${id}`);
  };

  const handleUploadImage = (id: any) => {
    // dispatch(getItem(id));
    history.push(`/manager/items/uploadImage/${id}`);
  };

  return (
    <>
    {/* <ModalBox
    handleClose={handleClose}
    state={modalState}
    message={itemMessage}
    error={configMenuErrors && configMenuErrors.statusText}
    title={"Delete Item"}
  /> */}
    <div className="card">
      <div className="card-img">
        <img
          alt=""
          src={
            item.image
              ? item.image
              : "https://res.cloudinary.com/stud-desin/image/upload/v1639553224/xmwlfmdxfkse1nzrx2qy.jpg"
          }
        />
      </div>
      <div className="card-details">
        <div className="item">
          <div className="row-1">
            <div className="title">
              <h3>{item ? item.name : "N/A"} </h3>
            </div>
            <div className="menu">
              |{" "}
              <span className="status">
                {item.status === true ? "True" : "False"}
              </span>
            </div>
          </div>
          <div className="row-2">
            <div className="item-description">
              <h3>{item.description}</h3>
            </div>
          </div>
          <span className="action">
           <Edit onClick={() => handleViewById(item.id)} color="primary" /> |{" "}
            <PhotoCamera onClick={() => handleUploadImage(item.id)} color="primary" /> |{" "}
            <Delete onClick={() => handleDelete(item.id)} color="error" />
          </span>
        </div>
      </div>
    </div>
    </>

  );
};

export default ItemCard;
