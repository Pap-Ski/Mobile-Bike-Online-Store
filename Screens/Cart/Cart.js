import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CartHeader from "./components/CartHeader";
import CartList from "./components/CartList";

const Cart = () => {
  return (
    <View style={styles.main}>
      <CartHeader />
      <CartList />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    position: "relative",
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
});
