import { ReactNode } from "react";

import { useAuthStatus } from "../../hooks/useAuthStatus";
import Navigate from "../../navigation/Navigate/Navigate";
// import Spinner from './Spinner';
// import { toast } from 'react-toastify';

interface PrivateRoutePropsType {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRoutePropsType) => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    console.log(
      "You have to be logged in first before accessing your profile page!"
    );
  }

  return loggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
