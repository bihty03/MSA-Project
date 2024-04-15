import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import { workoutsStyle } from "./workoutsStyle.js";
import WorkoutsGrid from "../../common/workoutsGrid.js";
import ConditionalSafeAreaView from "../../utils/SafeViewCustom.js";

const WorkoutsMainPage = ({ navigation }) => {
  const [selectedItemsArray, setSelectedItemsArray] = useState([]);

  return (
    <ConditionalSafeAreaView>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          margin: 16,
        }}
      >
        <Text style={workoutsStyle.title}>
          What do you want to train today?
        </Text>

        <Text style={workoutsStyle.subtitle}>
          You can select only one muscle group.
        </Text>

        <WorkoutsGrid
          multipleSelection={false}
          navigation={navigation}
          {...{ selectedItemsArray, setSelectedItemsArray }}
        />
      </View>
    </ConditionalSafeAreaView>
  );
};

export default WorkoutsMainPage;
