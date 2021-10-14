import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
