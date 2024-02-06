// App.js
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./navigation/stack/AuthStack";
import MainNav from "./navigation/bottom tab/MainNav";
import LoginContext, { LoginProvider } from "./contexts/LoginContext";
import { createStackNavigator } from "@react-navigation/stack";
import CreateNewAccountStack from "./navigation/stack/CreateNewAccountStack";

const Stack = createStackNavigator();

const App = () => {
  const [userId, setUserId] = useState(null);
  const [artistOrVenue, setArtistOrVenue] = useState(null);

  return (
    <LoginProvider>
      <StatusBar backgroundColor="#121212" barStyle="dark-content" />

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {(userId && artistOrVenue === "A") || artistOrVenue === "V" ? (
            <Stack.Screen name="Main" component={MainNav} />
          ) : (
            <>
              <Stack.Screen name="Welcome" component={AuthStack} />
              <Stack.Screen
                name="CreateNewAccount"
                component={CreateNewAccountStack}
              />
              <Stack.Screen name="MainNav" component={MainNav} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </LoginProvider>
  );
};

export default App;
