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
      <View style={{ height: 600, padding: 20 }}>
        <Text>
          What is ASF African swine fever (ASF) is a rapidly spreading
          infectious viral disease to which domestic pigs and wild boars are
          susceptible. ASF is a challenge not only in Poland. Except for Poland,
          ASF concerns also other European Union countries – Latvia, Estonia,
          Lithuania, Romania, Czech Republic, Hungary, Belgium, Germany – as
          well as third countries. The disease does not affect humans, but it
          causes negative environmental, economic, and social effects, in
          particular for the health of wild boar population and the pork sector.
          A country affected by ASF loses the ability to export pork to third
          countries and the trade in the domestic EU market is subject to
          considerable restrictions. Wild boars or their remains are the main
          reservoir of and direct source for transferring this disease onto
          healthy animals and keep the virus active in the environment. The
          occurrence of the disease in the wildlife population and the lack of a
          vaccine and treatment make it difficult to limit the spread of the
          virus and to control ASF. Thus, in combating ASF it is crucial to
          eliminate the infected carrion from the environment and to obtain data
          on the wild boar occurrence. We are in the period of the COVID-19
          pandemic when we search for solutions of protection against
          SARS-CoV-2. We do our best to avoid situations which favour virus
          spread from infected persons, we avoid big crowds and contacts with
          infected persons. In the case of ASF, virus carriers may count only on
          the help of humans. Lack of action on our part means an increase in
          the incidence and, as a result, a successive decrease in both wild
          boar and pig population, with no guarantee of its restoration in the
          future.
        </Text>
      </View>
      <View style={styles.bar}>
        <Cta
          backgroundColor="#43B27D"
          ButtonLabel="[ Report ]"
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
