import React from "react";
import { Image, Text, View, TextInput } from "react-native";
import appleIcon from "../../public/appleIcon.png";
import closeButton from "../../public/closeButton.png";
import googleIcon from "../../public/googleIcon.png";
import line from "../../public/line.png";
import { LogInStyles } from "./loginStyles";
import { useAuth } from "../../context/loginContext";
import { useSignupContext } from "../../context/signupContext";
import md5 from "md5";
import { TouchableOpacity } from "react-native-gesture-handler";
import ConditionalSafeAreaView from "../../utils/SafeViewCustom";

const ConfigureAccount = ({ navigation }) => {
  const { logIn, userData } = useAuth();
  const [userInfo, setUserInfo] = React.useState(userData || {}); // Initialize state with userData
  const [errorMsg, setErrorMsg] = React.useState();

  const handleText = (key, value) => {
    setUserInfo((prev) => ({ ...prev, [key]: value }));
    setErrorMsg(null);
  };

  const handleUpdateAccount = async () => {
    const { name, gender, age, weight, height, fitnessLevel, daysWeek } =
      userInfo;

    try {
      const response = await fetch(
        "https://jellyfish-app-2-7736b.ondigitalocean.app/api/users/profile", // Assume this is your update endpoint
        {
          method: "PUT", // Change to PATCH or PUT as needed
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: userData._id,
            name,
            gender,
            age,
            weight,
            height,
            fitnessLevel,
            daysWeek,
          }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const updatedData = await response.json();

      if (response.ok) {
        logIn(updatedData); // Update the user context with new data
      }
    } catch (error) {
      setErrorMsg(error.message);
      console.error(error);
    }
  };
  const handleSetUp = () => {
    handleUpdateAccount();
    navigation.navigate("ProfilePage");
  };
  return (
    <ConditionalSafeAreaView>
      <View style={{ backgroundColor: "#111214", flex: 1, padding: 12 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#111214",
              paddingHorizontal: 16,
            }}
          >
            <Text
              style={{ fontSize: 17, fontWeight: "bold", color: "#FFFFFF" }}
            >
              Edit your Account
            </Text>
          </View>

          <View style={{ justifyContent: "space-between", width: "100%" }}>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                  marginBottom: 30,
                  paddingHorizontal: 24,
                }}
              >
                <Image source={line} style={{ flex: 1, height: 1 }} />
                <Text
                  style={{
                    color: "#6B7280",
                    fontSize: 14,

                    marginHorizontal: 8,
                  }}
                >
                  General data
                </Text>
                <Image source={line} style={{ flex: 1, height: 1 }} />
              </View>

              <TextInput
                style={LogInStyles.inputBox}
                value={userInfo.name}
                onChangeText={(text) => handleText("name", text)}
                placeholder="Name"
              />
              <TextInput
                style={LogInStyles.inputBox}
                value={userInfo.gender}
                placeholder="Gender"
                placeholderTextColor="#6B7280"
                onChangeText={(text) => handleText("gender", text)}
              />
              <TextInput
                style={LogInStyles.inputBox}
                placeholder="Age"
                value={userInfo.age}
                placeholderTextColor="#6B7280"
                onChangeText={(text) => handleText("age", text)}
              />
              <TextInput
                style={LogInStyles.inputBox}
                placeholder="Weight"
                value={userInfo.weight}
                placeholderTextColor="#6B7280"
                onChangeText={(text) => handleText("weight", text)}
              />
              <TextInput
                style={LogInStyles.inputBox}
                placeholder="Height"
                value={userInfo.height}
                placeholderTextColor="#6B7280"
                onChangeText={(text) => handleText("height", text)}
              />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                  marginBottom: 30,
                  paddingHorizontal: 24,
                }}
              >
                <Image source={line} style={{ flex: 1, height: 1 }} />
                <Text
                  style={{
                    color: "#6B7280",
                    fontSize: 14,
                    fontWeight: "400",
                    marginHorizontal: 8,
                  }}
                >
                  Fitness skill
                </Text>
                <Image source={line} style={{ flex: 1, height: 1 }} />
              </View>

              <TextInput
                style={LogInStyles.inputBox}
                placeholder="Rate your fitness level (1-5)"
                placeholderTextColor="#6B7280"
                value={userInfo.fitnessLevel}
                onChangeText={(text) => handleText("fitnessLevel", text)}
              />

              <TextInput
                style={LogInStyles.inputBox}
                placeholder="How many days/week will you commit?"
                placeholderTextColor="#6B7280"
                value={userInfo.daysWeek}
                onChangeText={(text) => handleText("daysWeek", text)}
              />

              <TouchableOpacity
                style={[LogInStyles.inputBoxSignUp]}
                onPress={handleSetUp}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 18,
                    fontWeight: "medium",
                  }}
                >
                  Update my account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ConditionalSafeAreaView>
  );
};

export default ConfigureAccount;
