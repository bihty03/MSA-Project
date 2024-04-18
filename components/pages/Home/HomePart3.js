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
import CaloriesIconSmall from "../../icons/caloriesIconSmall.js";
import TimeSmallIcon from "../../icons/timeSmallIcon.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useExerciseContext } from "../../context/exerciseContext.js";

const WorkoutCard = ({ image, name, kcal, time, item, navigation }) => {
  const cardStyle = homeStyles.home_3.workoutCard.card;

  const { setExerciseData, exerciseData } = useExerciseContext();

  const handleExercise = (exercise) => {
    setExerciseData(exercise);
    navigation.navigate("ExercisePreviewHome");
  };

  return (
    <TouchableOpacity onPress={() => handleExercise(item)}>
      <ImageBackground
        source={{
          uri: `https://shape-mentor-prod.fra1.digitaloceanspaces.com/ex-photo/${image}.jpg`,
        }}
        style={[cardStyle, { justifyContent: "flex-end" }]}
      >
        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "flex-end",
            }}
          >
            <Text style={homeStyles.home_3.workoutCard.title}>{name}</Text>
          </View>
          <View style={homeStyles.home_3.workoutCard.secondaryTextPart}>
            <View style={homeStyles.home_3.workoutCard.secondaryTextPartDiv}>
              <Text style={homeStyles.home_3.workoutCard.secondaryTextPartText}>
                <CaloriesIconSmall /> {kcal} kcal
              </Text>
            </View>
            <View style={homeStyles.home_3.workoutCard.secondaryTextPartDiv}>
              <Text style={homeStyles.home_3.workoutCard.secondaryTextPartText}>
                <TimeSmallIcon /> {time} min
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const CategoryCard = ({ category, selectedCategory, setSelectedCategory }) => {
  const cardStyle =
    selectedCategory === category
      ? homeStyles.home_3.categoryCard.selected
      : homeStyles.home_3.categoryCard.notSelected;

  const textStyle =
    selectedCategory === category
      ? homeStyles.home_3.categoryCard.selectedText
      : homeStyles.home_3.categoryCard.notSelectedText;

  return (
    <TouchableOpacity
      style={cardStyle}
      onPress={() => setSelectedCategory(category)}
    >
      <Text style={textStyle}>{category}</Text>
    </TouchableOpacity>
  );
};

const HomePart2 = ({ person, sampleData, navigation }) => {
  const [exercisesList, setExercisesList] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All type");

  useEffect(() => {
    fetch(
      "https://jellyfish-app-2-7736b.ondigitalocean.app/api/workouts/exercises",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setExercisesList(data); // Assuming the data is the array of workouts
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  const categories = [
    "All type",
    "Abs",
    "Arms",
    "Back",
    "Chest",
    "Legs",
    "Shoulders",
  ];

  let filteredItems = exercisesList;

  if (selectedCategory !== "All type") {
    filteredItems = exercisesList.filter(
      (item) => item.category === selectedCategory
    );
  } else {
    filteredItems = exercisesList;
  }

  const workoutsStyle = homeStyles.home_2.workoutsStyle.seeAllOff;

  const seeAllTextStyle = homeStyles.home_2.seeAllTextOff;
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
        <Text style={homeStyles.home_1.welcome}>Choose your exercise</Text>
        {/* <TouchableOpacity>
          <Text style={seeAllTextStyle}>Select type</Text>
        </TouchableOpacity> */}
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {categories.map((item) => (
          <CategoryCard
            key={item} // Don't forget to add a unique key prop for each item
            category={item}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        ))}
      </ScrollView>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 24 }}
      >
        {filteredItems.map((item, index) => (
          <WorkoutCard
            key={item.index} // Don't forget to add a unique key prop for each item
            image={item.photo}
            name={item.exercise}
            kcal={item.kcal}
            time={item.time}
            item={item}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomePart2;
