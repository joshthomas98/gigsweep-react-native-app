import React from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import CustomHeader from "../components/CustomHeader";

const HelpCentre = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Help Center / FAQs" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.content}>
          <View style={[styles.section, { marginTop: 20 }]}>
            <Text style={styles.sectionTitle}>Getting Started</Text>
            <Text style={styles.question}>
              1. How do I create an account on GigSweep?
            </Text>
            <Text style={styles.answer}>
              To create an account on GigSweep, go to the Sign Up page and fill
              in the required information, including your email address and
              password. Once submitted, you'll receive a confirmation email to
              activate your account.
            </Text>
            <Text style={styles.question}>
              2. Can I use GigSweep without creating an account?
            </Text>
            <Text style={styles.answer}>
              No, GigSweep requires users to create an account in order to
              access its features and functionalities. This helps us provide a
              personalized experience and ensures security for all users.
            </Text>
            {/* Add more questions related to getting started */}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Artist Profiles</Text>
            <Text style={styles.question}>
              1. How do I create my artist profile?
            </Text>
            <Text style={styles.answer}>
              To create your artist profile, navigate to the profile section and
              click on "Create Profile". Fill in the required details such as
              your artist name, location, genre, and profile picture.
            </Text>
            <Text style={styles.question}>
              2. Can I showcase my upcoming gigs on my profile?
            </Text>
            <Text style={styles.answer}>
              Yes, you can showcase your upcoming gigs on your profile. Simply
              add the gig details including the date, venue, and any relevant
              information.
            </Text>
            {/* Add more questions related to artist profiles */}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Applying for Gigs</Text>
            <Text style={styles.question}>
              1. How can I apply for gigs listed by other artists or venues?
            </Text>
            <Text style={styles.answer}>
              To apply for gigs, go to the gigs section and browse through the
              listings. When you find a gig you're interested in, click on
              "Apply" and follow the instructions to submit your application.
            </Text>
            <Text style={styles.question}>
              2. Can I withdraw my application for a gig?
            </Text>
            <Text style={styles.answer}>
              Yes, you can withdraw your application for a gig. Simply go to
              your applications section, find the gig you applied for, and
              select the option to withdraw your application.
            </Text>
            {/* Add more questions related to applying for gigs */}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Reviews and Ratings</Text>
            <Text style={styles.question}>
              1. How do I leave a review for a venue or artist?
            </Text>
            <Text style={styles.answer}>
              To leave a review, go to the profile of the venue or artist you
              want to review and find the option to leave a review. Provide your
              feedback and rating based on your experience.
            </Text>
            <Text style={styles.question}>
              2. Can I edit or delete my reviews?
            </Text>
            <Text style={styles.answer}>
              Yes, you can edit or delete your reviews. Simply go to your
              profile, navigate to the reviews section, and select the review
              you want to modify or remove.
            </Text>
            {/* Add more questions related to reviews and ratings */}
          </View>

          {/* Additional sections and questions/answers */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Light gray background
  },
  contentContainer: {
    flexGrow: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    marginTop: 20,
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#fff", // White background for each section
    borderRadius: 10, // Rounded corners
    padding: 15, // Add some padding
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333", // Darker text color
  },
  question: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#555", // Medium text color
  },
  answer: {
    fontSize: 16,
    marginBottom: 10,
    color: "#666", // Lighter text color
  },
});

export default HelpCentre;
