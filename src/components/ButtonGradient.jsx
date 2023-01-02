import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { constants } from "../assets/enum";

export default function ButtonGradient({ handleSignIn }) {
  return (
    //custom button
    <TouchableOpacity onPress={handleSignIn} style={styles.container}>
      <LinearGradient
        colors={["#f1c44d", "#f2b53c", "#f3a52d"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.button}
      >
        <Text style={styles.text}>{ constants.ButtonGradient.SINGIN }</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 200,
    marginTop: 60,
  },
  text: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  button: {
    width: "80%",
    height: 50,
    borderRadius: 25,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
