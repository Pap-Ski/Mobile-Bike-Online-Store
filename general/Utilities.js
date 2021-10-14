import React from "react";
import { View, Text } from "react-native";

const mainColor = "#51AD60";

const Price = ({ price }) => {
  // const priceStr = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <View style={{ flexDirection: "row", alignItems: "baseline" }}>
      <Text style={{ color: mainColor, fontSize: 16 }}>$ </Text>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>{price}</Text>
    </View>
  );
};

export { Price, mainColor };
