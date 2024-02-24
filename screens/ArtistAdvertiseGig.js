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

const ArtistAdvertiseGig = () => {
  const { userId, artistOrVenue } = useContext(LoginContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (!userId || !artistOrVenue) {
      navigation.navigate("SignIn");
    } else if (userId && artistOrVenue === "V") {
      navigation.navigate("RestrictedPage");
    }
  }, [userId, artistOrVenue, navigation]);

  const [artistName, setArtistName] = useState("");
  const [dateOfGig, setDateOfGig] = useState("");
  const [venueName, setVenueName] = useState("");
  const [countryOfVenue, setCountryOfVenue] = useState("");
  const [genreOfGig, setGenreOfGig] = useState("");
  const [typeOfGig, setTypeOfGig] = useState("");
  const [payment, setPayment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // convert dateOfGig to a Date object
    const dateObj = new Date(dateOfGig);

    // extract only the date portion
    const date = dateObj.toISOString().slice(0, 10);

    const data = {
      artist: fetchedArtistDetails ? fetchedArtistDetails.id : "", // Include the fetched artist name
      date_of_gig: date,
      venue_name: venueName,
      country_of_venue: countryOfVenue,
      genre_of_gig: genreOfGig,
      type_of_gig: typeOfGig,
      type_of_artist: fetchedArtistDetails
        ? fetchedArtistDetails.type_of_artist
        : "",
      payment: payment,
      user_type: artistOrVenue === "A" ? "Artist" : "",
    };

    fetch("http://localhost:8000/artist_listed_gigs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          navigate("/gigadvertised");
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
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Advertise Your Gig</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Artist Name"
          value={artistName}
          onChangeText={setArtistName}
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
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default ArtistAdvertiseGig;
