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
import DateTimePickerModal from "react-native-modal-datetime-picker";

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
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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

  const handleConfirm = (selectedDate) => {
    setDatePickerVisibility(false);
    if (selectedDate) {
      setDateOfGig(selectedDate.toISOString().slice(0, 10));
    }
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
        <Text style={styles.advertiseGigInfoText}>
          Fill in the form below to advertise a gig which you can no longer
          play. Your gig advert will be listed and other artists will be able to
          pick it up instead or contact you about it.
        </Text>

        <TextInput
          style={[styles.input, { backgroundColor: "#dddddd" }]}
          placeholder="Artist Name"
          value={artist.artist_name}
          editable={false}
        />

        <TouchableOpacity
          onPress={() => setDatePickerVisibility(true)}
          style={styles.dateInput}
        >
          <Text style={dateOfGig ? styles.dateText : styles.placeholderText}>
            {dateOfGig || "Select Date of Gig"}
          </Text>
        </TouchableOpacity>

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
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => setDatePickerVisibility(false)}
      />
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
    justifyContent: "center",
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
  advertiseGigInfoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginTop: 5,
    marginBottom: 30,
    textAlign: "center",
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
  dateInput: {
    height: 40,
    width: 353,
    borderColor: "gray",
    backgroundColor: "white",
    borderWidth: 1,
    paddingTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  dateText: {
    color: "black",
  },
  placeholderText: {
    color: "#CCCCCC",
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default ArtistAdvertiseGig;
