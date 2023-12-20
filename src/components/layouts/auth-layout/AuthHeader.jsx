import { Link, useNavigate } from "react-router-dom";
import { APP_ROUTE } from "../../../utils/constants.utils";
import "./auth-header.css";
import { useContext } from "react";
import { userContext } from "../../../contexts/UserContext";

const AuthHeader = () => {
  const navigate = useNavigate();
  const { setUserData } = useContext(userContext);
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand p-0" to={APP_ROUTE.BASE}>
            <img src="/logo.png" alt="ProManage" height={38} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={APP_ROUTE.BASE}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={APP_ROUTE.PRODUCTS}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={APP_ROUTE.CART}>
                  Cart
                </Link>
              </li>
            </ul>
            <div
              className="profile-icon"
              onClick={() => {
                localStorage.clear();
                setUserData(null);
                navigate(APP_ROUTE.LOGIN);
              }}
            >
              <span>PC</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AuthHeader;
