import React, { useEffect, useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import LoginContext from "../contexts/LoginContext";

const MyGigsScreen = ({ navigation }) => {
  const { userId, artistOrVenue } = useContext(LoginContext);

  const SERVER_BASE_URL = "http://localhost:8000/";

  const profileId = userId;

  const [activeGigs, setActiveGigs] = useState([]);
  const [transferredGigs, setTransferredGigs] = useState([]);
  const [pastGigs, setPastGigs] = useState([]);
  const [selectedTab, setSelectedTab] = useState("Active");

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const response = await fetch(
          `${SERVER_BASE_URL}artists/${profileId}/listed_gigs/`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch gig data");
        }
        const data = await response.json();
        // Filter fetched gigs based on their status
        const active = data.filter((gig) => gig.status.includes("Active"));
        const transferred = data.filter((gig) =>
          gig.status.includes("Transferred")
        );
        const past = data.filter((gig) => gig.status.includes("Past"));
        // Update state variables with filtered gigs
        setActiveGigs(active);
        setTransferredGigs(transferred);
        setPastGigs(past);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGigs();
  }, [profileId, SERVER_BASE_URL, selectedTab]);

  const renderGigs = (gigs) => {
    let tabDescription = "";
    switch (selectedTab) {
      case "Active":
        tabDescription =
          "These are gigs advertised by you for others to pick up that have not been transferred yet and are still active.";
        break;
      case "Transferred":
        tabDescription =
          "These are gigs that have been transferred to other users.";
        break;
      case "Past":
        tabDescription =
          "These are gigs that have already been completed or cancelled.";
        break;
      default:
        tabDescription = "";
    }

    return (
      <FlatList
        data={gigs}
        renderItem={({ item, index }) => (
          <View style={styles.gigItem}>
            {index === 0 && (
              <Text style={styles.activeTabAbout}>{tabDescription}</Text>
            )}
            <Text
              style={styles.gigTitle}
            >{`${item.date_of_gig} - ${item.venue_name} - £${item.payment}`}</Text>
            <Text style={styles.gigDetails}>{getGigDetails(item)}</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.gigItem}>
            <Text style={styles.activeTabAbout}>
              There are no gigs of this type to show.
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  };

  const getGigDetails = (gig) => {
    switch (selectedTab) {
      case "Active":
        return gig.activeDetails || "";
      case "Transferred":
        return gig.transferredDetails || "";
      case "Past":
        return gig.pastDetails || "";
      default:
        return "";
    }
  };

  const getTitle = () => {
    switch (selectedTab) {
      case "Active":
        return "Active";
      case "Transferred":
        return "Transferred";
      case "Past":
        return "Past";
      default:
        return "";
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "Active" && styles.activeTab]}
          onPress={() => setSelectedTab("Active")}
        >
          <Text style={styles.tabText}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === "Transferred" && styles.activeTab,
          ]}
          onPress={() => setSelectedTab("Transferred")}
        >
          <Text style={styles.tabText}>Transferred</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "Past" && styles.activeTab]}
          onPress={() => setSelectedTab("Past")}
        >
          <Text style={styles.tabText}>Past</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{getTitle()}</Text>
      {selectedTab === "Active" && renderGigs(activeGigs)}
      {selectedTab === "Transferred" && renderGigs(transferredGigs)}
      {selectedTab === "Past" && renderGigs(pastGigs)}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 10,
    marginBottom: 10,
  },
  tab: {
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#007AFF",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  gigItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  gigTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginTop: 15,
    marginBottom: 5,
    textAlign: "center",
  },
  gigDetails: {
    color: "white",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    color: "white",
  },
  activeTabAbout: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 45,
    textAlign: "center",
  },
});

export default MyGigsScreen;
