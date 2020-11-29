import { StatusBar } from "expo-status-bar";

import { StyleSheet, Image, Text, View } from "react-native";
import { Container, Header } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import React, { useRef } from "react";
import Nav from "./Nav";
import Box from "./Box";
import Head from "./Head";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
const { Height } = Dimensions.get("window");

import { Asset } from "expo-asset";
import { AppLoading } from "expo";

const Home = () => {
  const pagerRef = useRef(null);
  const navigation = useNavigation();
  return (
    <Container style={styles.container}>
      <Head />
      <Image
        style={{
          width: 220,
          height: 220,
          opacity: 0.95,
          borderRadius: 150,
          marginBottom: 30,
          borderWidth: 2,
          borderColor: "#20232a",
        }}
        source={require("./../../assets/poland.png")}
      />
      <View style={styles.btn}>
        <Box
          backgroundColor="transparent"
          rightButtonLabel="Report"
          rightButtonPress={() => {
            navigation.navigate("Spot");
          }}
        />
      </View>
      <View style={styles.btn}>
        <Box
          backgroundColor="transparent"
          rightButtonLabel="Dead"
          rightButtonPress={() => {
            navigation.navigate("Dead");
          }}
        />
      </View>
      <View style={styles.btn}>
        <Box
          backgroundColor="transparent"
          rightButtonLabel="Map"
          rightButtonPress={() => {
            navigation.navigate("Map");
          }}
        />
      </View>
      <View style={styles.btn}>
        <Box
          backgroundColor="transparent"
          rightButtonLabel="Learn"
          rightButtonPress={() => {
            navigation.navigate("Info");
          }}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: Height,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#43B27D",
    alignItems: "center",
    justifyContent: "center",
  },
  cta: {
    fontSize: 25,
    fontWeight: "700",
  },
  btn: {
    // flex: 2,
    display: "flex",

    borderWidth: 2,
    borderColor: "#20232a",
    borderRadius: 6,
    height: 150,
    width: 150,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    overflow: "hidden",
    backgroundColor: "#0D5532",
    // opacity: 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {
    padding: 20,
  },

  head: {
    width: "100%",
    paddingTop: 20,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#43B27D",
  },
});

export default Home;
