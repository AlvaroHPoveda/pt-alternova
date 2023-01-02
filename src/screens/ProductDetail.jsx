import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { constants } from "../assets/enum";
import { setEspecificValue } from "../redux/slices/counterSlice";

//Screen where the product detail will be displayed
const ProductDetail = ({ route }) => {
  const item = route.params;
  //redux
  const counter = useSelector((state) => state.counter);
  const itemCounter = counter.find((product) => product.id === item.id);
  const dispatch = useDispatch();
  return (
    //information listed
    <View style={styles.containerDetail}>
      <View style={styles.itemContainer}>
        <Image style={styles.image} source={{ uri: item.image }}></Image>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={styles.item}>
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
        {/* buttons to add or remove from cart */}
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
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  containerDetail: {
    backgroundColor: "#fbffff",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
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
  container: {
    flex: 1,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  image: {
    width: 250,
    height: 250,
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
    width: 40,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#ffcf4f",
    borderRadius: 4,
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
  descriptionContainer: {
    marginHorizontal: 10,
  },
  description: {
    textAlign: "justify",
    fontSize: 15,
  },
});
