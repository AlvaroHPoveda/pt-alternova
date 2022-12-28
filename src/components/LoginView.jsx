import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import themeContext from "../context/ThemeContext";

const LoginView = ({ children, style, typeContainer, ...restOfProps }) => {
  const themeCtext = useContext(themeContext);
  const textStyles = [
    typeContainer === "mainContainer" && styles.mainContainer,
    typeContainer === "container" && styles.container,
    typeContainer === "containerImg" && styles.containerImg,
    style,
    { backgroundColor: themeCtext.backgroundColor },
  ];
  return (
    <View style={textStyles} {...restOfProps}>
      {children}
    </View>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    flex: 1,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerImg: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
