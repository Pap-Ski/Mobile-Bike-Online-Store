import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

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

const Nav = () => {
  return (
    <View style={styles.nav}>
      <Category text="All" color="#51AD60" />
      <Category text="Roadbike" color="#000" />
      <Category text="Mountain" color="#000" />
      <Category text="Urban" color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Nav;
