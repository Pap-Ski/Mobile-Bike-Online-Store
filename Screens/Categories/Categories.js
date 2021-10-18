import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Bikes from "./components/Bikes";
import { mainColor } from "../../general/Utilities";

const Categories = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Header color={mainColor} />
      <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 10 }}>
        Categories
      </Text>
      <Nav color={mainColor} />
      <Bikes />
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    position: "relative",
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
});
export default Categories;
