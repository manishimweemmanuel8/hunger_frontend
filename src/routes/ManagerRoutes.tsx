import { Route, Switch } from "react-router-dom";
import ManagerDashboard from "../containers/Manager/Dashboard";

const ManagerRoutes = () => {
  return (
    <Switch>
      <Route path="/manager/dashboard" exact component={ManagerDashboard} />
    </Switch>
  );
};

export default ManagerRoutes;
