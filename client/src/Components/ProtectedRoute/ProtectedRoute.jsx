
import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ children,redirect }) => {
  const token = localStorage.getItem("token");
  // const navigate = useNavigate();

  if (!token) {
    return <Navigate to="/login" state={{ redirect }} />;
  }

  return children;
};

export default ProtectedRoute;
