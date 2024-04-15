import HomeView from "./HomeView";

import chestImage from "../../public/chest.png";
import backImage from "../../public/back.png";
import shouldersImage from "../../public/shoulders.png";

import fullBody from "../../public/fullBody.png";
import intenseJumping from "../../public/intenseJumping.png";
import strengthBand from "../../public/strengthBand.png";
import totalBody from "../../public/totalBody.png";
import { useAuth } from "../../context/loginContext";

const HomeContainer = ({ navigation }) => {
  const { userData } = useAuth();

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

  const sampleData = {
    cards: [
      {
        image: chestImage,
        title: "Massive Upper Body",
        category: "Chest & Shoulders",
        link: "blank",
      },
      {
        image: backImage,
        title: "Back Workout",
        category: "Back & Lats",
        link: "blank",
      },
      {
        image: shouldersImage,
        title: "Shoulder Workout",
        category: "Shoulders",
        link: "blank",
      },
    ],
    workouts: [
      {
        name: "Strength with Band",
        image: strengthBand,
        kcal: 125,
        time: 30,
      },
      {
        name: "Total Body Training",
        image: totalBody,
        kcal: 145,
        time: 25,
      },
      {
        name: "Intense Jumping Jacks",
        image: intenseJumping,
        kcal: 230,
        time: 45,
      },
      {
        name: "Full Body Cardio Workout",
        image: fullBody,
        kcal: 250,
        time: 50,
      },
    ],
  };

  return (
    <HomeView person={person} sampleData={sampleData} navigation={navigation} />
  );
};

export default HomeContainer;
