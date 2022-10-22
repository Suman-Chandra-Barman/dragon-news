import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Spinner animation="border" variant="warning" />;
  }

  if (!user?.uid) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivetRoute;
