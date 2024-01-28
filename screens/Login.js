import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import IncorrectLoginModal from "../components/IncorrectLoginModal";
import { useNavigation } from "@react-navigation/native";
import LoginContext from "../LoginContext";

const Login = () => {
  const { userId, setUserId, artistOrVenue, setArtistOrVenue } =
    useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleLogin = () => {
    const url =
      artistOrVenue === "A"
        ? "http://localhost:8000/artists/validate/"
        : "http://localhost:8000/venues/validate/";
    if (!artistOrVenue) {
      // If artistOrVenue is not yet defined, return or handle the case accordingly
      return;
    }
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid credentials");
        }
        return response.json();
      })
      .then((data) => {
        setUserId(data.id);
        setArtistOrVenue(artistOrVenue);

        if (data.id != null) {
          if (artistOrVenue === "A") {
            navigation.navigate("Main", { screen: "Home" }); // Navigate to Home screen in MainStack
          } else if (artistOrVenue === "V") {
            navigation.navigate("Main", { screen: "Home" });
          }
        } else {
          handleShowModal();
        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
        handleShowModal();
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

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
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

export default Login;
