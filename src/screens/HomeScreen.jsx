import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

import { getAllProducts } from "../api/data.api";
import { constants } from "../assets/enum";
import Item from "../components/Item";
//screen where the products will be listed
const HomeSreen = () => {
  //product call
  const products = getAllProducts();

  return (
    <ScrollView>
      {products.map((item) => (
        <Item item={item} key={item.id} />
      ))}
      <TouchableOpacity
        onPress={() => Alert.alert("Done")}
        style={styles.buttonBuyContainer}
      >
        <Text style={styles.buttonBuy}>{ constants.Home.BUY }</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default HomeSreen;

const styles = StyleSheet.create({
  buttonBuyContainer: {
    alignItems: "center",
  },
  buttonBuy: {
    backgroundColor: "blue",
    marginVertical: 10,
    height: 40,
    width: 120,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    padding: 5,
    borderRadius: 5,
  },
});
