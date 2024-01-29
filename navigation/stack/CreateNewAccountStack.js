import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../../screens/Welcome";
import MembershipPlans from "../../screens/MembershipPlans";

const Stack = createStackNavigator();

const CreateNewAccountStack = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="MembershipPlans" component={MembershipPlans} />
    </Stack.Navigator>
  );
};

export default CreateNewAccountStack;
