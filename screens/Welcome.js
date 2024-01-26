import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

const WelcomeScreen = ({ navigation }) => {
  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/gigsweep_logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <TouchableOpacity style={styles.loginButton} onPress={goToLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.createNewAccountButton}
          onPress={goToLogin}
        >
          <Text style={styles.createNewAccountButtonText}>
            Create New Account
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={globalStyles.textWhite}>
          &copy; {new Date().getFullYear()} GigSweep
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homescreenHeaderText: {
    textAlign: "center",
    fontSize: 16,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300, // Adjust width as needed
    height: 300, // Adjust height as needed
  },
  loginButton: {
    backgroundColor: "#007AFF", // Adjust color as needed
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30, // Make it round
    marginTop: 20,
  },
  loginButtonText: {
    color: "#FFFFFF", // Adjust color as needed
    fontSize: 18,
    textAlign: "center",
  },
  createNewAccountButton: {
    backgroundColor: "#FFFFFF", // Change color to light
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30, // Make it round
    marginTop: 20,
  },
  createNewAccountButtonText: {
    color: "#007AFF", // Change color to match login button
    fontSize: 18,
    textAlign: "center",
  },
  footer: {
    alignItems: "center",
    marginBottom: 20,
  },
});

export default WelcomeScreen;
