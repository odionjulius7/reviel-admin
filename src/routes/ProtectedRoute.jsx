import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const location = useLocation(); // Get the current location

  const userData = useSelector((state) => state.auth.user);

  const token = userData?.data?.token;
  // console.log(token);
  // const isAuthenticated = token;

  const isUserAuthenticated = () => {
    let isAuthenticated = false; // Default to false
    if (token !== null && token !== undefined && token !== '') {
      isAuthenticated = true;
    }

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
