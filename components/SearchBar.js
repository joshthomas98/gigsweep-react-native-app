import React, { useState, useEffect } from "react";
import { View, TextInput, Text, FlatList, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const SearchBar = () => {
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleSearchInputChange = (text) => {
    setSearchQuery(text);

    if (text.trim() === "") {
      setSuggestions([]);
      setShowSuggestions(false);
    } else {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }

      const timeout = setTimeout(() => {
        fetchSuggestions(text);
      }, 500);

      setTypingTimeout(timeout);
    }
  };

  const fetchSuggestions = async (text) => {
    try {
      const artistResponse = await fetch(
        `http://localhost:8000/artists/search/?q=${text}`
      );
      const artistData = await artistResponse.json();
      const artistSuggestions = artistData.map((artist) => ({
        id: artist.id,
        name: artist.artist_name,
        type: "Artist",
      }));

      const venueResponse = await fetch(
        `http://localhost:8000/venues/search/?q=${text}`
      );
      const venueData = await venueResponse.json();
      const venueSuggestions = venueData.map((venue) => ({
        id: venue.id,
        name: venue.venue_name,
        type: "Venue",
      }));

      const combinedSuggestions = [...artistSuggestions, ...venueSuggestions];

      let filteredSuggestions;
      if (text.trim() === "") {
        filteredSuggestions = [];
      } else {
        filteredSuggestions = combinedSuggestions.filter((profile) =>
          profile.name.toLowerCase().startsWith(text.toLowerCase())
        );

        filteredSuggestions.sort((a, b) => a.name.localeCompare(b.name));
      }

      setSuggestions(filteredSuggestions);
      setShowSuggestions(filteredSuggestions.length > 0);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleProfileClick = (profile) => {
    setShowSuggestions(false);

    const profilePage =
      profile.type === "Artist" ? "ArtistUserProfile" : "VenueUserProfile";
    navigation.navigate(profilePage, { id: profile.id });
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Search for artists and venues"
          style={styles.input}
          value={searchQuery}
          onChangeText={handleSearchInputChange}
          placeholderTextColor="#A9A9A9" // Adjust placeholder text color
        />
      </View>
      {showSuggestions && searchQuery.trim() !== "" && (
        <FlatList
          data={suggestions}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleProfileClick(item)}>
              <View style={styles.suggestionItem}>
                <Text style={styles.suggestionText}>{item.name}</Text>
                <Text style={styles.suggestionType}>{item.type}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    color: "white", // Adjust text color
    backgroundColor: "#242424", // Adjust background color
  },
  suggestionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  suggestionText: {
    color: "white", // Adjust text color
  },
  suggestionType: {
    color: "#A9A9A9", // Adjust text color
  },
});

export default SearchBar;
