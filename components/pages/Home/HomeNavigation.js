import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "./HomeContainer";
import ExercisePreview from "./ExercisePreview";

// import { VideoPlayer } from "../../common/videoElement";

const HomeStack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="MainPageHome" component={HomePage} />
      <HomeStack.Screen
        name="ExercisePreviewHome"
        component={ExercisePreview}
      />
      {/* <WorkoutsStack.Screen name="VideoPlayer" component={VideoPlayer} /> */}
    </HomeStack.Navigator>
  );
};

export default HomeScreen;
