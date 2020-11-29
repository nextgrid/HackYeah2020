import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { Container, Header } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

import { useNavigation } from "@react-navigation/native";

import { Asset } from "expo-asset";
import { AppLoading } from "expo";

const Maps = () => {
  return (
    <Container>
      <View style={styles.head}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("./../../assets/grunt.png")}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
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

export default Maps;
