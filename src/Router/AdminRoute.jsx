import React, { useEffect, useState } from "react";
import usePrivateApi from "../Hooks/PrivateAPI";
import { useAuth } from "../Hooks/UseAuth";
import { Navigate } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";

const AdminRoute = ({ children }) => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  const { user } = useAuth();
  const axiosSecure = usePrivateApi();

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/queryData?email=${user.email}`)
        .then((res) => {
          setRole(res?.data?.role);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [axiosSecure, user?.email]);

  // 🔄 loading state
  if (loading) {
    return <p><LoadingSpinner/></p>;
  }

  // ❌ Not admin
  if (role !== "admin") {
    return <Navigate to="/notadmin" replace />;
  }

  // ✅ Admin
  return children;
};

export default AdminRoute;
