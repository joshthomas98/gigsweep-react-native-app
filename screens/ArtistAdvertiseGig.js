import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import LoginContext from "../contexts/LoginContext";
import { globalStyles } from "../styles/global";

const ArtistAdvertiseGig = () => {
  const { userId, artistOrVenue } = useContext(LoginContext);
  const navigation = useNavigation();

  const SERVER_BASE_URL = "http://localhost:8000/";

  const profileId = userId;

  const [artist, setArtist] = useState("");

  const [dateOfGig, setDateOfGig] = useState("");
  const [venueName, setVenueName] = useState("");
  const [countryOfVenue, setCountryOfVenue] = useState("");
  const [genreOfGig, setGenreOfGig] = useState("");
  const [typeOfGig, setTypeOfGig] = useState("");
  const [payment, setPayment] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!userId || !artistOrVenue) {
      navigation.navigate("SignIn");
    } else if (userId && artistOrVenue === "V") {
      navigation.navigate("RestrictedPage");
    }
  }, [userId, artistOrVenue, navigation]);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await fetch(`${SERVER_BASE_URL}artists/${profileId}/`);
        if (!response.ok) {
          throw new Error("Failed to fetch artist data");
        }
        const data = await response.json();
        setArtist(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArtist();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // convert dateOfGig to a Date object
    const dateObj = new Date(dateOfGig);

    // extract only the date portion
    const date = dateObj.toISOString().slice(0, 10);

    const data = {
      artist: artist.id,
      date_of_gig: dateOfGig,
      venue_name: venueName,
      country_of_venue: countryOfVenue,
      genre_of_gig: genreOfGig,
      type_of_gig: typeOfGig,
      type_of_artist: artist.type_of_artist,
      payment: payment,
      user_type: artistOrVenue === "A" ? "Artist" : "",
      description: description,
      status: "Active",
    };

    // Log each value in the data object
    console.log("Data to be submitted:", data);

    fetch("http://localhost:8000/artist_listed_gigs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          navigation.navigate("GigAdvertised");
        } else {
          console.error("Error advertising gig:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error advertising gig:", error);
      });
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Advertise Your Gig</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={[styles.input, { backgroundColor: "#dddddd" }]}
          placeholder="Artist Name"
          value={artist.artist_name}
          editable={false} // Disable editing
        />

        <TextInput
          style={styles.input}
          placeholder="Date of Gig"
          value={dateOfGig}
          onChangeText={setDateOfGig}
        />
        <TextInput
          style={styles.input}
          placeholder="Venue Name"
          value={venueName}
          onChangeText={setVenueName}
        />
        <TextInput
          style={styles.input}
          placeholder="Country Of Venue"
          value={countryOfVenue}
          onChangeText={setCountryOfVenue}
        />
        <TextInput
          style={styles.input}
          placeholder="Select a Genre"
          value={genreOfGig}
          onChangeText={setGenreOfGig}
        />
        <TextInput
          style={styles.input}
          placeholder="Type Of Gig"
          value={typeOfGig}
          onChangeText={setTypeOfGig}
        />
        <TextInput
          style={styles.input}
          placeholder="Payment For Gig"
          value={payment}
          onChangeText={setPayment}
        />
        <TextInput
          style={styles.input}
          placeholder="Reason why you're unable to perform"
          value={description}
          onChangeText={setDescription}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Add this line
    height: 100,
    backgroundColor: "#ffffff",
    paddingTop: 40,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 10,
  },
  backButton: {
    position: "absolute",
    left: 10,
    bottom: 17,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    alignItems: "center",
  },
  formContainer: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    backgroundColor: "white",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default ArtistAdvertiseGig;
