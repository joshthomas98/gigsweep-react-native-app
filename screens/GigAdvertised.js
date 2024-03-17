import React, { useContext } from "react";
import { View, Text, Linking, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SuccessAnimation from "../components/SuccessAnimation";
import LoginContext from "../contexts/LoginContext";

const GigAdvertised = () => {
  const { userId, setUserId, artistOrVenue, setArtistOrVenue } =
    useContext(LoginContext);

  const navigation = useNavigation();

  const handleProfileLink = () => {
    const profileLink =
      artistOrVenue === "A"
        ? `artistuserprofile/${userId}`
        : `venueuserprofile/${userId}`;

    // Use React Navigation's navigate function to go to the profile screen
    if (artistOrVenue === "A") {
      navigation.navigate("ArtistUserProfile");
    } else {
      navigation.navigate("VenueUserProfile");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.niceWork}>
        Nice work, you have advertised your gig successfully!
      </Text>

      <Text style={styles.secondaryText}>
        We'll notiify you with any enquires about this gig.
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
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  niceWork: {
    color: "#fff",
    fontSize: 25,
    paddingBottom: 20,
    textAlign: "center",
  },
  secondaryText: {
    color: "#fff",
    fontSize: 18,
    paddingBottom: 20,
    textAlign: "center",
  },
  link: {
    color: "#007bff",
    fontSize: 18,
    textDecorationLine: "underline",
    marginTop: 50,
    paddingBottom: 20,
  },
  animationContainer: {
    position: "relative",
    top: -320,
  },
});

export default GigAdvertised;
