// RestrictedPage.js
import React from "react";
import { View, Text, Button } from "react-native";

const RestrictedPage = ({ navigation }) => {
  // Function to handle logout
  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clearing user authentication state
    navigation.navigate("Login"); // Redirect to login screen after logout
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is a restricted page.</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default RestrictedPage;
