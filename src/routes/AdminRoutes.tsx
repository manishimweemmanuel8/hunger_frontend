import { Route, Switch } from "react-router-dom";
import AdminDashboard from "../containers/Admin/Dashboard";

const AdminRoutes = () => {
  return (
    <Switch>
      <Route path="/admin/dashboard" exact component={AdminDashboard} />
    </Switch>
  );
};

export default AdminRoutes;
