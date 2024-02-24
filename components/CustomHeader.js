import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 45,
    left: 0,
    right: 0,
    height: 60, // Adjust height as needed
    backgroundColor: "#fff", // Set background color
    zIndex: 1000, // Ensure it's above other content
    borderBottomWidth: 1, // Add bottom border
    borderBottomColor: "#ccc", // Set border color
  },
  backButton: {
    position: "absolute",
    left: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CustomHeader;
