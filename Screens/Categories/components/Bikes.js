import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import BikeObjs from "../../../general/BikeObjs";
import { Price } from "../../../general/Utilities";

const Bike = ({ src, name, price }) => {
  return (
    <View style={styles.bikeCard}>
      <View style={{ alignItems: "flex-end" }}>
        <MaterialIcons
          style={{ padding: 4, backgroundColor: "#fff", borderRadius: 50 }}
          name="favorite-outline"
          size={24}
          color="#bbb"
        />
      </View>
      <Image
        style={{ width: "100%", height: "60%", marginBottom: 10 }}
        source={src}
      ></Image>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "#999", fontWeight: "700" }}>{name}</Text>
        <Price price={price} />
      </View>
    </View>
  );
};

const Bikes = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {BikeObjs.map(({ id, src, price, name }) => (
        <Bike key={id} src={src} price={price} name={name} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bikeCard: {
    alignContent: "center",
    justifyContent: "center",
    width: 180,
    height: 250,
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: "#eee",
    marginVertical: 10,
  },
});

export default Bikes;
