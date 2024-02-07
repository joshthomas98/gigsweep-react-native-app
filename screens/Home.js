import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { globalStyles } from "../styles/global";
import LoginContext from "../contexts/LoginContext";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const { userId, setUserId, artistOrVenue, setArtistOrVenue } =
    useContext(LoginContext);

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const handlePickUpGigClick = () => {
    navigate("/pickupgig");
  };

  const handleAdvertiseSubmit = () => {
    if (userId && artistOrVenue === "A") {
      navigate("/artistadvertisegig");
    } else if (userId && artistOrVenue === "V") {
      navigate("/venueadvertisegig");
    } else if (!userId && !artistOrVenue) {
      navigate("/signin");
    }
  };

  const handleArtistProfileInfoBoxClick = () => {
    navigate(`/artistuserprofile/${userId}`);
  };

  const handleVenueFindArtistsClick = () => {
    navigate("/venuesearchforartist");
  };

  const handleVenueProfileInfoBoxClick = () => {
    navigate(`/venueuserprofile/${userId}`);
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView style={{ flex: 0 }}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/gigsweep_logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={globalStyles.container}>
          <Text
            style={[
              globalStyles.textWhite,
              styles.homescreenHeaderText,
              { marginBottom: 15 },
            ]}
          >
            Welcome to GigSweep!
          </Text>

          <Text
            style={[
              globalStyles.textWhite,
              { marginBottom: 10, marginHorizontal: 15, textAlign: "center" },
            ]}
          >
            GigSweep connects artists and venues to ensure no gig goes to waste.
            Showcase your talent and find gigs easily. GigSweep is not just for
            musicians. It's also a platform for venues to find talent and for
            fans to stay updated on gigs.
          </Text>
        </View>

        {/* Info boxes section */}
        {userId && artistOrVenue === "A" && (
          <View style={{ padding: 20 }}>
            <View style={styles.cardContainer}>
              <TouchableOpacity
                style={styles.card}
                onPress={handlePickUpGigClick}
              >
                <FontAwesome name="search" style={styles.icon} />
                <Text style={styles.homepageInfoCardTitle}>
                  Fill Your Schedule
                </Text>
                <Text style={styles.homepageInfoCardDescription}>
                  Browse available slots at great venues and connect with fresh
                  fans.
                </Text>
                <Button title="Search" onPress={handlePickUpGigClick} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.card}
                onPress={handleAdvertiseSubmit}
              >
                <FontAwesome5 name="ad" style={styles.icon} />
                <Text style={styles.homepageInfoCardTitle}>Advertise Gigs</Text>
                <Text style={styles.homepageInfoCardDescription}>
                  Advertise gigs you can't play anymore and let fellow artists
                  pick them up.
                </Text>
                <Button title="Advertise" onPress={handleAdvertiseSubmit} />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.card}
                onPress={handleArtistProfileInfoBoxClick}
              >
                <FontAwesome name="play" style={styles.icon} />
                <Text style={styles.homepageInfoCardTitle}>
                  Be Seen, Be Heard
                </Text>
                <Text style={styles.homepageInfoCardDescription}>
                  Enhance your online presence and showcase your talent
                  seamlessly.
                </Text>
                <Button
                  title="Profile"
                  onPress={handleArtistProfileInfoBoxClick}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}

        {userId && artistOrVenue === "V" && (
          <View style={{ padding: 20 }}>
            <View style={styles.cardContainer}>
              <TouchableOpacity
                style={styles.card}
                onPress={handleVenueFindArtistsClick}
              >
                <FontAwesome name="search" style={styles.icon} />
                <Text style={styles.homepageInfoCardTitle}>Book Your Acts</Text>
                <Text style={styles.homepageInfoCardDescription}>
                  Discover a varied artist lineup for your venue and book
                  effortlessly.
                </Text>
                <Button
                  title="Book Artists"
                  onPress={handleVenueFindArtistsClick}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.card}
                onPress={handleVenueProfileInfoBoxClick}
              >
                <FontAwesome name="calendar-week" style={styles.icon} />
                <Text style={styles.homepageInfoCardTitle}>
                  Effortless Management
                </Text>
                <Text style={styles.homepageInfoCardDescription}>
                  Streamline artist bookings and manage your venue's
                  entertainment calendar.
                </Text>
                <Button
                  title="View Bookings"
                  onPress={handleVenueProfileInfoBoxClick}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.card}
                onPress={handleVenueProfileInfoBoxClick}
              >
                <FontAwesome name="play" style={styles.icon} />
                <Text style={styles.homepageInfoCardTitle}>
                  Let The Music Play
                </Text>
                <Text style={styles.homepageInfoCardDescription}>
                  Elevate your venue's presence and attract talented artists and
                  fans.
                </Text>
                <Button
                  title="Profile"
                  onPress={handleVenueProfileInfoBoxClick}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
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
  cardContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 10,
  },
  card: {
    backgroundColor: "lightgray",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: "100%",
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
  },
  icon: {
    fontSize: 40,
    marginBottom: 10,
    alignSelf: "center", // Center the icon horizontally
  },
  homepageInfoCardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  homepageInfoCardDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 10, // Adjust as needed
    alignSelf: "center", // Center the button horizontally
  },
});

export default HomeScreen;
