import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ExerciseProvider } from "./components/context/exerciseContext";
import { CategoryProvider } from "./components/context/categoryContext";
import { AuthProvider } from "./components/context/loginContext";
import { SignupProvider } from "./components/context/signupContext";
// import "./App.css";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import Home from "./components/pages/Home/HomeNavigation";
import HomeIcon from "./components/icons/homeIcon";
import ExercisePreview from "./components/pages/Home/WorkoutsHome/ExerciseDetails";

import Workouts from "./components/pages/Workouts/WorkoutsNavigation";
import WorkoutsIcon from "./components/icons/workoutsIcon";

import Profile from "./components/pages/Profile/ProfileContainer";
import ProfileIcon from "./components/icons/profileIcon";

import Login from "./components/pages/LogIn/LogInNavigation";

import Randomizer from "./components/pages/Randomizer/RandomizerNavigation";
import RandomizerIcon from "./components/icons/randomizer";

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#FF8036",
          tabBarInactiveTintColor: "#6B7280",
          tabBarIcon: ({ focused, color, size }) => {
            let iconComponent;

            if (route.name === "Home") {
              iconComponent = <HomeIcon isActive={focused} />;
            } else if (route.name === "Exercises") {
              iconComponent = <WorkoutsIcon isActive={focused} />;
            } else if (route.name === "Randomizer") {
              iconComponent = <RandomizerIcon isActive={focused} />;
            } else if (route.name === "Profile") {
              iconComponent = <ProfileIcon isActive={focused} />;
            }

            return iconComponent;
          },

          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#24262b",
            border: "1px solid #24262b",
          },
        })}
      >
        {/* pus pt development */}
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Exercises" component={Workouts} />
        <Tab.Screen name="Randomizer" component={Randomizer} />
        <Tab.Screen name="Profile" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <SignupProvider>
          <CategoryProvider>
            <ExerciseProvider>
              <AppNavigation />
            </ExerciseProvider>
          </CategoryProvider>
        </SignupProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
