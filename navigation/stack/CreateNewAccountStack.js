// CreateNewAccountStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WelcomeScreen from "../../screens/Welcome";
import MembershipPlans from "../../screens/MembershipPlans";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const CreateNewAccountStack = () => {
  const navigation = useNavigation();

  // Function to navigate back to the Welcome screen and reset the stack
  const goToWelcomeScreen = () => {
    navigation.navigate("Welcome", { reset: true });
  };

  return (
    <Stack.Navigator initialRouteName="MembershipPlans">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          title: "Welcome",
          headerLeft: () => (
            <TouchableOpacity
              onPress={goToWelcomeScreen}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="MembershipPlans"
        component={MembershipPlans}
        options={{
          title: "Membership Plans",
          headerLeft: () => (
            <TouchableOpacity
              onPress={goToWelcomeScreen}
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

export default CreateNewAccountStack;
