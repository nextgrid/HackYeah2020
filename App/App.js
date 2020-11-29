import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { Container, Header } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import Onboarding from "./screens/Onboarding";
import Home from "./screens/components/Home";
import Spot from "./screens/components/Spot";
import Submit from "./screens/components/Submit";
import Dead from "./screens/components/Dead";
import Info from "./screens/components/Info";
import Maps from "./screens/components/Map";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Asset } from "expo-asset";
import { AppLoading } from "expo";

const AppStack = createStackNavigator();

export default function App() {
  return (
    <Container>
      <StatusBar style="dark" />

      <NavigationContainer>
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Onboarding" component={Onboarding} />
          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="Spot" component={Spot} />
          <AppStack.Screen name="Submit" component={Submit} />
          <AppStack.Screen name="Dead" component={Dead} />
          <AppStack.Screen name="Maps" component={Maps} />
          <AppStack.Screen name="Info" component={Info} />
        </AppStack.Navigator>
      </NavigationContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
    backgroundColor: "#000",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  grid: {
    padding: 20,
  },
  box: {
    backgroundColor: "#ccc",
    height: 330,
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
