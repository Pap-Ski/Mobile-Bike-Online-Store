import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Price, mainColor } from "../../../general/Utilities";

const CartList = ({ bikes }) => {
  return (
    <View>
      {bikes.map(({ id, src, price, name, type }) => (
        <CartListItem
          key={id}
          src={src}
          name={name}
          type={type}
          price={price}
        />
      ))}
    </View>
  );
};

const CartListItem = ({ src, price, name, type }) => {
  return (
    <View style={styles.cartItem}>
      <CartItemImage src={src} />
      <ItemDescription price={price} name={name} type={type} />
      <ItemAction />
    </View>
  );
};

const CartItemImage = ({ src }) => {
  return (
    <View style={styles.cartItemImage}>
      <Image style={{ width: "100%", height: "100%" }} source={src}></Image>
    </View>
  );
};

const ItemDescription = ({ name, type, price }) => {
  return (
    <View style={styles.itemDescription}>
      <Text style={{ fontSize: 20 }}>{name}</Text>
      <Text style={{ color: "#aaa" }}>{type}</Text>
      <Price price={price} />
    </View>
  );
};

const ItemAction = () => {
  return (
    <View style={styles.itemAction}>
      <Feather
        name="trash-2"
        size={24}
        color={mainColor}
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
          style={{ ...styles.counter, backgroundColor: mainColor }}
        >
          <Text style={{ color: "#fff" }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 22,
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
