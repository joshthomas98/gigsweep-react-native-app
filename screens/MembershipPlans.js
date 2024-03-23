import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MembershipPlans = () => {
  const navigation = useNavigation();
  const [selectedButton, setSelectedButton] = useState(null);

  // Hard-coded membership options
  const membershipOptions = [
    {
      id: 1,
      type_of_user: "Artist",
      title: "Standard",
      description:
        "Advertise unplayable gigs for other artists to pick up\nSearch and apply for gigs based on your criteria\nPromote music, connect with other artists\nSee reviews of venues before you agree to play\nManage gig records and prevent double booking\nTime-saving booking process",
      price: "Price: FREE",
      disclosure:
        "No contracts, no commitments, cancel at anytime. Membership is in the form of a rolling monthly subscription.",
    },
    {
      id: 2,
      type_of_user: "Venue",
      title: "Standard",
      description:
        "List gigs and let artists apply to play.\nDiscover local and national talent easily.\nContact artists and notify fans of upcoming gigs.\nProvide feedback on artists you've had perform\nRecord keeping system to prevent double booking\nTime-saving booking process",
      price: "Price: FREE",
      disclosure:
        "No contracts, no commitments, cancel at anytime. Membership is in the form of a rolling monthly subscription.",
    },
    {
      id: 3,
      type_of_user: "Artist",
      title: "Pro",
      description:
        "Early email notifications for new gigs.\nIncreased homepage exposure as a featured artist.\nVerified bluetick for credibility and more visits.\nImproved chances of getting booked\nIncreased exposure for your music",
      price: "Price: £4.49 per month",
      disclosure:
        "No contracts, no commitments, cancel at anytime. Membership is in the form of a rolling monthly subscription.",
    },
    {
      id: 4,
      type_of_user: "Venue",
      title: "Pro",
      description:
        "Email notifications about local artists and availability.\nPriority placement in artist search results.\nVerified bluetick for credibility and more visits.\nRecommendations of artists you may want to book.\nIncreased exposure for your venue",
      price: "Price: £7.49 per month",
      disclosure:
        "No contracts, no commitments, cancel at anytime. Membership is in the form of a rolling monthly subscription.",
    },
  ];

  const handleClick = (buttonId) => {
    setSelectedButton(buttonId);

    // Determine the screen to navigate based on buttonId
    if (buttonId === 1 || buttonId === 3) {
      navigation.navigate("ArtistRegister", { membershipPlanId: buttonId });
    } else if (buttonId === 2 || buttonId === 4) {
      navigation.navigate("VenueRegister", { membershipPlanId: buttonId });
    }
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          padding: 20,
          marginTop: 40,
          paddingBottom: 40,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
          STEP 1 OF 3: Select your membership type
        </Text>
        <Text style={{ fontSize: 18, marginBottom: 20 }}>
          See our different membership options:
        </Text>
        {membershipOptions.map((membership, index) => (
          <View key={membership.id}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              {membership.type_of_user} {membership.title}
            </Text>
            <Text style={{ fontSize: 18 }}>
              {membership.description.split("\n").map((item, key) => (
                <Text key={key}>
                  {item}
                  {"\n\n"}
                </Text> // Add an extra line of space between lines
              ))}
            </Text>
            <Text style={{ fontSize: 18, marginBottom: 15 }}>
              {membership.price}
            </Text>
            <Text style={{ marginBottom: 10 }}>{membership.disclosure}</Text>
            {renderButton(membership)}
            {index !== membershipOptions.length - 1 && (
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: "lightgray",
                  marginVertical: 20,
                }}
              />
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MembershipPlans;
