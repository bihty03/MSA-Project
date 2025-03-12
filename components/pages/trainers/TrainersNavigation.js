import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TrainerMainPage from "./TrainerList";
import TrainerPreview from "./TrainerPreview";
import TrainerContact from "./ChatWindos";

const WorkoutsStack = createNativeStackNavigator();

const WorkoutsScreen = () => {
  return (
    <WorkoutsStack.Navigator screenOptions={{ headerShown: false }}>
      <WorkoutsStack.Screen
        name="TrainerMainPage"
        component={TrainerMainPage}
      />
      <WorkoutsStack.Screen
        name="TrainerPreview"
        component={TrainerPreview}
      />
      <WorkoutsStack.Screen
        name="TrainerContact"
        component={TrainerContact}
      />
    </WorkoutsStack.Navigator>
  );
};

export default WorkoutsScreen;
