import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { Container, Header } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import RoundedButton from "./RoundedButton";

import { Asset } from "expo-asset";
import { AppLoading } from "expo";

const Head = ({}) => {
  const pagerRef = useRef(null);
  const navigation = useNavigation();
  return (
    <View style={styles.head}>
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Image
          style={{ width: 100, height: 100 }}
          source={require("./../../assets/grunt.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    width: "100%",
    paddingTop: 20,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#43B27D",
  },
});

export default Head;
