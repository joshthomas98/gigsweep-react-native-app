import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

const MembershipPlans = () => {
  const [membershipOptions, setMembershipOptions] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);

  useEffect(() => {
    const fetchMembershipOptions = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/membershipoptions/"
        );
        const data = await response.json();
        setMembershipOptions(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMembershipOptions();
  }, []);

  const handleClick = (buttonId) => {
    setSelectedButton(buttonId);
    // Handle navigation based on buttonId
  };

  const renderButton = (membership) => {
    const isSelected = selectedButton === membership.id;

    return (
      <TouchableOpacity
        style={{
          marginVertical: 10,
          padding: 10,
          backgroundColor: isSelected ? "lightblue" : "white",
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "gray",
        }}
        onPress={() => handleClick(membership.id)}
        disabled={isSelected}
        key={membership.id}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          {isSelected ? "Selected" : "Select"}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
          STEP 1 OF 3: Select your membership type
        </Text>
        <Text style={{ fontSize: 18, marginBottom: 20 }}>
          See our different membership options
        </Text>
        {membershipOptions.map((membership) => (
          <View key={membership.id}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
            >
              {membership.type_of_user}
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>
              {membership.title}
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>
              {membership.id === 1 || membership.id === 2
                ? "GigSweep Standard benefits:"
                : membership.id === 3 || membership.id === 4
                ? "GigSweep Pro benefits:"
                : "Invalid membership option"}
            </Text>
            <Text>{membership.description}</Text>
            <Text style={{ fontSize: 18, marginTop: 10 }}>
              {membership.price}
            </Text>
            <Text>{membership.disclosure}</Text>
            {renderButton(membership)}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default MembershipPlans;
