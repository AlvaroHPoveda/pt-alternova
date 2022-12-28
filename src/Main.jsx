import React, { useState, useEffect } from "react";

import ThemeContext from "./context/ThemeContext";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EventRegister } from "react-native-event-listeners";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProductDetail from "./screens/ProductDetail";

import { theme } from "./assets/enum";
import { StatusBar } from "react-native";

const Main = () => {
  const Stack = createNativeStackNavigator();
  const [mode, setMode] = useState(false);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setMode(data);
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  });

  return (
    <ThemeContext.Provider value={mode === true ? theme.dark : theme.light}>
      <StatusBar style="light" />
      <NavigationContainer theme={mode === true ? DarkTheme : DefaultTheme}>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Product Detail" component={ProductDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default Main;
