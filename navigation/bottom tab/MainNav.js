import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import LoginContext from "../../contexts/LoginContext";
import HomeScreen from "../../screens/Home";
import MyGigsScreen from "../../screens/MyGigs";
import SearchScreen from "../../screens/Search";
import ProfileScreen from "../../screens/Profile";
import SettingsScreen from "../../screens/Settings";
import ArtistUserProfile from "../../screens/ArtistUserProfile";
import VenueUserProfile from "../../screens/VenueUserProfile"; // Import the VenueUserProfile component

const Tab = createBottomTabNavigator();

const MainNav = () => {
  const { userId, setUserId, artistOrVenue, setArtistOrVenue } =
    useContext(LoginContext);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyGigs"
        component={MyGigsScreen}
        options={{
          title: "My Gigs",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="musical-notes" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      {artistOrVenue === "A" && (
        <Tab.Screen
          name="ArtistUserProfile"
          component={ArtistUserProfile}
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      )}
      {artistOrVenue === "V" && (
        <Tab.Screen
          name="VenueUserProfile"
          component={VenueUserProfile}
          options={{
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      )}
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNav;
