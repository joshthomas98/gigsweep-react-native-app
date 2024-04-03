import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Switch,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../components/CustomHeader";

const LanguagePreferencesScreen = () => {
  const navigation = useNavigation();

  const [language, setLanguage] = useState("English");

  const toggleLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const handleSaveButtonClick = () => {
    navigation.navigate("Settings");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <CustomHeader title="Language Preferences" />
      <View style={styles.container}>
        <View style={styles.languageContainer}>
          <Text style={styles.language}>English</Text>
          <Switch
            style={styles.toggle} // Add this line to apply the toggle style
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={language === "English" ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleLanguage("English")}
            value={language === "English"}
          />
        </View>
        <View style={styles.languageContainer}>
          <Text style={styles.language}>Spanish</Text>
          <Switch
            style={styles.toggle} // Add this line to apply the toggle style
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={language === "Spanish" ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleLanguage("Spanish")}
            value={language === "Spanish"}
          />
        </View>
        <View style={styles.languageContainer}>
          <Text style={styles.language}>French</Text>
          <Switch
            style={styles.toggle} // Add this line to apply the toggle style
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={language === "French" ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleLanguage("French")}
            value={language === "French"}
          />
        </View>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSaveButtonClick}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  languageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "center",
  },
  language: {
    fontSize: 18,
    marginRight: 5, // Adjust marginRight to decrease space between text and toggle
  },
  toggle: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
  saveButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: "center",
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default LanguagePreferencesScreen;
