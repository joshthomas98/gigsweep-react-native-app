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
          headerLeft: () => <CustomLeftArrow navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="ArtistRegister"
        component={ArtistRegister}
        options={({ navigation }) => ({
          title: "Artist Register",
          headerLeft: () => <CustomLeftArrow navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="VenueRegister"
        component={VenueRegister}
        options={({ navigation }) => ({
          title: "Venue Register",
          headerLeft: () => <CustomLeftArrow navigation={navigation} />,
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

// const CustomLeftArrow = ({ navigation }) => (
//   <TouchableOpacity
//     onPress={() => navigation.goBack()}
//     style={{ marginLeft: 10 }}
//   >
//     <Ionicons name="arrow-back-outline" size={24} color="black" />
//   </TouchableOpacity>
// );

export default CreateNewAccountStack;
