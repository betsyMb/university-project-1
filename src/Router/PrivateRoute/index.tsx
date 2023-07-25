// Third party
import { Navigate } from "react-router-dom";

// Hooks
import { useAuth } from "../../hooks";

type Props = {
  children: JSX.Element;
};

export const ProtectedRoute = ({ children }: Props) => {
  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};
