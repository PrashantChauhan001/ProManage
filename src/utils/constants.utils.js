export const loginInitialValues = {
  email: "",
  password: "",
};

export const APP_ROUTE = {
  BASE: "/",
  LOGIN: "/login",
  CART: "/cart",
  PRODUCTS: "/products",
};

export const OPEN_ROUTE = [APP_ROUTE.LOGIN];

export const ERROR_MESSAGES = {
  LOGIN: {
    EMAIL: {
      REQUIRE: "email is require",
      INVALID: "email is invalid",
    },
    PASSWORD: {
      REQUIRE: "password is require",
    },
    SERVICE: {
      WRONG_CREDENTIALS: "Credentials do not match",
    },
  },
  PRODUCT: {
    SERVICE: {
      NOT_FOUND: "User not found",
    },
  },
};

export const LS_KEYS = {
  USER_DATA: "user-data",
  USER_PREFERENCE: "user-preference",
  CART_DATA: "cart-data",
};

export const VIEW_TYPE = {
  CARD: "card-view",
  LIST: "list-view",
};

export const ALERT_VARIENT = {
  ERROR: "danger",
  PRIMARY: "primary",
};

export const DELAY_MS = 3000;

export const BASE_URL_PREFIX = "/ProManage";
