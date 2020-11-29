import React from "react";
import { View, Text, Image } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

const Page = ({ backgroundColor, title, description }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
      }}
    >
      <Image
        style={{ width: 200, height: 200 }}
        source={require("./../../assets/grunt.png")}
      />
      <View style={{ marginTop: 16 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          {title}
        </Text>
        <Text style={{ fontSize: 16, color: "white", textAlign: "center" }}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default Page;
