import React from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";

const Search = () => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Search</Text>
      <SearchBar />
    </View>
  );
};

export default Search;
