import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from "react-native";
import "./homeStyle.js";
import { homeStyles } from "./homeStyle.js";
import { TouchableOpacity } from "react-native-gesture-handler";

const FitnessCard = ({ image, title, category, link, all }) => {
  const cardStyle = all
    ? homeStyles.home_2.imageCard.card
    : homeStyles.home_2.imageCard.cardAll;

  return (
    <ImageBackground source={image} style={cardStyle}>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Text style={homeStyles.home_2.imageCard.title}>{title}</Text>
        </View>
        <Text style={homeStyles.home_2.imageCard.category}>{category}</Text>

        <TouchableOpacity style={homeStyles.home_2.imageCard.button}>
          <Text style={{ color: "#fff" }}>In work...</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const HomePart2 = ({ person, sampleData }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
    row: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: 100, // Adjust the width as needed
      height: 200, // Adjust the height as needed
      margin: 10,
      backgroundColor: "lightblue",
    },
    text: {
      fontSize: 18,
      fontWeight: "bold",
    },
  });

  const [seeAllTrue, setSeeAllTrue] = useState(false);

  const handleSeeAllClick = () => {
    setSeeAllTrue(!seeAllTrue);
  };

  const workoutsStyle = seeAllTrue
    ? homeStyles.home_2.workoutsStyle.seeAllOn
    : homeStyles.home_2.workoutsStyle.seeAllOff;

  const seeAllTextStyle = seeAllTrue
    ? homeStyles.home_2.seeAllTextOn
    : homeStyles.home_2.seeAllTextOff;
  return (
    <View style={workoutsStyle}>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={homeStyles.home_1.welcome}>Recommended workouts</Text>
        <TouchableOpacity onPress={handleSeeAllClick}>
          <Text style={seeAllTextStyle}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={!seeAllTrue}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {sampleData.cards.map((item, index) => (
          <FitnessCard
            key={index + item.title} // Don't forget to add a unique key prop for each item
            image={item.image}
            title={item.title}
            category={item.category}
            all={!seeAllTrue}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomePart2;
