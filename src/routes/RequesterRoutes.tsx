import { Route, Switch } from "react-router-dom";
import RequesterDashboard from "../containers/Requester/Dashboard";

const RequesterRouters = () => {
  return (
    <Switch>
      <Route path="/requester/dashboard" exact component={RequesterDashboard} />
    </Switch>
  );
};

export default RequesterRouters;
