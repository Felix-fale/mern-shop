import { Navigate } from "react-router-dom";

const PretectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default PretectedRoute;
