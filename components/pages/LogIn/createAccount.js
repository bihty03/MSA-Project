import React from "react";
import { Image, Text, View } from "react-native";
import { TextInput } from "react-native";
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

const CreateAccount = ({ navigation }) => {
  const { logIn, userData } = useAuth();
  const { setSignupDataContext } = useSignupContext();
  const [signUpData, setSignUpData] = React.useState({});
  const [errorMsg, setErrorMsg] = React.useState();

  console.log(userData);
  const handleText = (key, value) => {
    setSignUpData((prev) => ({ ...prev, [key]: value }));
    setErrorMsg(null);
  };

  const validatePasswords = () => {
    const { password, confirmPassword } = signUpData;
    if (password === confirmPassword) {
      setSignupDataContext(signUpData);
      navigation.navigate("ConfigureAccount");
    } else {
      setErrorMsg("Passwords do not match.");
    }
  };

  const handleSignUpClick = async () => {
    const { email, password } = signUpData;

    try {
      const encryptedPassword = md5(password);

      const response = await fetch(
        "http://localhost:5050/api/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password: encryptedPassword }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const loginData = await response.json();

      if (response.ok) {
        logIn(loginData);
        navigation.navigate("ConfigureAccount");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ConditionalSafeAreaView>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#111214",
            paddingHorizontal: 36,
            paddingTop: 10,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={closeButton} style={{ height: 14, width: 14 }} />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "#FFFFFF",
            }}
          >
            Create an Account
          </Text>
          <Text style={{ color: "#111214" }}>tt</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <TouchableOpacity style={[LogInStyles.greyBox, { marginBottom: 10 }]}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={appleIcon}
                style={{ marginRight: 10, height: 18, width: 18 }}
              />
              <Text
                style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "medium" }}
              >
                Sign up with Apple
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={LogInStyles.greyBox}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={googleIcon}
                style={{ marginRight: 10, height: 18, width: 18 }}
              />
              <Text
                style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "medium" }}
              >
                Sign up with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
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
            Or sign in with email
          </Text>
          <Image source={line} style={{ flex: 1, height: 1 }} />
        </View>

        <View style={{ justifyContent: "space-between", width: "100%" }}>
          <View>
            <TextInput
              style={LogInStyles.inputBox}
              placeholder="Email"
              placeholderTextColor="#6B7280"
              onChangeText={(text) => handleText("email", text)}
            />
            <TextInput
              style={LogInStyles.inputBox}
              placeholder="Password"
              placeholderTextColor="#6B7280"
              secureTextEntry
              onChangeText={(text) => handleText("password", text)}
            />
            <TextInput
              style={LogInStyles.inputBox}
              placeholder="Confirm Password"
              placeholderTextColor="#6B7280"
              secureTextEntry
              onChangeText={(text) => handleText("confirmPassword", text)}
            />
            <Text style={{ color: "red", alignSelf: "center" }}>
              {errorMsg}
            </Text>

            <TouchableOpacity
              style={[LogInStyles.inputBoxSignUp]}
              onPress={validatePasswords}
            >
              <Text
                style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "medium" }}
              >
                Sign up
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginTop: 40,
              paddingHorizontal: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                marginTop: 20,
              }}
            >
              Already have an account?
              <TouchableOpacity
                onPress={() => navigation.navigate("LoginAccount")}
              >
                <Text style={{ color: "#FF8036", marginLeft: 8 }}>Sign In</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
    </ConditionalSafeAreaView>
  );
};

export default CreateAccount;
