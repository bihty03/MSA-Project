import React from "react";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native";
import BackArrowIcon from "../../icons/BackArrowIcon.js";
import SettingsButton from "../../icons/SettingsButton.js";
import icon from "./../../public/icon.png";
import PhotoCircle from "./../../icons/PhotoCircle.js";
import { ProfileStyles } from "./ProfileStyles.js";
import Weight from "../../icons/Weight.js";
import Height from "../../icons/Height.js";
import Age from "../../icons/Age.js";
import Subscription from "../../icons/Subscription.js";
import UpgradePremium from "../../icons/UpgradePremium.js";
import EditProfile from "../../icons/EditProfile.js";
import SubIcon from "../../icons/SubIcon.js";
import InviteFriends from "../../icons/InviteFriends.js";
import AboutIcon from "../../icons/AboutIcon.js";
import TermsIcon from "../../icons/TermsIcon.js";
import LogOutIcon from "../../icons/LogOutIcon.js";
import RightArrow from "../../icons/RightArrow.js";
import PhotoCamera from "../../icons/PhotoCamera.js";
import Folder from "../../icons/Folder.js";
import DeleteRed from "../../icons/DeleteRed.js";
import EditPhoto from "../../icons/EditPhoto.js";
import ProBox from "../../icons/ProBox.js";
import { useAuth } from "../../context/loginContext.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import ConditionalSafeAreaView from "../../utils/SafeViewCustom.js";

const EditPhotoBox = () => {
  <View style={{ backgroundColor: "#24262B", width: 326, height: 335 }}>
    <Text style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "bold" }}>
      Change Your Picture
    </Text>

    <TouchableOpacity>
      <PhotoCamera />
      <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "medium" }}>
        Take a photo
      </Text>
    </TouchableOpacity>

    <TouchableOpacity></TouchableOpacity>
    <Folder />
    <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "medium" }}>
      Choose from your file
    </Text>
    <TouchableOpacity></TouchableOpacity>

    <TouchableOpacity></TouchableOpacity>
    <DeleteRed />
    <Text style={{ color: "#E53935", fontSize: 18, fontWeight: "medium" }}>
      Delete photo
    </Text>
    <TouchableOpacity></TouchableOpacity>
  </View>;
};

