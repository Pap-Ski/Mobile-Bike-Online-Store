import React from "react";
import { View } from "react-native";
import Login from "./Screens/Login";
import Home from "./Screens/Home/Home";
import Cart from "./Screens/Cart/Cart";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <MainNavigator.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Login"
        >
          <MainNavigator.Screen name="Login" component={Login} />
          <MainNavigator.Screen name="Home" component={Home} />
          <MainNavigator.Screen name="Cart" component={Cart} />
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
    // <View style={{ flex: 1 }}>
    //   {/* <Categories /> */}
    //   <Cart />
    //   {/* <Login /> */}
    // </View>
  );
}
