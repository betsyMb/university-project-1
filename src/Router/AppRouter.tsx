// Third party
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Client
import { getClient } from "../authentication";

// Types
import { Status } from "../types";

// Pages
import { Admin, Login, Root } from "../pages";

// Components
import { Navbar } from "../components";
import { ProtectedRoute } from "./PrivateRoute";

// Hooks
import { AuthProvider } from "../hooks";

let status: Status;

export const AppRouter = () => {
  status = getClient().user && getClient().password ? "authenticated" : "no-authenticated";

  // if (status === "checking") return <div className="loading">Checking credentials...</div>;
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <>
            <Navbar status={status} />
            <Routes>
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <Admin />
                  </ProtectedRoute>
                }
              />
              <Route path="" element={<Root />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<Navigate to="/" replace />} />{" "}
            </Routes>
          </>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};
