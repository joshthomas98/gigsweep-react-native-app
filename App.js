import React from "react";
import { StatusBar } from "react-native";
import AuthStack from "./navigation/stack/AuthStack";

export default function App() {
  return (
    <>
      {/* Set the background color and text color for the status bar */}
      <StatusBar backgroundColor="#121212" barStyle="dark-content" />

      <AuthStack />
    </>
  );
}
