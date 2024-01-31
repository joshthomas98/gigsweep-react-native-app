// App.js
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./navigation/stack/AuthStack";
import MainStack from "./navigation/bottom tab/MainStack";
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
          {userId ? (
            <Stack.Screen name="Main" component={MainStack} />
          ) : (
            <>
              <Stack.Screen name="Welcome" component={AuthStack} />
              <Stack.Screen
                name="CreateNewAccount"
                component={CreateNewAccountStack}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </LoginProvider>
  );
};

export default App;
