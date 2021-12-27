import React from "react";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "./style.scss";
import { Link } from "react-router-dom";
import { IItem } from "../../../../store/manager/item/types";
import ItemCard from "../../../UI/ItemCard";

type Props = {
  items: IItem;
};

const ItemList = (props: Props) => {
  const { items } = props;

  return (
    <div className="menu-container">
      <div className="menu-header">
        <div className="menu-header-buttons">
          <Button className="btn btn-primary" variant="contained">
            {" "}
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to="/manager/item/create"
            >
              Add
            </Link>{" "}
          </Button>
        </div>
      </div>
      <Grid container justify="flex-start" className="menu-content">

        {items.payload && items.payload
            .map((item: IItem) => <ItemCard key={item.id} item={item} />)}

      </Grid>
    </div>
  );
};

export default ItemList;
