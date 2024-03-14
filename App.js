import React, { useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./navigation/stack/AuthStack";
import MainNav from "./navigation/bottom tab/MainNav";
import LoginContext, { LoginProvider } from "./contexts/LoginContext";
import CreateNewAccountStack from "./navigation/stack/CreateNewAccountStack";
import NewsletterThankYou from "./screens/NewsletterThankyou";
import ArtistProfileSettings from "./screens/ArtistProfileSettings";
import ProfileSuccessfullyUpdated from "./screens/ProfileSuccessfullyUpdated";
import MyBookings from "./screens/MyBookings";
import ArtistAdvertiseGig from "./screens/ArtistAdvertiseGig";
import AppVersion from "./screens/AppVersion";
import HelpCentre from "./screens/HelpCentre";
import TermsOfService from "./screens/TermsOfService";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import CopyrightInformation from "./screens/CopyrightInformation";
import ContactSupport from "./screens/ContactSupport";
import RestrictedPage from "./screens/RestrictedPage";
import VenueProfileSettings from "./screens/VenueProfileSettings";

const Stack = createStackNavigator();

const App = () => {
  const [userId, setUserId] = useState(null);
  const [artistOrVenue, setArtistOrVenue] = useState(null);

  return (
    <LoginProvider>
      <StatusBar backgroundColor="#121212" barStyle="dark-content" />

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {(userId && artistOrVenue === "A") || artistOrVenue === "V" ? (
            <Stack.Screen name="Main" component={MainNav} />
          ) : (
            <>
              <Stack.Screen name="Welcome" component={AuthStack} />

              <Stack.Screen
                name="CreateNewAccount"
                component={CreateNewAccountStack}
              />

              <Stack.Screen name="MainNav" component={MainNav} />

              <Stack.Screen
                name="NewsletterThankYou"
                component={NewsletterThankYou}
              />

              <Stack.Screen
                name="ArtistProfileSettings"
                component={ArtistProfileSettings}
              />

              <Stack.Screen
                name="VenueProfileSettings"
                component={VenueProfileSettings}
              />

              <Stack.Screen
                name="ProfileSuccessfullyUpdated"
                component={ProfileSuccessfullyUpdated}
              />

              <Stack.Screen name="MyBookings" component={MyBookings} />

              <Stack.Screen
                name="ArtistAdvertiseGig"
                component={ArtistAdvertiseGig}
              />

              <Stack.Screen name="AppVersion" component={AppVersion} />

              <Stack.Screen name="HelpCentre" component={HelpCentre} />

              <Stack.Screen name="TermsOfService" component={TermsOfService} />

              <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />

              <Stack.Screen
                name="CopyrightInformation"
                component={CopyrightInformation}
              />

              <Stack.Screen name="ContactSupport" component={ContactSupport} />

              <Stack.Screen name="RestrictedPage" component={RestrictedPage} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </LoginProvider>
  );
};

export default App;
