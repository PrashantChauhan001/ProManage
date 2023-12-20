import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  ALERT_VARIENT,
  APP_ROUTE,
  LS_KEYS,
  loginInitialValues,
} from "../utils/constants.utils";
import { loginValidationSchema } from "../utils/validationSchema.utils";
import "../assets/styles/login.css";
import { loginService } from "../services/user.services";
import { useContext, useState } from "react";
import CloseAlert from "../components/alerts/CloseAlert";
import { userContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [serviceError, setServiceError] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);
  const { setUserData } = useContext(userContext);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    setIsSubmiting(true);
    if (serviceError) setServiceError("");
    loginService(values, handleLoginRes);
  };

  const handleLoginRes = (res) => {
    if (res.success) {
      setUserData(res.data);
      localStorage.setItem(LS_KEYS.USER_DATA, JSON.stringify(res.data));
      navigate(APP_ROUTE.BASE);
    } else setServiceError(res.errorMessage);
    setIsSubmiting(false);
  };

  return (
    <main className="container login-page">
      <div className="h-100 d-flex align-items-center justify-content-center">
        <div className="custom-card login-card">
          <div className="card-header">
            <img src="/logo.png" alt="ProManage" />
            <h4 className="text-center m-1">Manage Products Smoothly!</h4>
          </div>
          <CloseAlert
            text={serviceError}
            setText={setServiceError}
            variant={ALERT_VARIENT.ERROR}
          />
          <div className="card-body">
            <Formik
              initialValues={loginInitialValues}
              validationSchema={loginValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isValid }) => (
                <Form className="login-form">
                  <div className="form-group mb-3">
                    <label htmlFor="email">Email </label>
                    <Field
                      type="email"
                      className={`form-control position-relative ${
                        touched.email && errors.email && "input-error"
                      } `}
                      id="email"
                      placeholder="john.doe@yopmail.com"
                      name="email"
                    />
                    <div className="error-message">
                      <ErrorMessage name="email" />
                    </div>
                  </div>
                  <div className="form-group position-relative mb-4">
                    <label htmlFor="password">Password </label>
                    <Field
                      type="password"
                      className={`form-control ${
                        touched.password && errors.password && "input-error"
                      } `}
                      id="password"
                      placeholder="John@123"
                      name="password"
                    />
                    <div className="error-message">
                      <ErrorMessage name="password" />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-primary btn-ctm w-100"
                    disabled={isSubmiting || !isValid}
                  >
                    Login
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
