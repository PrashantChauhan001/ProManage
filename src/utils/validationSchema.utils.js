import * as Yup from "yup";
import { ERROR_MESSAGES } from "./constants.utils";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email(ERROR_MESSAGES.LOGIN.EMAIL.INVALID)
    .required(ERROR_MESSAGES.LOGIN.EMAIL.REQUIRE),
  password: Yup.string().required(ERROR_MESSAGES.LOGIN.PASSWORD.REQUIRE),
});
