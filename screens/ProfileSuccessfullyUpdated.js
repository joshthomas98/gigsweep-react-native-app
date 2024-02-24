import React from "react";
import { View, Text, Linking, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SuccessAnimation from "../components/SuccessAnimation";
import LoginContext from "../contexts/LoginContext";

const ProfileSuccessfullyUpdated = () => {
  const { userId, setUserId, artistOrVenue, setArtistOrVenue } =
    useContext(LoginContext);

  const navigation = useNavigation();

  const handleProfileLink = () => {
    const profileLink =
      storedUserType === "A"
        ? `artistuserprofile/${userId}`
        : `venueuserprofile/${userId}`;
    Linking.openURL(profileLink);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Your profile has been successfully updated!
      </Text>
      <Text style={styles.link} onPress={handleProfileLink}>
        Back to my profile
      </Text>
      <View style={styles.animationContainer}>
        <SuccessAnimation />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 20,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    paddingBottom: 20,
    textAlign: "center",
  },
  link: {
    color: "#007bff",
    fontSize: 18,
    textDecorationLine: "underline",
    paddingBottom: 20,
  },
  animationContainer: {
    position: "relative",
    top: -110,
  },
});

export default ProfileSuccessfullyUpdated;
