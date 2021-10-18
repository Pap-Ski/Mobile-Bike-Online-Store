import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather, Foundation, FontAwesome5 } from "@expo/vector-icons";
import { mainColor } from "../../../general/Utilities";

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Foundation name="home" size={24} color="#999" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 60,
          height: 60,
          position: "relative",
          zIndex: -1,
          top: "-10%",
          backgroundColor: "black",
          borderRadius: 50,
        }}
      >
        <FontAwesome5 name="microphone" size={24} color="white" />
      </TouchableOpacity>
      <Feather name="shopping-bag" size={24} color={mainColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#eee",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "110%",
    height: "8%",
    paddingVertical: 10,
  },
});

export default Footer;
