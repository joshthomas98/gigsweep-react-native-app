import React, { createContext, useState } from "react";
import { StatusBar } from "react-native";
import AuthStack from "./navigation/stack/AuthStack";

export const LoginContext = createContext();

const App = () => {
  const [userId, setUserId] = useState(null);
  const [artistOrVenue, setArtistOrVenue] = useState(null);

  return (
    <LoginContext.Provider
      value={{ userId, setUserId, artistOrVenue, setArtistOrVenue }}
    >
      {/* Set the background color and text color for the status bar */}
      <StatusBar backgroundColor="#121212" barStyle="dark-content" />

      <AuthStack />
    </LoginContext.Provider>
  );
};

export default App;
