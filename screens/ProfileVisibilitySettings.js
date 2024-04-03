import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  StyleSheet,
  SafeAreaView,
  Alert,
} from "react-native";
import CustomHeader from "../components/CustomHeader";

const ProfileVisibilitySettings = () => {
  const [profileVisibility, setProfileVisibility] = useState(true);

  const toggleProfileVisibility = () => {
    setProfileVisibility((previousState) => !previousState);
  };

  const saveChanges = () => {
    // Logic to save changes, such as sending a request to the server
    Alert.alert(
      "Changes Saved",
      "Your profile visibility settings have been updated."
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <CustomHeader title="Profile Visibility Settings" />
      <View style={styles.container}>
        <Text style={styles.title}>Profile Visibility</Text>
        <Text style={styles.description}>
          Toggle this switch to control the visibility of your profile on the
          platform. When the switch is toggled on, your profile will be visible
          to other users, allowing them to view and interact with it. When the
          switch is toggled off, your profile will be hidden from other users,
          and they will not be able to view it.
        </Text>
        <View style={styles.preferenceItem}>
          <Text style={styles.preferenceText}>Make Profile Visible:</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={profileVisibility ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleProfileVisibility}
            value={profileVisibility}
          />
        </View>
        <TouchableOpacity style={styles.saveButton} onPress={saveChanges}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  preferenceItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  preferenceText: {
    fontSize: 18,
  },
  saveButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProfileVisibilitySettings;
