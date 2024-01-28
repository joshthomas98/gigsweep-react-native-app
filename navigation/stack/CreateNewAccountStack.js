import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MembershipPlansScreen from "../../screens/MembershipPlans";
import ArtistRegisterScreen from "../../screens/ArtistRegister";
import VenueRegisterScreen from "../../screens/VenueRegister";
import UserCreatedScreen from "../../screens/UserCreated";

const Stack = createStackNavigator();

const CreateNewAccountStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="MembershipPlans" component={MembershipPlansScreen} />
    <Stack.Screen name="ArtistRegister" component={ArtistRegisterScreen} />
    <Stack.Screen name="VenueRegister" component={VenueRegisterScreen} />
    <Stack.Screen name="UserCreated" component={UserCreatedScreen} />
  </Stack.Navigator>
);

export default CreateNewAccountStack;
