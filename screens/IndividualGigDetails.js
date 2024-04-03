import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { globalStyles } from "../styles/global";
import CustomHeader from "../components/CustomHeader";

const IndividualGigDetails = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <CustomHeader title="Gig Details" />
      <Text>IndividualGigDetails</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Light gray background
  },
});

export default IndividualGigDetails;
