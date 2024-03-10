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

const ArtistProfileSettings = () => {
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
    } else if (artistOrVenue === "V") {
      navigation.navigate("RestrictedPage");
    } else if (userId && artistOrVenue === "A") {
      navigation.navigate("ArtistProfileSettings");
    }
  }, [userId, artistOrVenue, navigation]);

  const goBack = () => {
    navigation.goBack();
  };

  const SERVER_BASE_URL = "http://localhost:8000/";

  const [artist, setArtist] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [editedArtistName, setEditedArtistName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPassword, setEditedPassword] = useState("");
  const [editedPhoneNumber, setEditedPhoneNumber] = useState("");
  const [editedGenre, setEditedGenre] = useState("");
  const [editedCountry, setEditedCountry] = useState("");
  const [editedCounty, setEditedCounty] = useState("");
  const [editedSummary, setEditedSummary] = useState("");
  const [editedBio, setEditedBio] = useState("");

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await fetch(`${SERVER_BASE_URL}artists/${userId}/`);
        const data = await response.json();
        // console.log(data);
        setArtist([data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArtist();
  }, [userId]);

  const handleProfileSaveClick = async () => {
    const formData = new FormData();

    // Append fields only if they have been edited
    if (selectedImage !== null) formData.append("image", selectedImage);
    if (editedArtistName !== "")
      formData.append("artist_name", editedArtistName);
    if (editedEmail !== "" && editedEmail !== artist[0].email)
      formData.append("email", editedEmail);
    if (editedPassword !== "" && editedPassword !== artist[0].password)
      formData.append("password", editedPassword);
    if (
      editedPhoneNumber !== "" &&
      editedPhoneNumber !== artist[0].phone_number
    )
      formData.append("phone_number", editedPhoneNumber);
    if (editedGenre !== "" && editedGenre !== artist[0].genre)
      formData.append("genre", editedGenre);
    if (editedCountry !== "" && editedCountry !== artist[0].country)
      formData.append("country", editedCountry);
    if (editedCounty !== "" && editedCounty !== artist[0].county)
      formData.append("county", editedCounty);
    if (editedSummary !== "" && editedSummary !== artist[0].summary)
      formData.append("summary", editedSummary);
    if (editedBio !== "" && editedBio !== artist[0].bio)
      formData.append("bio", editedBio);

    try {
      const response = await fetch(`${SERVER_BASE_URL}artists/${userId}/`, {
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
        {artist.map((artistData) => (
          <View key={artistData.id} style={styles.container}>
            {/* Profile Picture */}
            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: selectedImage
                    ? selectedImage.uri
                    : SERVER_BASE_URL + artistData.image,
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
              placeholder="Artist/Band Name"
              value={editedArtistName || artistData.artist_name}
              onChangeText={setEditedArtistName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={editedEmail || artistData.email}
              onChangeText={setEditedEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={editedPassword || artistData.password}
              onChangeText={setEditedPassword}
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={editedPhoneNumber || artistData.phone_number}
              onChangeText={setEditedPhoneNumber}
            />
            {/* Genre */}
            <TextInput
              style={styles.input}
              placeholder="Genre"
              value={editedGenre || artistData.genre}
              onChangeText={setEditedGenre}
            />
            {/* Country */}
            <TextInput
              style={styles.input}
              placeholder="Country"
              value={editedCountry || artistData.country}
              onChangeText={setEditedCountry}
            />
            {/* County */}
            <TextInput
              style={styles.input}
              placeholder="County"
              value={editedCounty || artistData.county}
              onChangeText={setEditedCounty}
            />
            {/* Summary */}
            <TextInput
              style={[styles.input, { height: 80 }]}
              placeholder="Summary"
              value={editedSummary || artistData.summary}
              onChangeText={setEditedSummary}
              multiline
            />
            {/* Biography */}
            <TextInput
              style={[styles.input, { height: 250 }]}
              placeholder="Biography"
              value={editedBio || artistData.bio}
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

export default ArtistProfileSettings;
