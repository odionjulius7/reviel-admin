import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const location = useLocation(); // Get the current location

  const isUserAuthenticated = () => {
    // For instance, if you're using a state management library like Redux:
    // import { useSelector } from 'react-redux';
    // const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const isAuthenticated = true; // Change this to your actual check.

    return isAuthenticated;
  };

  const isAuthenticated = isUserAuthenticated();

  if (isAuthenticated) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node, // Define the children prop type
};

export default ProtectedRoute;
