import React, { useState, useContext } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import themeContext from "../context/ThemeContext";

import { EventRegister } from "react-native-event-listeners";

import { constants } from "../assets/enum";
//Bottom switch theme
const SwitchNative = () => {
  const [mode, setMode] = useState(false);
  //context
  const themeCtext = useContext(themeContext);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: themeCtext.color }]}>
        {constants.login.THEMEDARK}
      </Text>
      <Switch
        onValueChange={(value) => {
          setMode(value);
          EventRegister.emit("changeTheme", value);
        }}
        value={mode}
      />
    </View>
  );
};
export default SwitchNative;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    paddingLeft: 20,
    marginTop: -30,
  },
  text: {
    fontSize: 15,
  },
});
