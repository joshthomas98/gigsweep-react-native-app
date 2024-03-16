import React, { useState } from "react";
import { View, StyleSheet, Text, Switch, TouchableOpacity } from "react-native";
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
    <View style={styles.container}>
      <CustomHeader title="Language Preferences" />
      <Text style={styles.title}>Language Preferences</Text>
      <View style={styles.languageContainer}>
        <Text style={styles.language}>English</Text>
        <Switch
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  languageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  language: {
    fontSize: 18,
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default LanguagePreferencesScreen;
