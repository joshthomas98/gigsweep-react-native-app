import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import CountyData from "../components/CountyData";

const ArtistRegister = ({ navigation, route }) => {
  const membershipPlanId = route.params?.membershipPlanId;

  const goToUserCreated = () => {
    navigation.navigate("UserCreated");
  };

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
  const [userType, setUserType] = useState("Artist");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [youtube, setYoutube] = useState("");

  const [showGenrePicker, setShowGenrePicker] = useState(false);
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [showCountyPicker, setShowCountyPicker] = useState(false);
  const [showTypeOfArtistPicker, setShowTypeOfArtistPicker] = useState(false);

  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
    setCounty(""); // Reset county when country changes
  };

  // Handle form submission
  const handleSubmit = () => {
    // Create a FormData object
    const formData = new FormData();

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
    formData.append("user_type", userType);
    formData.append("facebook", facebook);
    formData.append("twitter", twitter);
    formData.append("youtube", youtube);
    formData.append("artist_membership_type", membershipPlanId);

    // Send the FormData object in the request
    fetch("http://localhost:8000/artists/", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("User registered successfully");
          goToUserCreated();
        } else {
          console.error("Error registering user:", response.status);
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
              handleCountryChange(itemValue);
              setShowCountryPicker(false);
            }}
          >
            <Picker.Item label="Select a country" value="" />
            <Picker.Item label="England" value="England" />
            <Picker.Item label="Wales" value="Wales" />
            <Picker.Item label="Scotland" value="Scotland" />
            <Picker.Item label="Northern Ireland" value="Northern Ireland" />
          </Picker>
        )}

        <Text style={styles.label}>County:</Text>
        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowCountyPicker(true)}
        >
          <Text style={[styles.label, { marginTop: 9 }]}>
            {county || "Select a county"}
          </Text>
        </TouchableOpacity>
        {showCountyPicker && (
          <Picker
            style={styles.picker}
            selectedValue={county}
            onValueChange={(itemValue) => {
              setCounty(itemValue);
              setShowCountyPicker(false);
            }}
          >
            {/* Map over CountyData for selected country here */}
            {CountyData[country]?.map((countyName, index) => (
              <Picker.Item key={index} label={countyName} value={countyName} />
            ))}
          </Picker>
        )}

        <Text style={styles.label}>Type of Artist:</Text>
        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowTypeOfArtistPicker(true)}
        >
          <Text style={[styles.label, { marginTop: 9 }]}>
            {typeOfArtist || "Select type of artist"}
          </Text>
        </TouchableOpacity>
        {showTypeOfArtistPicker && (
          <Picker
            style={styles.picker}
            selectedValue={typeOfArtist}
            onValueChange={(itemValue) => {
              setTypeOfArtist(itemValue);
              setShowTypeOfArtistPicker(false);
            }}
          >
            <Picker.Item label="Select artist type:" value="" />
            <Picker.Item label="Full band" value="Full band" />
            <Picker.Item label="Solo artist" value="Solo artist" />
            <Picker.Item label="Duo" value="Duo" />
          </Picker>
        )}

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
  picker: {
    marginBottom: 20,
  },
});

export default ArtistRegister;
