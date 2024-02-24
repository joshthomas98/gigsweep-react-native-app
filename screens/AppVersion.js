import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomHeader from "../components/CustomHeader";

const AppVersion = () => {
  return (
    <View style={styles.container}>
      <CustomHeader title="App Version" />
      <View style={styles.content}>
        <Text style={styles.title}>Current App Version: 1.0.0</Text>
        <Text style={styles.subHeader}>You're up to date!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 10,
    paddingTop: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 15,
    fontWeight: "normal",
    marginTop: 7,
  },
});

export default AppVersion;
