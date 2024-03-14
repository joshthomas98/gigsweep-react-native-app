import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { globalStyles } from "../styles/global";
import LoginContext from "../contexts/LoginContext";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import FeaturedArtists from "../components/FeaturedArtists";
import Testimonials from "../components/Testimonials";
import SearchBar from "../components/SearchBar";

const HomeScreen = ({ navigation }) => {
  const { userId, setUserId, artistOrVenue, setArtistOrVenue } =
    useContext(LoginContext);

  const [email, setEmail] = useState("");

  const handlePickUpGigClick = () => {
    navigate("/pickupgig");
  };

  const handleAdvertiseSubmit = () => {
    if (userId && artistOrVenue === "A") {
      navigation.navigate("/artistadvertisegig");
    } else if (userId && artistOrVenue === "V") {
      navigation.navigate("/venueadvertisegig");
    } else if (!userId && !artistOrVenue) {
      navigation.navigate("/signin");
    }
  };

  const handleArtistProfileInfoBoxClick = () => {
    navigation.navigate("ArtistUserProfile");
  };

  const handleVenueFindArtistsClick = () => {
    navigation.navigate("/VenueSearchForArtist");
  };

  const handleVenueProfileInfoBoxClick = () => {
    navigation.navigate("VenueUserProfile");
  };

  const handleNewsletterSignUp = (event) => {
    event.preventDefault();
    const data = {
      email: email,
    };

    fetch("http://localhost:8000/newslettersignups/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          navigation.navigate("NewsletterThankYou");
          console.log("Successfully singed up for newsletter");
        }
      })
      .catch((error) => {
        console.error("Error signing up for newsletter:", error);
      });
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={[
          "logo",
          "welcome",
          "search",
          "info_boxes",
          "featured_artists",
          "testimonials",
          "newsletter",
        ]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          switch (item) {
            case "logo":
              return (
                <View style={styles.logoContainer}>
                  <Image
                    source={require("../assets/gigsweep_logo.png")}
                    style={styles.logo}
                    resizeMode="contain"
                  />
                </View>
              );
            case "welcome":
              return (
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
                </View>
              );
            case "search":
              return (
                <View style={{ marginTop: 10, marginHorizontal: 10 }}>
                  <SearchBar />
                </View>
              );
            case "info_boxes":
              return (
                <View>
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
                            Browse available slots at great venues and connect
                            with fresh fans.
                          </Text>
                          <Button
                            title="Search"
                            onPress={handlePickUpGigClick}
                          />
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={styles.card}
                          onPress={handleAdvertiseSubmit}
                        >
                          <FontAwesome5 name="ad" style={styles.icon} />
                          <Text style={styles.homepageInfoCardTitle}>
                            Advertise Gigs
                          </Text>
                          <Text style={styles.homepageInfoCardDescription}>
                            Advertise gigs you can't play anymore and let fellow
                            artists pick them up.
                          </Text>
                          <Button
                            title="Advertise"
                            onPress={handleAdvertiseSubmit}
                          />
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
                            Enhance your online presence and showcase your
                            talent seamlessly.
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
                          <Text style={styles.homepageInfoCardTitle}>
                            Book Your Acts
                          </Text>
                          <Text style={styles.homepageInfoCardDescription}>
                            Discover a varied artist lineup for your venue and
                            book effortlessly.
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
                          <FontAwesome name="calendar" style={styles.icon} />
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
                            Elevate your venue's presence and attract talented
                            artists and fans.
                          </Text>
                          <Button
                            title="Profile"
                            onPress={handleVenueProfileInfoBoxClick}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                </View>
              );
            case "featured_artists":
              return <FeaturedArtists />;
            case "testimonials":
              return <Testimonials />;
            case "newsletter":
              return (
                <View
                  style={{
                    paddingTop: 12,
                    marginBottom: 10,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={[
                      globalStyles.textWhite,
                      styles.newsletterSectionHeading,
                    ]}
                  >
                    Want to stay up to date with everything happening at
                    GigSweep?
                  </Text>
                  <Text
                    style={[
                      globalStyles.textWhite,
                      styles.newsletterSectionSubheading,
                    ]}
                  >
                    Sign up for our monthly newsletter here!
                  </Text>
                  <View style={styles.formContainer}>
                    <TextInput
                      placeholder="Enter your email here"
                      style={styles.newsletterSectionTextInput}
                      value={email}
                      onChangeText={setEmail}
                    />
                    <TouchableOpacity
                      style={styles.newsletterSectionButton}
                      onPress={handleNewsletterSignUp}
                    >
                      <Text style={styles.newsletterSectionButtonText}>
                        Sign Up
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            default:
              return null;
          }
        }}
      />
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
    textAlign: "center",
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
  heading: {
    fontSize: 20,
    marginBottom: 12,
  },
  subheading: {
    fontSize: 16,
    marginBottom: 24,
  },
  formContainer: {
    alignItems: "center",
  },
  newsletterSectionTextInput: {
    backgroundColor: "#fff",
    width: 300,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  newsletterSectionButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 25,
  },
  newsletterSectionButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  newsletterSectionHeading: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  newsletterSectionSubheading: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
});

export default HomeScreen;
