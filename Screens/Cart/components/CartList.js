import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const CartItemImage = () => {
  return (
    <View style={styles.cartItemImage}>
      <Image
        style={{ width: "100%", height: "100%" }}
        source={require("../../../assets/mountainBike-Login.jpg")}
      ></Image>
    </View>
  );
};

const ItemDescription = () => {
  return (
    <View style={styles.itemDescription}>
      <Text style={{ fontSize: 20 }}>asdfasd</Text>
      <Text>sdfg</Text>
      <View style={{ flexDirection: "row", alignItems: "baseline" }}>
        <Text style={{ color: "#51AD60", fontSize: 16 }}>$ </Text>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>sdfgsdf</Text>
      </View>
    </View>
  );
};

const ItemAction = () => {
  return (
    <View style={styles.itemAction}>
      <Feather
        name="trash-2"
        size={24}
        color="#51AD60"
        style={{ alignSelf: "flex-end" }}
      />
      <View style={styles.itemCounter}>
        <TouchableOpacity
          style={styles.counter}
          style={{ ...styles.counter, backgroundColor: "#000" }}
        >
          <Text style={{ color: "#fff" }}>-</Text>
        </TouchableOpacity>
        <Text>1</Text>
        <TouchableOpacity
          style={{ ...styles.counter, backgroundColor: "#51AD60" }}
        >
          <Text style={{ color: "#fff" }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CartListItem = () => {
  return (
    <View style={styles.cartItem}>
      <CartItemImage />
      <ItemDescription />
      <ItemAction />
    </View>
  );
};

const CartList = () => {
  return <CartListItem />;
};

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cartItemImage: {
    width: 90,
    height: 90,
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  itemDescription: {
    justifyContent: "space-between",
    marginRight: 60,
  },
  itemAction: {
    justifyContent: "space-between",
  },
  itemCounter: {
    width: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  counter: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
});

export default CartList;
