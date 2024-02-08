import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SuccessAnimation from "../components/SuccessAnimation";

const NewsletterThankYou = () => {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.heading]}>
        Thank you for signing up to our monthly newsletter
      </Text>
      <Text style={[styles.text, styles.subheading]}>
        You'll now receive the best of GigSweep every month straight to your
        inbox!
      </Text>
      <View style={styles.animationContainer}>
        <SuccessAnimation />
      </View>

      <TouchableOpacity style={styles.backButton} onPress={navigateToHome}>
        <Text style={styles.backButtonText}>Back to home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  subheading: {
    fontSize: 18,
    marginBottom: 40,
    marginHorizontal: 20,
  },
  animationContainer: {
    marginBottom: 80,
  },
  backButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default NewsletterThankYou;
