import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

const SearchScreen = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/gigsweep_logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <TouchableOpacity>
          <Text style={globalStyles.textWhite}>Search</Text>
        </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150, // Adjust width as needed
    height: 150, // Adjust height as needed
  },
});

export default SearchScreen;
