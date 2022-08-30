import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

import Layout from "../components/Layout/Layout";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import Error from "../pages/error/Error";
import Books from "../pages/books/Books";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoutes />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="books" element={<Books />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>

        <Route path="login" element={<PublicRoutes />}>
          <Route path="*" element={<Error />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
