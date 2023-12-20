import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import PageLoader from "./components/loaders/PageLoader";
import { useContext, useEffect, useState } from "react";
import { userContext } from "./contexts/UserContext";
import AuthWrapper from "./components/layouts/auth-layout/AuthWrapper";
import { APP_ROUTE, DELAY_MS, OPEN_ROUTE } from "./utils/constants.utils";

function App() {
  const [initialRender, setInitialRender] = useState(true);
  const { userData } = useContext(userContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      OPEN_ROUTE.includes(location.pathname) && navigate(APP_ROUTE.BASE);
    }
    initialRender && setTimeout(() => setInitialRender(false), DELAY_MS);
  }, [location, userData]);

  if (initialRender && OPEN_ROUTE.includes(location.pathname))
    return <PageLoader />;

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<AuthWrapper />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/loader" element={<PageLoader />} />
      </Route>
    </Routes>
  );
}

export default App;
