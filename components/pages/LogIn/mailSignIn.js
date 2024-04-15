import React from "react";
import { Image, Text, View } from "react-native";
import { TextInput } from "react-native";
import appleIcon from "../../public/appleIcon.png";
import closeButton from "../../public/closeButton.png";
import googleIcon from "../../public/googleIcon.png";
import line from "../../public/line.png";
import { LogInStyles } from "./loginStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const mailSignIn = () => {
  return (
    <View style={{ backgroundColor: "#111214", height: "100%" }}>
      <View style={{ flexDirection: "column", height: "100%" }}>
        <TouchableOpacity style={{ top: "5%", left: "5%" }}>
          <Image
            source={closeButton}
            style={{ height: "12px", width: "12px" }}
          />
        </TouchableOpacity>

        <Text
          style={{
            left: "5%",
            top: "10%",
            fontSize: 28,

            color: "#FFFFFF",
          }}
        >
          Sign In
        </Text>

        <Text
          style={{
            left: "5%",
            color: "#6B7280",
            fontSize: 16,

            top: "12%",
          }}
        >
          Let's sign in to your sporter account
        </Text>

        <TouchableOpacity style={[LogInStyles.greyBox, { top: "15%" }]}>
          <Image
            source={appleIcon}
            style={{
              left: "21%",
              alignSelf: "center",
              height: "18px",
              width: "18px",
            }}
          />
          <Text
            style={{
              color: "#FFFFFF",
              alignSelf: "center",
              left: "26%",
              fontSize: 18,
            }}
          >
            Sign up with Apple
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[LogInStyles.greyBox, { top: "15%" }]}>
          <Image
            source={googleIcon}
            style={{
              left: "21%",
              alignSelf: "center",
              height: "18px",
              width: "18px",
            }}
          />
          <Text
            style={{
              color: "#FFFFFF",
              alignSelf: "center",
              left: "26%",
              fontSize: 18,
            }}
          >
            Sign up with Google
          </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", top: "20%", left: "10%" }}>
          <Image
            source={line}
            style={{ height: "1px", alignSelf: "center", width: "81px" }}
          />
          <Text
            style={{ color: "#6B7280", fontSize: 14, fontWeight: "medium" }}
          >
            Or sign in with email
          </Text>
          <Image
            source={line}
            style={{ height: "1px", alignSelf: "center", width: "81px" }}
          />
        </View>

        <View style={[LogInStyles.greyBox, { top: "20%" }]}>
          <TextInput></TextInput>
        </View>

        <View style={[LogInStyles.greyBox, { top: "20%" }]}>
          <TextInput></TextInput>
        </View>

        <TouchableOpacity style={[LogInStyles.orangeBox, { top: "20%" }]}>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 18,

              left: "40%",
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ top: "20%", left: "35%" }}>
          <Text style={{ color: "#FF8036", fontSize: 16 }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ top: "32%", left: "20%" }}>
          <Text
            style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "medium" }}
          >
            Already have an account?
            <Text style={{ color: "#FF8036" }}> Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default mailSignIn;
