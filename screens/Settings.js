import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import LoginContext from "../contexts/LoginContext";

const SettingsScreen = () => {
  const { userId, artistOrVenue } = useContext(LoginContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (!userId || !artistOrVenue) {
      navigation.navigate("Login");
    }
  }, [userId, artistOrVenue, navigation]);

  const handleOptionPress = (option) => {
    if (option === "App version and updates") {
      navigation.navigate("AppVersion");
    } else if (option === "Help centre/FAQs") {
      navigation.navigate("HelpCentre");
    } else if (option === "Terms of service") {
      navigation.navigate("TermsOfService");
    } else if (option === "Privacy policy") {
      navigation.navigate("PrivacyPolicy");
    } else if (option === "Copyright information") {
      navigation.navigate("CopyrightInformation");
    } else if (option === "Contact support") {
      navigation.navigate("ContactSupport");
    } else {
      console.log("Option pressed:", option);
    }
  };

  const settingsData = {
    General: [
      "Language preferences",
      "Theme customization options (light/dark mode)",
      "App version and updates",
    ],
    "Account & Security": [
      "Profile information",
      "Change password",
      "Email preferences",
    ],
    "Notification Settings": [
      "Manage push notifications",
      "Notification sound/vibration settings",
    ],
    "Privacy Settings": [
      "Public profile visibility",
      "Data sharing preferences",
    ],
    Support: ["Help centre/FAQs", "Contact support"],
    Legal: ["Terms of service", "Privacy policy", "Copyright information"],
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.entries(settingsData).map(([header, options], index) => (
        <View key={index} style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{header}</Text>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionContainer}
              onPress={() => handleOptionPress(option)}
            >
              <Text style={styles.option}>{option}</Text>
              <AntDesign name="right" size={20} color="black" />
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  sectionContainer: {
    paddingHorizontal: 20,
    // marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginBottom: 10,
  },
  option: {
    fontSize: 16,
  },
});

export default SettingsScreen;
