import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import playButton from "../../public/playButton.png";
import timeClock from "../../public/timeClock.png";
import HomePart1 from "../Home/HomePart1.js";
import { workoutsStyle } from "../trainers/workoutsStyle.js";
import { ImageBackground } from "react-native";
import back from "../../public/back.png";
import chest from "../../public/chest.png";
import PlayButton from "../../icons/playButton.js";
import { ScrollView } from "react-native-gesture-handler";
import { useExerciseContext } from "../../context/exerciseContext.js";
import { useAuth } from "../../context/loginContext.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import ConditionalSafeAreaView from "../../utils/SafeViewCustom.js";

import { useCategoryContext } from "../../context/categoryContext.js";

// exercise ii un object ce are {
//     image: ...
//     status: ...
//     name: ...
//     time: ...
// }

const exercise = [
  {
    image: back,
    status: "Uncompleted",
    name: "BenchPress",
    foto: "BenchPress",
    time: 30,
  },
  {
    image: undefined,
    status: "Uncompleted",
    name: "Dumbbell Flyes",
    foto: "BenchPress",

    time: 30,
  },
  {
    image: undefined,
    status: "Uncompleted",
    name: "Bench Press",
    foto: "BenchPress",

    time: 30,
  },
  {
    image: undefined,
    status: "Uncompleted",
    name: "Decline Press",
    foto: "BenchPress",
    time: 30,
  },
];

const trainers = [
  {
    image: back,
    status: "Uncompleted",
    name: "Alexandru",
    foto: "BenchPress",
    price: 30,
    rating: 3
  },
  {
    image: undefined,
    status: "Uncompleted",
    name: "Claudiu",
    foto: "BenchPress",
    rating: 4,
    price: 30,
  },
  {
    image: undefined,
    status: "Uncompleted",
    name: "Radu",
    foto: "BenchPress",
    rating: 4.5,
    price: 30,
  },
  {
    image: undefined,
    status: "Uncompleted",
    name: "Silviu",
    foto: "BenchPress",
    rating: 4,
    price: 30,
  },
];

const WorkoutCard = ({ exercise, navigation }) => {
  const { userData } = useAuth();
  const { setExerciseData } = useExerciseContext();
  const handleExercise = (exercise) => {
    setExerciseData(exercise);
    navigation.navigate("TrainerPreview");
  };

  return (
    <View
      style={{
        backgroundColor: "#24262b",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#37383C",
        marginTop: 24,
        height: 108,
        marginRight: 24,
        marginLeft: 24,
        padding: 14,
        flexDirection: "row",
      }}
    >
      <View>
        <Image
          source={{
            uri: `https://shape-mentor-prod.fra1.digitaloceanspaces.com/ex-photo/${exercise.photo}.jpg`,
          }}
          style={workoutsStyle?.card_image}
        />
      </View>

      <View style={{ marginLeft: 24, top: -10 }}>
        <Text style={workoutsStyle.exText2}>
          {exercise.name}
        </Text>
        <Text style={workoutsStyle.exText1}>Rating {exercise.rating}/5 </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={workoutsStyle.exText3}>Price {exercise.price} Lei</Text>
        </View>
      </View>

      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}
      >
        {/* // adaugat row cu time/ kcal-total/ 4x10 sets, vezi pe wapp cu ionut */}
        <TouchableOpacity
          style={workoutsStyle.playButton}
          onPress={() => handleExercise(exercise)}
        >
          <PlayButton />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const WorkoutsExerciseList = ({ navigation }) => {
  const { categoryData } = useCategoryContext();

  const [exercisesList, setExercisesList] = React.useState([]);

  const sentData = {
    randomCategory: 'Cardio',
  };

  useEffect(() => {
    fetch(
      "http://localhost:5050/api/workouts/randomizer",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sentData),
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

  const person = {
    name: "Guest",
    daysOfWeek: [
      { name: "Sun", size: 24 },
      { name: "Mon", size: 35 },
      { name: "Tue", size: 47 },
      { name: "Wed", size: 15 },
      { name: "Thu", size: 31 },
      { name: "Fri", size: 35 },
      { name: "Sat", size: 20 },
    ],
  };

  return (
    <ConditionalSafeAreaView>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#111214",
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {/* <HomePart1 person={person} /> */}

        <Text style={workoutsStyle.text}>Available Trainers</Text>
        <View style={{ marginBottom: 24 }} key={exercisesList}>
          {trainers.map((exercise) => (
            <WorkoutCard
              key={exercise.exercise + exercise.subCategory}
              exercise={exercise}
              navigation={navigation}
            />
          ))}
        </View>
      </ScrollView>
    </ConditionalSafeAreaView>
  );
};

export default WorkoutsExerciseList;
