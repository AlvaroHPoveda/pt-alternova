import { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import { theme } from "../assets/enum";
import themeContext from "../context/ThemeContext";

const LoginText = ({ children, style, typeFont, ...restOfProps }) => {
  const themeCtext = useContext(themeContext);
  const textStyles = [
    typeFont === "title" && styles.title,
    typeFont === "subTitle" && styles.subTitle,
    typeFont === "forgotPassword" && styles.forgotPassword,
    typeFont === "createNewAccount" && styles.createNewAccount,
    style,
    { color: themeCtext.color },
  ];
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
};

export default LoginText;

const styles = StyleSheet.create({
  title: {
    fontSize: theme.fontSize.title,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: theme.fontSize.subTitle,
  },
  forgotPassword: {
    marginTop: theme.fontSize.forgotPassword,
    fontSize: 15,
  },
});
