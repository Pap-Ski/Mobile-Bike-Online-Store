import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  MaterialIcons,
  EvilIcons,
  Feather,
  Ionicons,
} from "@expo/vector-icons";

const Header = ({ color }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerIcons}>
        <EvilIcons name="navicon" size={24} color="black" />
        <MaterialIcons name="electric-bike" size={24} color="white" />
        <View
          style={{
            width: 50,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Feather name="search" size={24} color="black" />
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
      </View>
      <View style={styles.headerText}>
        <Text style={{ fontSize: 16 }}>The World's </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: color }}>
          Best Bike
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {},
  headerIcons: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
});

export default Header;
