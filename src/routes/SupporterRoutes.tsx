import { Route, Switch } from "react-router-dom";
import SupporterDashboard from "../containers/Supporter/Dashboard";

const SupporterRouters = () => {
  return (
    <Switch>
      <Route path="/supporter/dashboard" exact component={SupporterDashboard} />
    </Switch>
  );
};

export default SupporterRouters;
