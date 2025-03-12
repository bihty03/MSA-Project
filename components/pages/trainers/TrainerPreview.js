import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import playButtonTrans from "../../public/playButton.png";
import { LogInStyles } from "../LogIn/loginStyles.js";
import stopwatchTimer from "../../public/timeClock.png";
import { useExerciseContext } from "../../context/exerciseContext.js";
import back from "../../public/back.png";
import StopWatch from "../../icons/stopWatch.js";
import PlayButton from "../../icons/playButtonBig.js";
import { workoutsStyle } from "./workoutsStyle.js";
import { TouchableOpacity } from "react-native-gesture-handler";

import { StyleSheet } from "react-native";
import { Video, ResizeMode } from "expo-av";

export function VideoPlayer({ video }) {
  const [status, setStatus] = useState({});
  const { exerciseData } = useExerciseContext();

  const handleFullscreenUpdate = async ({ fullscreenUpdate }) => {
    switch (fullscreenUpdate) {
      case Video.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS:
        // This case is triggered when the video is about to exit fullscreen
        if (video.current) {
          await video.current.pauseAsync(); // Stop the video playback
        }
        break;
      default:
        // Handle other cases if necessary
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        source={{
          uri: `https://shape-mentor-prod.fra1.cdn.digitaloceanspaces.com/${exerciseData?.video}.mp4`,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        // shouldPlay
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        onFullscreenUpdate={handleFullscreenUpdate}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

const ExercisePreview = ({ navigation }) => {
  const { exerciseData } = useExerciseContext();
  const videoRef = React.useRef(null); // Ref for the video player

  const exercise = exerciseData;

  // Function to handle play button press
  const handlePlayPress = () => {
      navigation.navigate("TrainerPage");
  };

  return (
    <View style={{ flexDirection: "column", height: "100%" }}>
      <View style={{ width: "100%", height: "60%", flexDirection: "column" }}>
        <ImageBackground
          source={{
            uri: `https://shape-mentor-prod.fra1.digitaloceanspaces.com/ex-photo/${exercise.photo}.jpg`,
          }}
          style={{ height: "100%" }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center", // Center vertically in the ImageBackground
              alignItems: "center", // Center horizontally in the ImageBackground
            }}
          >
            <TouchableOpacity
              style={workoutsStyle.previewButton}
              onPress={handlePlayPress}
            >
              <PlayButton />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "flex-end",
              alignItems: "center",
              paddingBottom: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 36,
                alignSelf: "center",
                color: "#FFFFFF",
              }}
            >
              {exercise?.exercise}
            </Text>
          </View>
        </ImageBackground>
      </View>

      <View
        style={{
          flexDirection: "column",
          backgroundColor: "#24262B",
          width: "100%",
          height: "100%",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#D7D8D9",
            alignSelf: "center",
            height: "30%",
            textAlign: "center",
          }}
        >
          {exercise?.description}
        </Text>

        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FF8036",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#37383C",
            height: 54,
            width: "100%",
          }}
          onPress={handlePlayPress}
        >
          <View
            style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
          >
            <Text
              style={{
                fontWeight: "600",
                fontSize: 20,
                color: "#FFFFFF",
              }}
            >
              Start
            </Text>
            {/* <StopWatch /> */}
          </View>
        </TouchableOpacity>
      </View>

      <VideoPlayer video={videoRef} />
    </View>
  );
};

export default ExercisePreview;
