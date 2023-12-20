import { createContext, useEffect, useState } from "react";
import { LS_KEYS, VIEW_TYPE } from "../utils/constants.utils";
import userList from "../data/userData.json";

export const userContext = createContext(null);

const UserCTXProvider = userContext.Provider;

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [userPreference, setUserPreference] = useState(VIEW_TYPE.CARD);
  const [isUserContextLoading, setIsUserContextLoading] = useState(true);

  useEffect(() => {
    const userLSData = localStorage.getItem(LS_KEYS.USER_DATA);

    if (userLSData) {
      const parsedUserData = JSON.parse(userLSData);
      const isValid = userList.find(
        (user) => user.email === parsedUserData?.email
      );
      if (isValid) {
        setUserData(parsedUserData);
      } else localStorage.clear();
    }

    const preferenceData = localStorage.getItem(LS_KEYS.USER_PREFERENCE);
    if (preferenceData) {
      const parsedPreferenceData = JSON.parse(preferenceData);
      if (
        parsedPreferenceData === VIEW_TYPE.CARD ||
        parsedPreferenceData === VIEW_TYPE.LIST
      )
        setPreference(parsedPreferenceData);
      else setPreference();
    } else setPreference();
    setIsUserContextLoading(false);
  }, []);

  const setPreference = (viewType = VIEW_TYPE.CARD) => {
    setUserPreference(viewType);
    localStorage.setItem(LS_KEYS.USER_PREFERENCE, JSON.stringify(viewType));
  };

  return (
    <UserCTXProvider
      value={{
        userData,
        setUserData,
        isUserContextLoading,
        userPreference,
        setPreference,
      }}
    >
      {children}
    </UserCTXProvider>
  );
};

export default UserContextProvider;
