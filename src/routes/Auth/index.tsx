import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../../pages/Auth/Login";

export default function AuthRoutes() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
    </Switch>
  );
}
