import React from "react";
import { View, useWindowDimensions } from "react-native";

import Button from "./Button";

const Box = ({ backgroundColor, ButtonLabel = false, ButtonPress = false }) => {
  const windowWidth = useWindowDimensions().width;
  const HEIGHT = windowWidth * 0.21;
  const FOOTER_PADDING = windowWidth * 0.1;

  return (
    <View
      style={{
        justifyContent: "center",
        height: HEIGHT,
        backgroundColor,
        alignItems: "center",
        paddingHorizontal: FOOTER_PADDING,
      }}
    >
      <Button label={ButtonLabel} onPress={ButtonPress} />
    </View>
  );
};

export default Box;
