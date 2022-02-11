import React from "react";
import { Route, Switch } from "react-router-dom";
import AddAbout from "../../pages/admin/about/AddAbout";
import EditAbout from "../../pages/admin/about/EditAbout";
import ListAbout from "../../pages/admin/about/ListAbout";
import AdminDashboard from "../../pages/admin/Dashboard";
import Login from "../../pages/Auth/Login";

export default function AdminRoutes() {
  return (
    <Switch>
      <Route path="/admin/dashboard" exact component={AdminDashboard} />
      <Route path="/admin/about/create" exact component={AddAbout} />
      <Route path="/admin/about" exact component={ListAbout} />
      <Route path="/admin/about/:id" exact component={EditAbout}/>

    </Switch>
  );
}
