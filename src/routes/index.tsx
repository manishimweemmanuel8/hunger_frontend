import React, { FunctionComponent } from "react";
import AuthRoutes from "./AuthRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import ManagerRoutes from "./ManagerRoutes";
import RequesterRouters from "./RequesterRoutes";
import SupporterRouters from "./SupporterRoutes";

const rootRoutes: FunctionComponent = () => {
  return (
    <Router>
      <AdminRoutes/>
      <ManagerRoutes/>
      <RequesterRouters/>
      <SupporterRouters/>
      <AuthRoutes />
    </Router>
  );
};

export default rootRoutes;
