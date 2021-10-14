import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Login from "./Screens/Login";
import Categories from "./Screens/Categories/Categories";
import Cart from "./Screens/Cart/Cart";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Categories /> */}
      <Cart />
    </View>
  );
}
