import { useContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { userContext } from "../../../contexts/UserContext";
import { APP_ROUTE, DELAY_MS } from "../../../utils/constants.utils";
import PageLoader from "../../loaders/PageLoader";
import AuthHeader from "./AuthHeader";
import CartContextProvider from "../../../contexts/CartContext";

const AuthWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { userData, isUserContextLoading } = useContext(userContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserContextLoading) {
      if (!isAuthenticated && userData?.userID)
        setTimeout(() => setIsAuthenticated(true), DELAY_MS);
      else if (!userData?.userID)
        setTimeout(() => navigate(APP_ROUTE.LOGIN), DELAY_MS);
    }
  }, [location, userData, isUserContextLoading]);

  if (!isAuthenticated || isUserContextLoading) return <PageLoader />;
  return (
    <CartContextProvider>
      <AuthHeader />
      <main>
        <Outlet />
      </main>
    </CartContextProvider>
  );
};

export default AuthWrapper;
