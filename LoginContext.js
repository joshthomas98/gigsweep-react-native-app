import React, { createContext, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [artistOrVenue, setArtistOrVenue] = useState(null);

  return (
    <LoginContext.Provider
      value={{ userId, setUserId, artistOrVenue, setArtistOrVenue }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
