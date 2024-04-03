import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import CustomHeader from "../components/CustomHeader";
import { globalStyles } from "../styles/global";

const AppVersion = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <CustomHeader title="App Version" />
      <View style={styles.content}>
        <Text style={styles.title}>Current App Version: 1.0.0</Text>
        <Text style={styles.subHeader}>You're up to date!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
