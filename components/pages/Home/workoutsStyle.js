import { StyleSheet } from "react-native";

export const workoutsStyle = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: 38,
    letterSpacing: -0.3,
    color: "#FFF",
    width: 300,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    fontStyle: "normal",

    // lineHeight: "160%",
    letterSpacing: -0.04,
    color: "#D7D8D9",
    width: 300,
    marginTop: 12,
    marginBottom: 37,
  },

  text: {
    textAlign: "left",
    left: 24,
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: 25.6,
    letterSpacing: -0.04,
    color: "#FFF",
    marginTop: 24,
  },

  card: {
    width: 105,
    height: 105,
    borderRadius: 14,
    backgroundColor: "#24262B",
    margin: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cardSelected: {
    width: 105,
    height: 105,
    borderRadius: 14,
    backgroundColor: "#FF8036",
    margin: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    textAlign: "center",
    fontSize: 16,
    fontStyle: "normal",

    // lineHeight: "160%",
    letterSpacing: -0.04,
    color: "#FFF",
    marginTop: 11,
  },
  card_image: {
    borderRadius: 8,
    width: 80,
    height: 80,
  },
  playButton: {
    zIndex: 99,
    backgroundColor: "#FF8036",
    alignSelf: "center",
    padding: 8,
    left: -10,
    marginLeft: "auto",
    width: 38,
    height: 38,
    borderRadius: 11,
  },
  previewButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",

    // Makes the container fill the entire screen or its parent container
    justifyContent: "center", // Centers children vertically in the container
    alignItems: "center",
    width: 72,
    height: 72,
    borderRadius: 1000,
  },
  exCard: {
    width: 105,
    height: 55,
    borderRadius: 14,
    backgroundColor: "#1E1F21",
    margin: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  exText1: {
    textAlign: "justify",
    fontSize: 16,
    fontStyle: "normal",

    lineHeight: 20,
    letterSpacing: -0.04,
    color: "#9EA0A5",
    marginTop: 12,
  },
  exText2: {
    textAlign: "justify",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: 25,
    letterSpacing: -0.048,
    color: "#FFF",
    marginTop: 6,
  },
  exText3: {
    textAlign: "justify",
    fontSize: 16,
    fontStyle: "normal",

    lineHeight: 20,
    letterSpacing: -0.04,

    color: "#D7D8D9",
    marginTop: 6,
  },

  exText5: {
    textAlign: "justify",
    fontSize: 16,
    fontStyle: "normal",

    lineHeight: 20,
    letterSpacing: -0.04,

    color: "#D7D8D9",
  },
  exText4: {
    textAlign: "justify",
    fontSize: 12,
    fontStyle: "normal",

    lineHeight: 20,
    letterSpacing: -0.04,
    alignItems: "center",
    color: "#D7D8D9",
    marginTop: 6,
  },
});
