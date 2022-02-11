import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/donation";

export default function DonationRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
}
