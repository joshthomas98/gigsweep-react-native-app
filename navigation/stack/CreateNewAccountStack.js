// CreateNewAccountStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import WelcomeScreen from "../../screens/Welcome";
import MembershipPlans from "../../screens/MembershipPlans";
import { Ionicons } from "@expo/vector-icons";
import ArtistRegister from "../../screens/ArtistRegister";
import VenueRegister from "../../screens/VenueRegister";
import UserCreated from "../../screens/UserCreated";

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
      <Stack.Screen
        name="ArtistRegister"
        component={ArtistRegister}
        options={({ navigation }) => ({
          title: "Artist Register",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="VenueRegister"
        component={VenueRegister}
        options={({ navigation }) => ({
          title: "Venue Register",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="UserCreated"
        component={UserCreated}
        options={({ navigation }) => ({
          title: "User Created",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default CreateNewAccountStack;
