import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Bikes from "./Bikes";

const Categories = () => {
  return (
    <View style={styles.main}>
      <Header />
      <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 10 }}>
        Categories
      </Text>
      <Nav />
      <Bikes />
      <Footer />
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
