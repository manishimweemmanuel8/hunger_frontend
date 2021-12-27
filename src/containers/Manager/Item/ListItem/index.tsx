import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../../../store/manager/item/actions";
import { IItem } from "../../../../store/manager/item/types";
import { AppState } from "../../../../store/configureStore";
import ManagerLayout from "../../../../components/Layout/Manager";
import ItemList from "../../../../components/Manager/Items/List";

const ListItem = () => {
  const { items }: { items: IItem } = useSelector(
    (state: AppState) => state.item
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getItems());
  }, []);

  return (
    <ManagerLayout>
      <ItemList items={items} />
    </ManagerLayout>
  );
};

export default ListItem;
