import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute({ children }) {
  const { admin, loadingAuth } = useAuth();

  if (loadingAuth) {
    return <p>Carregando...</p>;
  }

  if (!admin) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
