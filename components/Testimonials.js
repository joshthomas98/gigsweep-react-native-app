import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

const Testimonials = () => {
  return (
    <View style={[styles.container, { backgroundColor: "#121212" }]}>
      <Text style={[styles.heading, { color: "#fff" }]}>Testimonials</Text>
      <Text style={[styles.subheading, { color: "#fff" }]}>
        We think you'll love GigSweep, but don't just take our word for it. See
        what our users have to say about our service.
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.card}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/11.jpg" }}
            style={styles.image}
          />
          <Text style={[styles.name, { color: "#fff" }]}>Jake</Text>
          <Text style={[styles.text, { color: "#fff" }]}>
            "GigSweep is a lifesaver! I had a gig cancellation, but within
            hours, I found a replacement by picking up a gig from another artist
            and had a great night. Thank you, GigSweep!" - Jake, Musician
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/11.jpg" }}
            style={styles.image}
          />
          <Text style={[styles.name, { color: "#fff" }]}>Sarah</Text>
          <Text style={[styles.text, { color: "#fff" }]}>
            "As a busy venue manager, GigSweep simplified my life. I easily
            discovered talented bands with availability on specific dates,
            helping me book fantastic acts for my venue." - Sarah, Venue Manager
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/12.jpg" }}
            style={styles.image}
          />
          <Text style={[styles.name, { color: "#fff" }]}>Alex</Text>
          <Text style={[styles.text, { color: "#fff" }]}>
            "GigSweep revolutionized my gig hunting! I discovered incredible
            opportunities and connected with gigs I wouldn't have found
            elsewhere. This platform is a true game-changer for musicians like
            me." - Alex G, Musician
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/12.jpg" }}
            style={styles.image}
          />
          <Text style={[styles.name, { color: "#fff" }]}>Emily</Text>
          <Text style={[styles.text, { color: "#fff" }]}>
            "GigSweep keeps me in the loop with my favorite bands' upcoming
            shows. It's my go-to platform for finding when and where they're
            playing in my local area. Highly recommended!" - Emily S, Music Fan
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subheading: {
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#252525", // Slightly lighter shade than the background
    borderRadius: 10,
    padding: 20,
    margin: 10,
    width: 300,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    alignSelf: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  text: {
    textAlign: "center",
  },
});

export default Testimonials;
