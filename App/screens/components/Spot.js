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

const Spot = () => {
  const pagerRef = useRef(null);
  const navigation = useNavigation();
  return (
    <Container>
      <Head />
      <Video
        source={{
          uri:
            "https://storage.googleapis.com/nextgrid_github_repo_visuals/Github%20Graphics%20/wildwildwild.mp4",
        }}
        rate={1.0}
        volume={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        style={{ width: 400, height: 600 }}
      />
      <View style={styles.bar}>
        <Cta
          backgroundColor="#43B27D"
          ButtonLabel="SUBMIT"
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

export default Spot;
