import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import LoginContext from "../contexts/LoginContext";

const VenueProfileSettings = () => {
  const { userId, setUserId, artistOrVenue, setArtistOrVenue } =
    useContext(LoginContext);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      if (Constants.platform.ios || Constants.platform.android) {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  useEffect(() => {
    if (!userId || !artistOrVenue) {
      navigation.navigate("SignIn");
    } else if (artistOrVenue === "A") {
      navigation.navigate("RestrictedPage");
    } else if (userId && artistOrVenue === "V") {
      navigation.navigate("VenueProfileSettings");
    }
  }, [userId, artistOrVenue, navigation]);

  const goBack = () => {
    navigation.goBack();
  };

  const SERVER_BASE_URL = "http://localhost:8000/";

  const [venue, setVenue] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [editedVenueName, setEditedVenueName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPassword, setEditedPassword] = useState("");
  const [editedPhoneNumber, setEditedPhoneNumber] = useState("");
  const [editedCountry, setEditedCountry] = useState("");
  const [editedCounty, setEditedCounty] = useState("");
  const [editedBio, setEditedBio] = useState("");

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        const response = await fetch(`${SERVER_BASE_URL}venues/${userId}/`);
        const data = await response.json();
        // console.log(data);
        setVenue([data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVenue();
  }, [userId]);

  const handleProfileSaveClick = async () => {
    const formData = new FormData();

    // Append fields only if they have been edited
    if (selectedImage !== null) formData.append("image", selectedImage);
    if (editedVenueName !== "") formData.append("venue_name", editedVenueName);
    if (editedEmail !== "" && editedEmail !== venue[0].email)
      formData.append("email", editedEmail);
    if (editedPassword !== "" && editedPassword !== venue[0].password)
      formData.append("password", editedPassword);
    if (editedPhoneNumber !== "" && editedPhoneNumber !== venue[0].phone_number)
      formData.append("phone_number", editedPhoneNumber);
    if (editedCountry !== "" && editedCountry !== venue[0].country)
      formData.append("country", editedCountry);
    if (editedCounty !== "" && editedCounty !== venue[0].county)
      formData.append("county", editedCounty);
    if (editedBio !== "" && editedBio !== venue[0].bio)
      formData.append("bio", editedBio);

    try {
      const response = await fetch(`${SERVER_BASE_URL}venues/${userId}/`, {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        navigation.navigate("ProfileSuccessfullyUpdated");
      } else {
        const errorMessage = await response.text(); // Get the error message from the response body
        console.error("Error editing profile:", response.status, errorMessage);
      }
    } catch (error) {
      console.error("Error editing profile:", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Profile Settings</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {venue.map((venueData) => (
          <View key={venueData.id} style={styles.container}>
            {/* Profile Picture */}
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: selectedImage
                    ? selectedImage.uri
                    : SERVER_BASE_URL + venueData.image,
                }}
                style={styles.image}
              />
              <Button
                title="Edit profile picture"
                onPress={async () => {
                  let result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                  });

                  if (!result.cancelled) {
                    setSelectedImage(result);
                  }
                }}
              />
            </View>

            <TextInput
              style={styles.input}
              placeholder="Venue/Band Name"
              value={editedVenueName || venueData.venue_name}
              onChangeText={setEditedVenueName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={editedEmail || venueData.email}
              onChangeText={setEditedEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={editedPassword || venueData.password}
              onChangeText={setEditedPassword}
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={editedPhoneNumber || venueData.phone_number}
              onChangeText={setEditedPhoneNumber}
            />
            {/* Country */}
            <TextInput
              style={styles.input}
              placeholder="Country"
              value={editedCountry || venueData.country}
              onChangeText={setEditedCountry}
            />
            {/* County */}
            <TextInput
              style={styles.input}
              placeholder="County"
              value={editedCounty || venueData.county}
              onChangeText={setEditedCounty}
            />
            {/* Biography */}
            <TextInput
              style={[styles.input, { height: 250 }]}
              placeholder="Biography"
              value={editedBio || venueData.bio}
              onChangeText={setEditedBio}
              multiline
            />

            {/* Save Button */}
            <Button title="Save Profile" onPress={handleProfileSaveClick} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ffffff", // Solid fill header
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 100, // Adjust the height as needed
    paddingTop: Constants.statusBarHeight,
  },
  backButton: {
    position: "absolute",
    left: 10,
    top: 65,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 20,
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default VenueProfileSettings;
