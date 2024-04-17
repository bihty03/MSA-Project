import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { format } from "date-fns";
import "./homeStyle.js";
import { homeStyles } from "./homeStyle.js";
import CaloriesIcon from "../../icons/caloriesIcon.js";
import CaloriesDaysStat from "../../icons/caloriesDaysStat.js";
import { ScrollView } from "react-native-gesture-handler";
import { useAuth } from "../../context/loginContext.js";

const HomePart1 = ({ person }) => {
  const { userData } = useAuth();
  const [welcomePart, setWelcomePart] = useState();

  const now = new Date();
  const currentHour = now.getHours();
  const formattedDate = format(now, "EEE, dd MMMM");

  useEffect(() => {
    if (currentHour >= 5 && currentHour < 12) {
      setWelcomePart("Good Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setWelcomePart("Good Day");
    } else {
      setWelcomePart("Good Evening");
    }
  }, []);

  const handleIsActive = (day) => {
    const currentDay = formattedDate.slice(0, 3);
    return day === currentDay;
  };

  let user;

  if (userData) {
    user = userData;
  } else {
    user = {
      name: "Guest",
    };
  }

  return (
    <View
      style={{
        backgroundColor: "#111214",
        marginLeft: 24,
      }}
    >
      <Text style={homeStyles.home_1.date}>{formattedDate}</Text>
      <Text
        style={homeStyles.home_1.welcome}
      >{`${welcomePart}, ${user.name}!`}</Text>
      <View
        style={{
          backgroundColor: "#24262b",
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#37383C",
          marginTop: 25,
          marginRight: 24,
          padding: 14,
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <CaloriesIcon />
            <Text style={homeStyles.home_1.caloriesTitle}> Calories</Text>
          </View>
          <Text style={homeStyles.home_1.caloriesDates}> Week</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {person.daysOfWeek.map((day, index) => {
            return (
              <View key={index}>
                <View style={{ display: "flex", justifyContent: "flex-end" }}>
                  {handleIsActive(day.name) ? (
                    <CaloriesDaysStat size={day.size} isActive={true} />
                  ) : (
                    <CaloriesDaysStat size={day.size} isActive={false} />
                  )}
                </View>
                <Text style={homeStyles.home_1.caloriesDates}>{day.name}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default HomePart1;
