import { delay, getUserFromCredentials } from "../utils/helper.utils";

export const loginService = async (userCredencials, cb) => {
  await delay(1500);

  const response = getUserFromCredentials(userCredencials);

  cb(response);
};
