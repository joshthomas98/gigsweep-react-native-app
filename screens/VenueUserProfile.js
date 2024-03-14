import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginContext from "../contexts/LoginContext";
import { globalStyles } from "../styles/global";

const VenueUserProfile = () => {
  const navigation = useNavigation();
  const { userId, artistOrVenue } = useContext(LoginContext);

  const SERVER_BASE_URL = "http://localhost:8000/";

  const profileId = userId;

  const [venue, setVenue] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        const response = await fetch(`${SERVER_BASE_URL}venues/${profileId}/`);
        if (!response.ok) {
          throw new Error("Failed to fetch venue data");
        }
        const data = await response.json();
        setVenue([data]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVenue();
  }, [profileId, SERVER_BASE_URL]);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#121212" }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={globalStyles.container}>
        <Text style={[styles.title, { color: "white" }]}>My Profile</Text>

        {venue.map((venue) => (
          <View key={venue.id} style={styles.venueContainer}>
            <Image
              source={{ uri: SERVER_BASE_URL + venue.image }}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={[styles.name, { color: "white" }]}>
                {venue.venue_name}
              </Text>

              <View style={styles.locationContainer}>
                <Text style={[styles.details, { color: "white" }]}>
                  Location: {venue.county}, {venue.country}
                </Text>
              </View>
            </View>
          </View>
        ))}

        <Button
          title="Edit profile"
          onPress={() => navigation.navigate("VenueProfileSettings")}
        />

        {userId === profileId && (
          <Button
            title="My Bookings"
            onPress={() => navigation.navigate("MyBookings")}
          />
        )}

        {artistOrVenue === "A" && (
          <Button
            title="Leave feedback"
            onPress={() =>
              navigation.navigate("VenueWriteReview", { venueId: venue.id })
            }
          />
        )}

        {userId === profileId && (
          <Button
            title="Advertise a New Gig"
            onPress={() => navigation.navigate("VenueAdvertiseGig")}
          />
        )}

        {userId === profileId && (
          <Button
            title="View my listed gigs"
            onPress={() => navigation.navigate("MyListedGigs")}
          />
        )}

        <View style={styles.aboutContainer}>
          <Text style={[styles.aboutTitle, { color: "white" }]}>About</Text>
          {venue.map((venue) => (
            <Text key={venue.id} style={[styles.bio, { color: "white" }]}>
              {venue.bio}
            </Text>
          ))}
        </View>

        <View style={styles.photosContainer}>
          <Text style={[styles.photosTitle, { color: "white" }]}>
            Recent photos
          </Text>
          <View style={styles.photos}>{/* Render recent photos */}</View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   padding: 20,
  // },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 20,
    textAlign: "center",
  },
  venueContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 20,
    alignItems: "center",
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  textContainer: {
    marginLeft: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  locationContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: "90%",
  },
  details: {
    fontSize: 16,
    marginBottom: 5,
    flexShrink: 1, // Allow text to shrink to fit the container
  },
  aboutContainer: {
    marginTop: 30,
    marginBottom: 40,
    alignItems: "center",
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  bio: {
    fontSize: 16,
    marginHorizontal: 20,
    textAlign: "center",
  },
  availabilityContainer: {
    marginBottom: 20,
  },
  availabilityTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  photosContainer: {
    marginBottom: 20,
  },
  photosTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  photos: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default VenueUserProfile;
