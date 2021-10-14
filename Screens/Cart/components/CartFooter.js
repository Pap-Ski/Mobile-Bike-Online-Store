import React from "react";
import { View, StyleSheet } from "react-native";
import { Feather, Foundation, FontAwesome5 } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Foundation name="home" size={24} color="#51AD60" />
      <FontAwesome5
        style={{
          position: "absolute",
          left: "45%",
          top: "-50%",
          padding: 10,
          backgroundColor: "black",
          borderRadius: 50,
        }}
        name="microphone"
        size={24}
        color="white"
      />
      <Feather name="shopping-bag" size={24} color="#999" />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#eee",
    height: 100,
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "110%",
    height: "7%",
    paddingVertical: 10,
  },
});

export default Footer;
