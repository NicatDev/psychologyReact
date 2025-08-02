import { Navigate } from "react-router-dom";
import MainLayout from '../adminLayout/index.js';

export default function AdminRoute() {
  const admin = sessionStorage.getItem("adminUser");

  if (!admin) {
    return <Navigate to="/admin/login" replace />;
  }

  return <MainLayout />;
}
