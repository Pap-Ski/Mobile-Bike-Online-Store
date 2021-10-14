import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Header from "./Header";

const Category = ({ text, color }) => {
  const [col, setCol] = useState(color);
  return (
    <TouchableOpacity
      onPress={() => (col === "#000" ? setCol("#51AD60") : setCol("#000"))}
      style={{
        alignItems: "center",
        padding: 7,
        backgroundColor: "#eee",
        borderRadius: 10,
        width: 80,
      }}
    >
      <Text style={{ color: col }}>{text}</Text>
    </TouchableOpacity>
  );
};

const Categories = () => {
  return (
    <View style={styles.main}>
      <Header />
      <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 20 }}>
        Categories
      </Text>
      <View style={styles.nav}>
        <Category text="All" color="#51AD60" />
        <Category text="Roadbike" color="#000" />
        <Category text="Mountain" color="#000" />
        <Category text="Urban" color="#000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default Categories;
