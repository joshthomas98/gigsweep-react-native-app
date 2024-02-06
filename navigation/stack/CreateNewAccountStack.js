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
          headerLeft: () => null, // Hide back button on Welcome screen
        }}
      />
      <Stack.Screen
        name="MembershipPlans"
        component={MembershipPlans}
        options={{
          title: "Membership Plans",
          headerLeft: () => null, // Hide back button on MembershipPlans screen
        }}
      />
      <Stack.Screen
        name="ArtistRegister"
        component={ArtistRegister}
        options={{
          title: "Artist Register",
          headerLeft: () => null, // Hide back button on ArtistRegister screen
        }}
      />
      <Stack.Screen
        name="VenueRegister"
        component={VenueRegister}
        options={{
          title: "Venue Register",
          headerLeft: () => null, // Hide back button on VenueRegister screen
        }}
      />
      <Stack.Screen
        name="UserCreated"
        component={UserCreated}
        options={{
          title: "User Created",
          headerLeft: () => null, // Hide back button on UserCreated screen
          gestureEnabled: false, // Disable swipe back gesture
        }}
        listeners={({ navigation }) => ({
          // Reset the stack when navigating to UserCreated screen
          beforeRemove: (e) => {
            e.preventDefault();
            navigation.reset({
              index: 0,
              routes: [{ name: "UserCreated" }],
            });
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default CreateNewAccountStack;
