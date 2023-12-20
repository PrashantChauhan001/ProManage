import userData from "../data/userData.json";
import productData from "../data/productData.json";
import { ERROR_MESSAGES } from "./constants.utils";

export class SuccessClass {
  constructor(data, message = "") {
    this.success = true;
    this.data = data;
    if (message) this.message = message;
  }
}

export class ErrorClass {
  constructor(errorMessage, data = null) {
    this.success = false;
    this.data = data;
    this.errorMessage = errorMessage;
  }
}

export const delay = (ms = 1000) => new Promise((res) => setTimeout(res, ms));

export const getUserFromCredentials = (userCredencials) => {
  const { email, password } = userCredencials;
  const currentUser = userData.find((user) => user.email === email);
  if (currentUser && currentUser.password === password)
    return new SuccessClass(currentUser);
  else return new ErrorClass(ERROR_MESSAGES.LOGIN.SERVICE.WRONG_CREDENTIALS);
};

export const getUserProductList = (userId) => {
  const currentUser = userData.find((user) => user.userID === userId);
  const userProductList = productData.filter((product) =>
    currentUser.assinedProducts.includes(product.id)
  );
  if (currentUser)
    return new SuccessClass(userProductList.length ? userProductList : []);
  else return new ErrorClass(ERROR_MESSAGES.PRODUCT.SERVICE.NOT_FOUND);
};
