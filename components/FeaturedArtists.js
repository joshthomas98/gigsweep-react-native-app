import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Linking,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const FeaturedArtists = () => {
  const [featuredArtists, setFeaturedArtists] = useState([]);

  const SERVER_BASE_URL = "http://localhost:8000";

  useEffect(() => {
    const fetchFeaturedArtists = async () => {
      try {
        const response = await fetch("http://localhost:8000/featuredartists/");
        const data = await response.json();
        setFeaturedArtists(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFeaturedArtists();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Featured Artists</Text>
      <View style={styles.cardsContainer}>
        {featuredArtists.map((artist, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.artistInfo}>
              <Image
                source={{ uri: SERVER_BASE_URL + artist.image }}
                style={styles.artistImage}
              />
              <Text style={styles.artistName}>{artist.artist_name}</Text>
              <Text style={styles.artistDetails}>
                Active | Band | Formed: 10.01.2015
              </Text>
            </View>
            <Text style={styles.summary}>{artist.summary}</Text>
            <View style={styles.socialLinks}>
              <TouchableOpacity
                onPress={() => Linking.openURL(artist.facebook)}
                style={styles.link}
              >
                <FontAwesome name="facebook" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Linking.openURL(artist.twitter)}
                style={styles.link}
              >
                <FontAwesome name="twitter" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Linking.openURL(artist.youtube)}
                style={styles.link}
              >
                <FontAwesome name="youtube" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff", // White text color
    marginBottom: 20,
    textAlign: "center",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#252525", // Slightly lighter shade than the background
    borderRadius: 10,
    padding: 20,
    margin: 10,
    width: "90%", // Adjust as needed
    alignItems: "center",
  },
  artistInfo: {
    alignItems: "center",
  },
  artistImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  artistName: {
    fontWeight: "bold",
    color: "#fff", // White text color
  },
  artistDetails: {
    color: "grey",
    marginBottom: 10,
  },
  summary: {
    color: "#fff", // White text color
    marginBottom: 10,
    textAlign: "center",
  },
  socialLinks: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  link: {
    marginHorizontal: 10,
  },
});

export default FeaturedArtists;
