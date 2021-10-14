import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Login from "./Pages/Login";
import Categories from "./Pages/Categories";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Categories />
    </View>
  );
}
