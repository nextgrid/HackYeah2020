import { StatusBar } from "expo-status-bar";

import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { Container, Header } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import React, { useRef } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Cta from "./Cta";
import Head from "./Head";
import { useNavigation } from "@react-navigation/native";
import { Video } from "expo-av";
import { Asset } from "expo-asset";
import { AppLoading } from "expo";

// Load the module

// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.

// Later on in your styles..

const Submit = () => {
  const pagerRef = useRef(null);
  const navigation = useNavigation();
  return (
    <Container>
      <Head />
      <View style={{ width: 400, height: 600 }}>
        <Text
          style={{
            marginTop: 20,
            fontSize: 32,
            color: "black",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          CONFIRM
        </Text>
        <Text
          style={{
            marginTop: 20,
            fontSize: 22,
            color: "black",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Adults: 8
        </Text>
        <Text
          style={{
            marginTop: 20,
            fontSize: 22,
            color: "black",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Babies: 10
        </Text>
      </View>
      <View style={styles.bar}>
        <Cta
          backgroundColor="#43B27D"
          ButtonLabel="[ SEND ]"
          ButtonPress={() => {
            navigation.navigate("Submit");
          }}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  bar: {
    backgroundColor: "#43B27D",
    height: 300,
    width: 400,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "space-around",
  },
  cta: {
    fontSize: 25,
    fontWeight: "700",
  },
  grid: {
    padding: 20,
  },
  box: {
    backgroundColor: "#ccc",
    height: 200,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  head: {
    width: "100%",
    paddingTop: 20,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#43B27D",
  },
});

export default Submit;
