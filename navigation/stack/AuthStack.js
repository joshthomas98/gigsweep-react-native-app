// AuthStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../../screens/Welcome";
import LoginScreen from "../../screens/Login";
import MainNav from "../bottom tab/MainNav";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const AuthStack = () => {
  const navigation = useNavigation();

  // Function to navigate back to the Welcome screen
  const goBackToWelcome = () => {
    navigation.navigate("AuthWelcome");
  };

  return (
    <Stack.Navigator initialRouteName="AuthWelcome">
      <Stack.Screen
        name="AuthWelcome"
        component={WelcomeScreen}
        options={{
          title: "Welcome",
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "Login",
          headerLeft: () => (
            <TouchableOpacity
              onPress={goBackToWelcome}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
