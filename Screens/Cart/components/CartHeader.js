import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CartHeader = () => {
  return (
    <View style={styles.header}>
      <View>
        <Ionicons
          style={{ flex: 1 }}
          name="arrow-back-outline"
          size={24}
          color="black"
        />
      </View>
      <View
        style={{
          flex: 2,
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Cart list</Text>
        <Text style={{ fontSize: 16, color: "#aaa" }}>(3 items)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
export default CartHeader;
