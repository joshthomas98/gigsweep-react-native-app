import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import IncorrectLoginModal from "../components/IncorrectLoginModal";
import { LoginContext } from "../App";

const SignIn = () => {
  const { userId, setUserId, artistOrVenue, setArtistOrVenue } =
    useContext(LoginContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleSignIn = () => {
    const url =
      artistOrVenue === "A"
        ? "http://localhost:8000/artists/validate/"
        : "http://localhost:8000/venues/validate/";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          // Handle server errors (e.g., 404)
          throw new Error("Invalid credentials");
        }
        return response.json();
      })
      .then((data) => {
        setUserId(data.id);
        setArtistOrVenue(artistOrVenue);
        console.log("User ID:", data.id);
        console.log("Artist or Venue:", artistOrVenue);

        if (data.id != null) {
          if (artistOrVenue === "A") {
            // Navigate logic for React Navigation or any navigation library you use in React Native
          } else if (artistOrVenue === "V") {
            // Navigate logic for React Navigation or any navigation library you use in React Native
          }
        } else {
          handleShowModal(); // Show modal for incorrect login
        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
        handleShowModal(); // Show modal for incorrect login
      });
  };

  const handleUserTypeChange = (value) => {
    setArtistOrVenue(value);
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          {/* Large icon */}
          <Ionicons
            name="person"
            size={64}
            color="#333"
            style={{ marginBottom: 10 }}
          />
        </View>

        <View>
          <Text style={styles.title}>LOG IN TO YOUR ACCOUNT</Text>

          <View style={styles.form}>
            <TextInput
              placeholder="Enter your email here"
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              placeholder="Enter your password here"
              style={styles.input}
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />

            <View style={styles.radioGroup}>
              <TouchableOpacity
                style={[
                  styles.radioButton,
                  artistOrVenue === "A" && styles.selected,
                ]}
                onPress={() => handleUserTypeChange("A")}
              >
                <Text>Artist</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.radioButton,
                  artistOrVenue === "V" && styles.selected,
                ]}
                onPress={() => handleUserTypeChange("V")}
              >
                <Text> Venue</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            {showModal && (
              <IncorrectLoginModal
                show={showModal}
                handleClose={handleCloseModal}
              />
            )}
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text>New to GigSweep?</Text>

          <TouchableOpacity style={styles.createNewAccountButton}>
            <Text style={styles.createNewAccountButtonText}>
              Create New Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  radioGroup: {
    flexDirection: "row",
    marginBottom: 10,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  selected: {
    backgroundColor: "lightblue",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  createNewAccountButton: {
    backgroundColor: "#FFFFFF", // Change color to light
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30, // Make it round
    marginTop: 20,
  },
  createNewAccountButtonText: {
    color: "#007AFF", // Change color to match login button
    fontSize: 18,
    textAlign: "center",
  },
};

export default SignIn;
