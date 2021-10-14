import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Price, mainColor } from "../../../general/Utilities";

const CartCheckout = ({ bikes }) => {
  //   let subTotal = bikes.reduce((a, b) => (a += b));
  //   let itemPrices = Object.values(bikes).map((bike) => bike.price);
  //   let subTotal = itemPrices.reduce((a, b) => (a += Number(b)));
  //   const shippingFee = 100;
  //   let total = subTotal + shippingFee;
  return (
    <View>
      <View style={styles.bill}>
        <View style={styles.billParameter}>
          <Text style={{ color: "#aaa", fontSize: 16, paddingBottom: 20 }}>
            Subtotal
          </Text>
          <Price price={"3,400.00"} />
        </View>
        <View style={styles.billParameter}>
          <Text style={{ color: "#aaa", fontSize: 16, paddingBottom: 20 }}>
            Shipping fee
          </Text>
          <Price price={"100.00"} />
        </View>
        <View
          style={{
            ...styles.billParameter,
            borderTopWidth: 2,
            borderTop: "dotted",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Total</Text>
          <Price price={"3,500.00"} />
        </View>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 20,
          alignItems: "center",
          padding: 20,
          backgroundColor: mainColor,
          borderRadius: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
          Proceed to Checkout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bill: {
    marginTop: 20,
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 30,
  },
  billParameter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CartCheckout;
