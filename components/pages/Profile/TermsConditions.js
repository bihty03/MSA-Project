import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import ConditionalSafeAreaView from "../../utils/SafeViewCustom";
import closeButton from "../../public/closeButton.png";

const TermsAndConditions = ({ navigation }) => {
  return (
    <ConditionalSafeAreaView>
      <ScrollView style={{ backgroundColor: "#24262B" }}>
        <View style={styles.container}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingTop: 15 }}
            >
              <Image source={closeButton} style={{ height: 14, width: 14 }} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 28,
                color: "#FFFFFF",
                marginTop: 24,
                marginBottom: 24,
              }}
            >
              Terms and Conditions
            </Text>
          </View>
          <Text style={styles.tcP}>
            The term ' Shape Mentor' or 'us' or 'we' refers to the owner of the
            mobile app whose registered office is [address]. Our company
            registration number is [company registration number and place of
            registration]. The term 'you' refers to the user or viewer of our
            mobile app.
          </Text>
          <Text style={styles.tcL}>
            {"\u2022"} The content of the pages of this mobile app is for your
            general information and use only. It is subject to change without
            notice.
          </Text>
          <Text style={styles.tcL}>
            {"\u2022"} This mobile app uses cookies to monitor browsing
            preferences. If you do allow cookies to be used, the following
            personal information may be stored by us for use by third parties:
            [insert list of information].
          </Text>
          <Text style={styles.tcL}>
            {"\u2022"} Neither we nor any third parties provide any warranty or
            guarantee as to the accuracy, timeliness, performance, completeness
            or suitability of the information and materials found or offered on
            this mobile app for any particular purpose. You acknowledge that
            such information and materials may contain inaccuracies or errors
            and we expressly exclude liability for any such inaccuracies or
            errors to the fullest extent permitted by law.
          </Text>
          <Text style={styles.tcL}>
            {"\u2022"} Your use of any information or materials on this mobile
            app is entirely at your own risk, for which we shall not be liable.
            It shall be your own responsibility to ensure that any products,
            services or information available through this mobile app meet your
            specific requirements.
          </Text>
          <Text style={styles.tcL}>
            {"\u2022"} This mobile app contains material which is owned by or
            licensed to us. This material includes, but is not limited to, the
            design, layout, look, appearance and graphics. Reproduction is
            prohibited other than in accordance with the copyright notice, which
            forms part of these terms and conditions.
          </Text>
          <Text style={styles.tcL}>
            {"\u2022"} All trademarks reproduced in this mobile app, which are
            not the property of, or licensed to the operator, are acknowledged
            on the mobile app. Unauthorised use of this mobile app may give rise
            to a claim for damages and/or be a criminal offence.
          </Text>
          <Text style={styles.tcL}>
            {"\u2022"} From time to time, this mobile app may also include links
            to other mobile apps. These links are provided for your convenience
            to provide further information. They do not signify that we endorse
            the mobile app(s). We have no responsibility for the content of the
            linked mobile app(s).
          </Text>
          <Text style={styles.tcL}>
            {"\u2022"} Your use of this mobile app and any dispute arising out
            of such use of the mobile app is subject to the laws of England,
            Northern Ireland, Scotland and Wales.
          </Text>
          <Text style={styles.tcP}>
            The use of this mobile app is subject to the following terms of use
          </Text>
        </View>
      </ScrollView>
    </ConditionalSafeAreaView>
  );
};

const styles = {
  container: {
    padding: 16,
  },
  title: {
    alignSelf: "center",
    fontSize: 28,
    color: "#FFFFFF",
  },
  tcP: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    color: "white",
  },

  tcL: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    color: "white",
  },

  button: {
    backgroundColor: "#136AC7",
    borderRadius: 5,
    padding: 10,
  },

  buttonDisabled: {
    backgroundColor: "#999",
    borderRadius: 5,
    padding: 10,
  },

  buttonLabel: {
    fontSize: 14,
    color: "#FFF",
    alignSelf: "center",
  },
};

export default TermsAndConditions;
