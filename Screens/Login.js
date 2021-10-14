import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { mainColor } from "../general/Utilities";

const LoginButton = ({ logo, bgc, text, col }) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        marginTop: 20,
        flexDirection: "row",
        borderRadius: 10,
        padding: 20,
        backgroundColor: bgc,
      }}
    >
      <AntDesign
        name={logo}
        size={24}
        color={logo === "apple1" ? "white" : "black"}
      />
      <Text style={{ color: col, marginLeft: 20 }}>Login with {text}</Text>
    </TouchableOpacity>
  );
};

export default Login = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/mountainBike-Login.jpg")}
      />
      <Text style={{ fontSize: 32 }}>Welcome to</Text>
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>Power Bike Shop</Text>
      <LoginButton logo="google" bgc="#f8f8f8" text="Gmail" col="#000" />
      <LoginButton logo="apple1" bgc="#000" text="Apple" col="#fff" />
      <Text style={{ marginTop: 10, fontSize: 20 }}>
        Not a member?{" "}
        <Text style={{ fontWeight: "bold", color: mainColor }}>Sign up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginBottom: 60,
    transform: [{ rotate: "-45deg" }],
  },
});
