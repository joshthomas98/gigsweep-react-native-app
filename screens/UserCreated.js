import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import SuccessAnimation from "../components/SuccessAnimation";
import { useNavigation } from "@react-navigation/native";
import LoginContext from "../contexts/LoginContext";

const UserCreated = () => {
  const { userId, artistOrVenue } = useContext(LoginContext);
  const navigation = useNavigation();

  useEffect(() => {
    console.log("userId:", userId);
    console.log("artistOrVenue:", artistOrVenue);
  }, [userId, artistOrVenue]);

  const goToWelcomeScreen = () => {
    navigation.navigate("Welcome");
  };

  console.log("User Created page:", userId);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Thank you for signing up!</Text>
        <Text style={styles.subtitle}>
          Your account has been successfully created and you're all good to go!
        </Text>
        <View style={styles.animationContainer}>
          <SuccessAnimation />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={goToWelcomeScreen}>
        <Text style={styles.buttonText}>Let's get started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", // Change the background color as needed
  },
  contentContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    color: "#fff",
    textAlign: "center", // Center text horizontally
  },
  animationContainer: {
    position: "relative",
    top: -150,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default UserCreated;
