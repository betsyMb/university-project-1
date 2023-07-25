// Third party
import { Navigate, Route, Routes } from "react-router-dom";

// Pages
import { Admin } from "../../pages";
import { PublicRoutes } from "../PublicRoutes";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route path="/*" element={<PublicRoutes />} />
      <Route path="/admin" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
