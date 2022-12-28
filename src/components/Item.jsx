import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { setEspecificValue } from "../redux/slices/counterSlice";

import { constants } from "../assets/enum";

const Item = ({ item }) => {
  const navigation = useNavigation();
  const counter = useSelector((state) => state.counter);
  const itemCounter = counter.find((product) => product.id === item.id);
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Product Detail", item)}
    >
      <View style={styles.item}>
        <View style={styles.itemContainer}>
          <Image style={styles.image} source={{ uri: item.image }}></Image>
        </View>
        <View style={styles.data}>
          <View style={styles.viewData}>
            <Text style={styles.nameData}>{constants.DetailProduct.NAME}</Text>
            <Text style={styles.textData}>{item.name}</Text>
          </View>
          <View style={styles.viewData}>
            <Text style={styles.nameData}>{ constants.DetailProduct.PRICE }</Text>
            <Text style={styles.textData}>{item.unit_price}</Text>
          </View>
          <View style={styles.viewData}>
            <Text style={styles.nameData}>{ constants.DetailProduct.STOCK }</Text>
            <Text style={styles.textData}>{item.stock}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              dispatch(setEspecificValue({ id: item.id, number: +1 }))
            }
          >
            <Text style={styles.text}>{constants.DetailProduct.ADD}</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{itemCounter.cant}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              dispatch(setEspecificValue({ id: item.id, number: -1 }))
            }
          >
            <Text style={styles.text}>{ constants.DetailProduct.SUBTRATION }</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#fbffff",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemContainer: {
    justifyContent: "center",
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
  },
  data: {
    flex: 1,
    marginHorizontal: 12,
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#ffffb3",
    justifyContent: "space-between",
  },
  button: {
    width: 35,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#ffcf4f",
    borderRadius: 30,
  },
  quantity: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: 5,
  },
  nameData: {
    fontSize: 15,
    fontWeight: "bold",
  },
  textData: {
    marginLeft: 8,
    fontSize: 15,
    flex: 1,
  },
  viewData: {
    flexDirection: "row",
    marginVertical: 2,
  },
});
