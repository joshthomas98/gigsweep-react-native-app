import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import LoginContext from "../contexts/LoginContext";

const ArtistRegister = () => {
  const { userId, setUserId } = useContext(LoginContext);

  const [artistName, setArtistName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [summary, setSummary] = useState("");
  const [genre, setGenre] = useState("");
  const [country, setCountry] = useState("");
  const [county, setCounty] = useState("");
  const [typeOfArtist, setTypeOfArtist] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [youtube, setYoutube] = useState("");
  const [image, setImage] = useState(null);

  const [showGenrePicker, setShowGenrePicker] = useState(false);
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [showCountyPicker, setShowCountyPicker] = useState(false);
  const [showTypeOfArtistPicker, setShowTypeOfArtistPicker] = useState(false);

  useEffect(() => {
    // Ask for camera roll permission when component mounts
    getPermissionAsync();
  }, []);

  const getPermissionAsync = async () => {
    if (Constants.platform.ios || Constants.platform.android) {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Sorry, we need camera roll permissions to make this work!"
        );
      }
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    // Create a FormData object
    const formData = new FormData();

    // Append the image file to the FormData object
    formData.append("image", {
      uri: image,
      name: "profile.jpg",
      type: "image/jpg",
    });

    // Append other data fields to the FormData object
    formData.append("artist_name", artistName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phone_number", phoneNumber);
    formData.append("bio", bio);
    formData.append("summary", summary);
    formData.append("genre", genre);
    formData.append("country", country);
    formData.append("county", county);
    formData.append("type_of_artist", typeOfArtist);
    formData.append("facebook", facebook);
    formData.append("twitter", twitter);
    formData.append("youtube", youtube);

    // Send the FormData object in the request
    fetch("http://localhost:8000/artists/", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // Handle success
          console.log("User registered successfully");
        }
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 0 }}>
        <Text style={styles.header}>STEP 2 OF 3: Register as an artist</Text>

        <Text style={styles.label}>Artist Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your artist name here"
          value={artistName}
          onChangeText={(text) => setArtistName(text)}
        />

        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email here"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password here"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number here"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />

        <Text style={styles.label}>Bio:</Text>
        <TextInput
          style={styles.input}
          placeholder="Create an artist bio"
          value={bio}
          onChangeText={(text) => setBio(text)}
        />

        <Text style={styles.label}>Summary:</Text>
        <TextInput
          style={styles.input}
          placeholder="Short version of your bio"
          value={summary}
          onChangeText={(text) => setSummary(text)}
        />

        <Text style={styles.label}>Genre:</Text>
        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowGenrePicker(true)}
        >
          <Text style={[styles.label, { marginTop: 9 }]}>
            {genre || "Select a genre"}
          </Text>
        </TouchableOpacity>
        {showGenrePicker && (
          <Picker
            style={styles.picker}
            selectedValue={genre}
            onValueChange={(itemValue) => {
              setGenre(itemValue);
              setShowGenrePicker(false);
            }}
          >
            <Picker.Item label="Select a genre" value="" />
            <Picker.Item label="Rock" value="Rock" />
            <Picker.Item label="Pop" value="Pop" />
            <Picker.Item label="Jazz" value="Jazz" />
            <Picker.Item label="Country" value="Country" />
            <Picker.Item label="Hip Hop" value="Hip Hop" />
            <Picker.Item label="R&B" value="R&B" />
            <Picker.Item label="Electronic" value="Electronic" />
            <Picker.Item label="Classical" value="Classical" />
            <Picker.Item label="Reggae" value="Reggae" />
            <Picker.Item label="Metal" value="Metal" />
            <Picker.Item label="Folk" value="Folk" />
            <Picker.Item label="Blues" value="Blues" />
            <Picker.Item label="World Music" value="World Music" />
          </Picker>
        )}

        <Text style={styles.label}>Country:</Text>
        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowCountryPicker(true)}
        >
          <Text style={[styles.label, { marginTop: 9 }]}>
            {country || "Select a country"}
          </Text>
        </TouchableOpacity>
        {showCountryPicker && (
          <Picker
            style={styles.picker}
            selectedValue={country}
            onValueChange={(itemValue) => {
              setCountry(itemValue);
              setShowCountryPicker(false);
            }}
          >
            <Picker.Item label="England" value="England" />
            <Picker.Item label="Wales" value="Wales" />
            <Picker.Item label="Scotland" value="Scotland" />
            <Picker.Item label="Northern Ireland" value="Northern Ireland" />
          </Picker>
        )}

        {/* Repeat the above pattern for other pickers */}

        <Text style={styles.label}>Facebook:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Facebook link here"
          value={facebook}
          onChangeText={(text) => setFacebook(text)}
        />

        <Text style={styles.label}>Twitter:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Twitter link here"
          value={twitter}
          onChangeText={(text) => setTwitter(text)}
        />

        <Text style={styles.label}>Youtube:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Youtube link here"
          value={youtube}
          onChangeText={(text) => setYoutube(text)}
        />

        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </ScrollView>
      <Button title="Sign up" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  picker: {
    marginBottom: 20,
  },
});

export default ArtistRegister;
