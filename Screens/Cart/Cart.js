import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CartHeader from "./components/CartHeader";
import CartList from "./components/CartList";
import CartCheckout from "./components/CartCheckout";
import CartFooter from "./components/CartFooter";
import BikeObjs from "../../general/BikeObjs";

const bikes = BikeObjs.filter(({ id }) => id < 4);

const Cart = () => {
  return (
    <View style={styles.main}>
      <CartHeader />
      <CartList bikes={bikes} />
      <CartCheckout bikes={bikes} />
      <CartFooter />
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