const Profile = ({ navigation }) => {
  const { userData, logOut } = useAuth();

  const handleLogOut = () => {
    logOut();
    navigation.popToTop();
  };

  return (
    <ConditionalSafeAreaView>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#111214",
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            backgroundColor: "#24262B",
            borderBottomLeftRadius: 32,
            borderBottomRightRadius: 32,
            alignItems: "center",
            paddingTop: 24,
            height: 125,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 24,
              alignItems: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#FFFFFF",
                padding: 10,
              }}
            >
              <BackArrowIcon />
            </TouchableOpacity>

            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Profile
            </Text>

            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#FFFFFF",
                padding: 10,
              }}
            >
              <SettingsButton />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            top: 70, // Adjust based on the size of the profile image
            left: 0,
            right: 0,
            justifyContent: "center", // This will center the PhotoCircle horizontally
            alignItems: "center", // Ensures centering is consistent across dimensions
          }}
        >
          <PhotoCircle />
          {/* <Image /> */}
        </View>

        {/* <TouchableOpacity
        style={{
          position: "absolute", // Absolute to overlap the profile image
          alignSelf: "flex-end", // Align to the right
          padding: 16, // Padding from the sides
          top: 140, // Adjust as needed to place the edit button correctly
        }}
      >
        <EditPhoto />
      </TouchableOpacity> */}

        <View
          style={{
            marginTop: 62, // Adjust this margin to position the profile section correctly
            alignItems: "center",
            paddingHorizontal: 24,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#FFFFFF",
              marginBottom: 4,
            }}
          >
            {userData?.name}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#AAAAAA",
              marginBottom: 8,
            }}
          >
            {userData?.email}
          </Text>
          {/* Edit Icon, placed next to the profile name and email */}
          {/* <TouchableOpacity
          style={{
            position: "absolute",
            right: 20, // Adjust based on your layout needs
            top: 20, // Adjust based on the size of the text
          }}
        >
          <EditProfile />
        </TouchableOpacity> */}
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 16,

            gap: 10,
          }}
        >
          <View style={[ProfileStyles.box, { flex: 1, padding: 12 }]}>
            <View style={{ flexDirection: "row", marginBottom: 8, gap: 10 }}>
              <Weight />
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 11,
                  marginVertical: 4,
                  fontWeight: "bold",
                }}
              >
                Weight
              </Text>
            </View>
            <Text style={{ color: "#FFFFFF" }}>
              {userData?.weight}{" "}
              <Text style={{ color: "#888888", fontSize: 10 }}>kg</Text>
            </Text>
          </View>

          <View style={[ProfileStyles.box, { flex: 1, padding: 12 }]}>
            <View style={{ flexDirection: "row", marginBottom: 8, gap: 10 }}>
              <Height />
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 11,
                  marginVertical: 4,
                  fontWeight: "bold",
                }}
              >
                Height
              </Text>
            </View>
            <Text style={{ color: "#FFFFFF", fontSize: 16 }}>
              {userData?.height}{" "}
              <Text style={{ color: "#888888", fontSize: 10 }}>cm</Text>
            </Text>
          </View>

          <View style={[ProfileStyles.box, { flex: 1, padding: 12 }]}>
            <View style={{ flexDirection: "row", marginBottom: 8, gap: 10 }}>
              <Age />
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 11,
                  marginVertical: 4,
                  fontWeight: "bold",
                }}
              >
                Age
              </Text>
            </View>
            <Text style={{ color: "#FFFFFF" }}>
              {userData?.age}{" "}
              <Text style={{ color: "#888888", fontSize: 10 }}>years</Text>
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={[
            ProfileStyles.orangeBox,
            {
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
              marginTop: 16, // Adjust as needed for spacing
            },
          ]}
        >
          <UpgradePremium />
          <View style={{ marginLeft: 20, flexShrink: 1 }}>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Upgrade to Premium
            </Text>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 10,
              }}
            >
              Enjoy workout access without any limits
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row", // Line up children in a row
            justifyContent: "space-between", // Distribute space between children
            alignItems: "center", // Vertically center-align children
            padding: 20, // Add padding around
            backgroundColor: "#2D2F33", // Or use your greyBox style
            borderRadius: 10, // Adjust as needed
            marginHorizontal: 16, // Side margins
            marginTop: 16, // Add space above the button
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <EditProfile />
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
                fontWeight: "medium",
                marginLeft: 8,
              }}
            >
              Edit Profile
            </Text>
          </View>
          <RightArrow />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row", // Line up children in a row
            justifyContent: "space-between", // Distribute space between children
            alignItems: "center", // Vertically center-align children
            padding: 20, // Add padding around
            backgroundColor: "#2D2F33", // Or use your greyBox style
            borderRadius: 10, // Adjust as needed
            marginHorizontal: 16, // Side margins
            marginTop: 16, // Add space above the button
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <SubIcon />
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
                fontWeight: "medium",
                marginLeft: 8,
              }}
            >
              My Subscription
            </Text>
          </View>
          <RightArrow />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row", // Line up children in a row
            justifyContent: "space-between", // Distribute space between children
            alignItems: "center", // Vertically center-align children
            padding: 20, // Add padding around
            backgroundColor: "#2D2F33", // Or use your greyBox style
            borderRadius: 10, // Adjust as needed
            marginHorizontal: 16, // Side margins
            marginTop: 16, // Add space above the button
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Subscription />
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
                fontWeight: "medium",
                marginLeft: 8,
              }}
            >
              Payment Methods
            </Text>
          </View>
          <RightArrow />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row", // Line up children in a row
            justifyContent: "space-between", // Distribute space between children
            alignItems: "center", // Vertically center-align children
            padding: 20, // Add padding around
            backgroundColor: "#2D2F33", // Or use your greyBox style
            borderRadius: 10, // Adjust as needed
            marginHorizontal: 16, // Side margins
            marginTop: 16, // Add space above the button
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <InviteFriends />
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
                fontWeight: "medium",
                marginLeft: 8,
              }}
            >
              Invite Friends
            </Text>
          </View>
          <RightArrow />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row", // Line up children in a row
            justifyContent: "space-between", // Distribute space between children
            alignItems: "center", // Vertically center-align children
            padding: 20, // Add padding around
            backgroundColor: "#2D2F33", // Or use your greyBox style
            borderRadius: 10, // Adjust as needed
            marginHorizontal: 16, // Side margins
            marginTop: 16, // Add space above the button
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AboutIcon />
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
                fontWeight: "medium",
                marginLeft: 8,
              }}
            >
              About Us
            </Text>
          </View>
          <RightArrow />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: "row", // Line up children in a row
            justifyContent: "space-between", // Distribute space between children
            alignItems: "center", // Vertically center-align children
            padding: 20, // Add padding around
            backgroundColor: "#2D2F33", // Or use your greyBox style
            borderRadius: 10, // Adjust as needed
            marginHorizontal: 16, // Side margins
            marginTop: 16, // Add space above the button
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TermsIcon />
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
                fontWeight: "medium",
                marginLeft: 8,
              }}
            >
              Terms and Conditions
            </Text>
          </View>
          <RightArrow />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            ProfileStyles.whiteBox,
            {
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 16, // Adjust as needed
              marginTop: 16, // Adjust as needed for spacing
              marginBottom: 16,
            },
          ]}
          onPress={handleLogOut}
        >
          <LogOutIcon />
          <Text
            style={{
              color: "#111214",
              fontSize: 14,
              fontWeight: "bold",
              marginLeft: 12,
            }}
          >
            Log Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ConditionalSafeAreaView>
  );
};
export default Profile;
