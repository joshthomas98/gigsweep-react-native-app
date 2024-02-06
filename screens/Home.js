import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import LoginContext from "../contexts/LoginContext";

const HomeScreen = ({ navigation }) => {
  const { userId, setUserId, artistOrVenue, setArtistOrVenue } =
    useContext(LoginContext);

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

        <View style={globalStyles.container}>
          <Text style={globalStyles.textWhite}>
            ytubhkjwhnugdghwiujhdkwjndwkhdnwk
          </Text>
        </View>
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

export default HomeScreen;
