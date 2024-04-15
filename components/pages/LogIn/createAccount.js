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
  const handleText = (value) => {
    setSignUpData((prev) => {
      return { ...prev, ...value };
    });
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
        "https://jellyfish-app-2-7736b.ondigitalocean.app/api/users",
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
            marginVertical: 20,
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#111214",
            paddingHorizontal: 16,
            paddingLeft: 12,
            paddingRight: 12,
            paddingBottom: 12,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ position: "absolute", left: 24 }}
          >
            <Image source={closeButton} style={{ height: 14, width: 14 }} />
          </TouchableOpacity>
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "#FFFFFF" }}>
            Create an Account
          </Text>
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
              onChange={(e) => handleText({ email: e.target.value })}
            />
            <TextInput
              style={LogInStyles.inputBox}
              placeholder="Password"
              placeholderTextColor="#6B7280"
              secureTextEntry
              onChange={(e) => handleText({ password: e.target.value })}
            />
            <TextInput
              style={LogInStyles.inputBox}
              placeholder="Confirm Password"
              placeholderTextColor="#6B7280"
              secureTextEntry
              onChange={(e) => handleText({ confirmPassword: e.target.value })}
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
              alignSelf: "center",
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
              <TouchableOpacity>
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
