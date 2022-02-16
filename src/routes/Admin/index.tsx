import React from "react";
import { Route, Switch } from "react-router-dom";
import AddAbout from "../../pages/admin/about/AddAbout";
import EditAbout from "../../pages/admin/about/EditAbout";
import ListAbout from "../../pages/admin/about/ListAbout";
import AddContact from "../../pages/admin/contact/AddContact";
import EditContact from "../../pages/admin/contact/EditContact";
import ListContact from "../../pages/admin/contact/ListContact";
import AdminDashboard from "../../pages/admin/Dashboard";
import AddDistrict from "../../pages/admin/district/AddDistrict";
import EditDistrict from "../../pages/admin/district/EditDistrict";
import ListDistrict from "../../pages/admin/district/ListDistrict";
import AddService from "../../pages/admin/service/AddService";
import EditService from "../../pages/admin/service/EditService";
import ListService from "../../pages/admin/service/ListService";
import EditUser from "../../pages/Auth/user/EditUser";
import ListUser from "../../pages/Auth/user/ListUser";

export default function AdminRoutes() {
  return (
    <Switch>
      <Route path="/admin/dashboard" exact component={AdminDashboard} />
      <Route path="/admin/about/create" exact component={AddAbout} />
      <Route path="/admin/about" exact component={ListAbout} />
      <Route path="/admin/about/:id" exact component={EditAbout} />
      <Route path="/admin/service/create" exact component={AddService} />
      <Route path="/admin/service" exact component={ListService} />
      <Route path="/admin/service/:id" exact component={EditService} />
      <Route path="/admin/contact/create" exact component={AddContact} />
      <Route path="/admin/contact" exact component={ListContact} />
      <Route path="/admin/contact/:id" exact component={EditContact} />
      <Route path="/admin/district/create" exact component={AddDistrict} />
      <Route path="/admin/district" exact component={ListDistrict} />
      <Route path="/admin/district/:id" exact component={EditDistrict} />
      <Route path="/admin/user" exact component={ListUser} />
      <Route path="/admin/user/:id" exact component={EditUser} />
    </Switch>
  );
}
