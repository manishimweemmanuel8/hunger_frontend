import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AdminRoutes from "./Admin";
import AuthRoutes from "./Auth";
import DistrcitRoutes from "./District";
import DonationRoutes from "./Donation";

export default function rootRouter() {
  return (
    <Router>
      <DonationRoutes />
      <AuthRoutes />
      <AdminRoutes />
      <DistrcitRoutes />
    </Router>
  );
}
