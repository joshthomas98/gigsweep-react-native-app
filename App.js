import React, { useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./navigation/stack/AuthStack";
import MainStack from "./navigation/bottom tab/MainStack";
import LoginContext from "./LoginContext";
import { createStackNavigator } from "@react-navigation/stack";
import CreateNewAccountStack from "./navigation/stack/CreateNewAccountStack";

const Stack = createStackNavigator();

const App = () => {
  const [userId, setUserId] = useState(null);
  const [artistOrVenue, setArtistOrVenue] = useState(null);

  // Function to set user authentication status
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
      {/* Set the background color and text color for the status bar */}
      <StatusBar backgroundColor="#121212" barStyle="dark-content" />

      {/* Render the appropriate navigation stack based on user authentication status */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {userId ? (
            <Stack.Screen name="Main" component={MainStack} />
          ) : (
            <>
              {/* Change the name from "Auth" to "Welcome" */}
              <Stack.Screen name="Welcome" component={AuthStack} />
              <Stack.Screen
                name="CreateNewAccount"
                component={CreateNewAccountStack}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </LoginContext.Provider>
  );
};

export default App;
