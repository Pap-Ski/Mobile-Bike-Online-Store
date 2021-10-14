import React from "react";
import { View } from "react-native";
import Login from "./Screens/Login";
import Categories from "./Screens/Categories/Categories";
import Cart from "./Screens/Cart/Cart";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Categories /> */}
      {/* <Cart /> */}
      <Login />
    </View>
  );
}
