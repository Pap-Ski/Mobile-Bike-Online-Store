import React from "react";
import Header from "./Header";
const Categories = () => {
  return (
    <View style={styles.main}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
});
export default Categories;
