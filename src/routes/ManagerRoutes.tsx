import { Route, Switch } from "react-router-dom";
import ManagerDashboard from "../containers/Manager/Dashboard";
import CreateItem from "../containers/Manager/Item/AddItem";
import UpdateItem from "../containers/Manager/Item/EditItem";
import ListItem from "../containers/Manager/Item/ListItem";
import UploadImage from "../containers/Manager/Item/UploadImage";

const ManagerRoutes = () => {
  return (
    <Switch>
      <Route path="/manager/dashboard" exact component={ManagerDashboard} />
      <Route path="/manager/items" exact component={ListItem}/>
      <Route path="/manager/item/create" exact component={CreateItem}/>
      <Route path="/manager/items/uploadImage/:id" exact component={UploadImage}/>
      <Route path="/manager/items/:id" exact component={UpdateItem}/>
    </Switch>
  );
};

export default ManagerRoutes;
