import React, { useEffect, useState } from "react";
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
import CountyData from "../components/CountyData";

const VenueRegister = () => {
  const [venueName, setVenueName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [country, setCountry] = useState("");
  const [county, setCounty] = useState("");
  const [typeOfAct, setTypeOfAct] = useState(null);
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [youtube, setYoutube] = useState("");
  const [image, setImage] = useState(null);

  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [showCountyPicker, setShowCountyPicker] = useState(false);
  const [showTypeOfActPicker, setShowTypeOfActPicker] = useState(false);

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
    console.log("Venue Name:", venueName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Phone Number:", phoneNumber);
    console.log("Bio:", bio);
    console.log("Country:", country);
    console.log("County:", county);
    console.log("Type of Act:", typeOfAct);
    console.log("Facebook:", facebook);
    console.log("Twitter:", twitter);
    console.log("Youtube:", youtube);

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
    formData.append("venue_name", venueName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phone_number", phoneNumber);
    formData.append("bio", bio);
    formData.append("country", country);
    formData.append("county", county);
    formData.append("type_of_act", typeOfAct);
    formData.append("facebook", facebook);
    formData.append("twitter", twitter);
    formData.append("youtube", youtube);

    // Send the FormData object in the request
    fetch("http://localhost:8000/venues/", {
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

  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
    setCounty(""); // Reset county when country changes
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 0 }}>
        <Text style={styles.header}>STEP 2 OF 3: Register as a venue</Text>

        <Text style={styles.label}>Venue Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your venue name here"
          value={venueName}
          onChangeText={(text) => setVenueName(text)}
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
          placeholder="Create a venue bio"
          value={bio}
          onChangeText={(text) => setBio(text)}
        />

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

        <Text style={styles.label}>Type of Act:</Text>
        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowTypeOfActPicker(true)}
        >
          <Text style={[styles.label, { marginTop: 9 }]}>
            {typeOfAct || "What type of act do you have at your venue?"}
          </Text>
        </TouchableOpacity>
        {showTypeOfActPicker && (
          <Picker
            style={styles.picker}
            selectedValue={typeOfAct}
            onValueChange={(itemValue) => {
              setTypeOfAct(itemValue);
              setShowTypeOfActPicker(false);
            }}
          >
            <Picker.Item label="Select a type of act" value="" />
            <Picker.Item label="Original Music" value="Original Music" />
            <Picker.Item label="Covers" value="Covers" />
            <Picker.Item label="Both" value="Both" />
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

export default VenueRegister;
