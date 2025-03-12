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
  const { signupDataContext } = useSignupContext();
  const [signUpData, setSignUpData] = React.useState({});
  const [errorMsg, setErrorMsg] = React.useState();

  console.log("check", signupDataContext, signUpData);

  const handleText = (key, value) => {
    setSignUpData((prev) => ({ ...prev, [key]: value }));
    setErrorMsg(null);
  };

  const validatePasswords = () => {
    const { password, confirmPassword } = signUpData;
    if (password === confirmPassword) {
      navigation.navigate("ProfilePage");
    } else {
      setErrorMsg("Passwords do not match.");
    }
  };

  const handleSetUp = () => {
    handleSignUpClick();
    navigation.navigate("ProfilePage");
  };

  console.log(userData);
  const handleSignUpClick = async () => {
    const { name, weight, height, age, fitnessLevel } = signUpData;

    const { email, password } = signupDataContext;

    try {
      const encryptedPassword = md5(password);

      const response = await fetch(
        "http://localhost:5050/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password: encryptedPassword,
            name,
            weight,
            height,
            age,
            fitnessLevel,
          }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const loginData = await response.json();

      if (response.ok) {
        logIn(loginData);
        console.log(loginData);
      }
    } catch (error) {
      console.log(error);
    }
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
              Configure your Account
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
                placeholder="Name"
                placeholderTextColor="#6B7280"
                onChangeText={(text) => handleText("name", text)}
              />
              <TextInput
                style={LogInStyles.inputBox}
                placeholder="Gender"
                placeholderTextColor="#6B7280"
                onChangeText={(text) => handleText("gender", text)}
              />
              <TextInput
                style={LogInStyles.inputBox}
                placeholder="Age"
                placeholderTextColor="#6B7280"
                onChangeText={(text) => handleText("age", text)}
              />
              <TextInput
                style={LogInStyles.inputBox}
                placeholder="Weight"
                placeholderTextColor="#6B7280"
                onChangeText={(text) => handleText("weight", text)}
              />
              <TextInput
                style={LogInStyles.inputBox}
                placeholder="Height"
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
                onChangeText={(text) => handleText("fitnessLevel", text)}
              />

              <TextInput
                style={LogInStyles.inputBox}
                placeholder="How many days/week will you commit?"
                placeholderTextColor="#6B7280"
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
                  Set up my Account
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
