import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase-config";
import { EventRegister } from "react-native-event-listeners";

import LoginText from "../components/LoginText";
import LoginView from "../components/LoginView";
import ButtonGradient from "../components/ButtonGradient";
import SwitchNative from "../components/SwitchNative";

import { constants, theme } from "../assets/enum";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState(false);
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then()
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {        
        navigation.navigate("Home");
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

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
    <LoginView typeContainer="mainContainer">
      <SwitchNative />
      <LoginView typeContainer="containerImg">
        {mode === true ? (
          <Image
            style={styles.logo}
            source={{ uri: constants.login.IMGLOGOINV }}
          />
        ) : (
          <Image
            style={styles.logo}
            source={{ uri: constants.login.IMGLOGO }}
          />
        )}
      </LoginView>
      <LoginView typeContainer="container">
        <LoginText typeFont="title">{constants.login.HELLO}</LoginText>
        <LoginText typeFont="subTitle">{constants.login.SINGIN}</LoginText>
        <TextInput
          placeholder={constants.login.EMAIL}
          style={styles.textInput}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder={constants.login.PASSWORD}
          style={styles.textInput}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <LoginText typeFont="forgotPassword">
          {constants.login.FORGOT}
        </LoginText>
        <ButtonGradient handleSignIn={handleSignIn} />
        <LoginText typeFont="forgotPassword">
          {constants.login.MSGYOURDATA}
        </LoginText>
        <TouchableOpacity onPress={handleCreateAccount}>
          <Text style={styles.createNewAccount}>
            {constants.login.BTNCREATEACCOUNT}
          </Text>
        </TouchableOpacity>
      </LoginView>
    </LoginView>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    paddingStart: 20,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  logo: {
    width: 150,
    height: 100,
  },
  createNewAccount: {
    marginTop: theme.fontSize.forgotPassword,
    fontSize: 15,
    color: "blue",
  },
});
