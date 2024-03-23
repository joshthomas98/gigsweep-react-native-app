import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import WelcomeScreen from "../../screens/Welcome";
import MembershipPlans from "../../screens/MembershipPlans";
import ArtistRegister from "../../screens/ArtistRegister";
import VenueRegister from "../../screens/VenueRegister";
import UserCreated from "../../screens/UserCreated";
import CustomHeader from "../../components/CustomHeader";

const Stack = createStackNavigator();

const CreateNewAccountStack = () => {
  return (
    <Stack.Navigator initialRouteName="MembershipPlans">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          title: "Welcome",
          headerLeft: null,
        }}
      />
      <Stack.Screen
        name="MembershipPlans"
        component={MembershipPlans}
        options={({ navigation }) => ({
          title: "Membership Plans",
          header: () => <CustomHeader title="Membership Plans" />, // Use CustomHeader
        })}
      />
      <Stack.Screen
        name="ArtistRegister"
        component={ArtistRegister}
        options={({ navigation }) => ({
          title: "Artist Register",
          header: () => <CustomHeader title="Artist Register" />, // Use CustomHeader
        })}
      />
      <Stack.Screen
        name="VenueRegister"
        component={VenueRegister}
        options={({ navigation }) => ({
          title: "Venue Register",
          header: () => <CustomHeader title="Venue Register" />, // Use CustomHeader
        })}
      />
      <Stack.Screen
        name="UserCreated"
        component={UserCreated}
        options={{
          title: "User Created",
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
};

export default CreateNewAccountStack;
