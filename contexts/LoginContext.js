// LoginContext.js
import React, { createContext, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [artistOrVenue, setArtistOrVenue] = useState(null);

  const setUserAuth = (userData) => {
    setUserId(userData.userId);
    setArtistOrVenue(userData.artistOrVenue);
  };

  return (
    <LoginContext.Provider
      value={{
        userId,
        setUserId,
        artistOrVenue,
        setArtistOrVenue,
        setUserAuth,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
