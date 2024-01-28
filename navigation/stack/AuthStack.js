// AuthStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../../screens/Welcome";
import LoginScreen from "../../screens/Login";
import MainStack from "../bottom tab/MainStack";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={MainStack} />
    </Stack.Navigator>
  );
};

export default AuthStack;
