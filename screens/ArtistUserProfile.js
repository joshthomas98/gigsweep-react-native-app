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
import { format } from "date-fns";
import CalendarPicker from "react-native-calendar-picker";
import LoginContext from "../contexts/LoginContext";
import { globalStyles } from "../styles/global";
import UnavailabilityModal from "../components/UnavailabilityModal";

const ArtistUserProfile = () => {
  const { userId, artistOrVenue } = useContext(LoginContext);
  const navigation = useNavigation();

  const SERVER_BASE_URL = "http://localhost:8000/";

  const profileId = userId;

  const [artist, setArtist] = useState([]);
  const [unavailabilities, setUnavailabilities] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedUnavailability, setSelectedUnavailability] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await fetch(`${SERVER_BASE_URL}artists/${profileId}/`);
        if (!response.ok) {
          throw new Error("Failed to fetch artist data");
        }
        const data = await response.json();
        setArtist([data]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArtist();
  }, [profileId, SERVER_BASE_URL]);

  useEffect(() => {
    const fetchUnavailabilities = async () => {
      try {
        const response = await fetch(
          `${SERVER_BASE_URL}unavailabilities/${profileId}/`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch unavailabilities data");
        }
        const data = await response.json();
        setUnavailabilities(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUnavailabilities();
  }, [profileId, SERVER_BASE_URL]);

  const handleDateSelect = (date) => {
    const dateString = formatWithTimezone(date);
    const isDateUnavailable = unavailabilities.some(
      (u) => u.date === dateString
    );

    if (isDateUnavailable) {
      const unavailability = unavailabilities.find(
        (u) => u.date === dateString
      );
      setSelectedUnavailability(unavailability);
      setShowModal(true);
    } else {
      setSelectedUnavailability(null);
      setShowModal(false); // Close modal if the selected date is available
    }

    setSelectedDate(date);
  };

  const formatWithTimezone = (date) => {
    const tz = "Europe/London";
    return format(date, "yyyy-MM-dd", { timeZone: tz });
  };

  const renderUnavailabilities = () => {
    return unavailabilities.map((unavailability) => {
      return {
        date: new Date(unavailability.date),
        style: { backgroundColor: "red" },
        textStyle: { color: "white" },
        artist: unavailability.artist,
        status: unavailability.status,
        reason: unavailability.reason,
      };
    });
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#121212" }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={globalStyles.container}>
        <Text style={[styles.title, { color: "white" }]}>My Profile</Text>

        {artist.map((artist) => (
          <View key={artist.id} style={styles.artistContainer}>
            <Image
              source={{ uri: SERVER_BASE_URL + artist.image }}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={[styles.name, { color: "white" }]}>
                {artist.artist_name}
              </Text>
              <Text style={[styles.details, { color: "white" }]}>
                Location: {artist.county}, {artist.country}
              </Text>
              <Text style={[styles.details, { color: "white" }]}>
                Genre: {artist.genre}
              </Text>
            </View>
          </View>
        ))}

        <Button
          title="Edit profile"
          onPress={() => navigation.navigate("ArtistProfileSettings")}
        />

        {userId === profileId && (
          <Button
            title="My Bookings"
            onPress={() => navigation.navigate("MyGigs")}
          />
        )}

        {artistOrVenue === "V" && (
          <Button
            title="Leave feedback"
            onPress={() =>
              navigation.navigate("VenueWriteReview", { artistId: artist.id })
            }
          />
        )}

        {userId === profileId && (
          <Button
            title="Advertise a New Gig"
            onPress={() => navigation.navigate("ArtistAdvertiseGig")}
          />
        )}

        <View style={styles.aboutContainer}>
          <Text style={[styles.aboutTitle, { color: "white" }]}>About</Text>
          {artist.map((artist) => (
            <Text key={artist.id} style={[styles.bio, { color: "white" }]}>
              {artist.bio}
            </Text>
          ))}
        </View>

        <View style={styles.availabilityContainer}>
          <Text style={[styles.availabilityTitle, { color: "white" }]}>
            Availability
          </Text>
          <CalendarPicker
            onDateChange={handleDateSelect}
            customDayHeaderStyles={() => ({ textStyle: { color: "white" } })}
            customDatesStyles={[
              {
                date: new Date(),
                style: { backgroundColor: "#00adf5" },
                textStyle: { color: "white" },
              },
              ...renderUnavailabilities(), // Mapping through unavailabilities
            ]}
            textStyle={{ color: "white" }}
          />

          {artistOrVenue === "A" && userId === profileId && (
            <View style={{ marginTop: 10 }}>
              <Button
                title="Edit my availability"
                onPress={() =>
                  navigation.navigate("ArtistEditAvailability", { profileId })
                }
              />
            </View>
          )}
        </View>

        {selectedUnavailability && (
          <View style={styles.unavailabilityContainer}>
            <Text style={{ color: "white" }}>
              Date: {selectedUnavailability.date}
            </Text>
            <Text style={{ color: "white" }}>
              Status: {selectedUnavailability.status}
            </Text>
            <Text style={{ color: "white" }}>
              Reason: {selectedUnavailability.reason}
            </Text>
          </View>
        )}

        <View style={styles.photosContainer}>
          <Text style={[styles.photosTitle, { color: "white" }]}>
            Recent photos
          </Text>
          <View style={styles.photos}>{/* Render recent photos */}</View>
        </View>

        <UnavailabilityModal
          unavailability={selectedUnavailability}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 20,
    textAlign: "center",
  },
  artistContainer: {
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
  details: {
    fontSize: 16,
    marginBottom: 5,
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
  unavailabilityContainer: {
    marginBottom: 20,
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

export default ArtistUserProfile;
