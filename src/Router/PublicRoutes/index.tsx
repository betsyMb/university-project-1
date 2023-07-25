import { Navigate, Route, Routes } from "react-router-dom";
import { Login, Root } from "../../pages";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Root />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
