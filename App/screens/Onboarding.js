import { View } from "react-native";
import ViewPager from "@react-native-community/viewpager";
import Footer from "./components/Footer";
import Page from "./components/Page";
import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";

const Onboarding = () => {
  const pagerRef = useRef(null);
  const navigation = useNavigation();

  const handlePageChange = (pageNumber) => {
    pagerRef.current.setPage(pageNumber);
  };

  return (
    <View style={{ flex: 1 }}>
      <ViewPager style={{ flex: 1 }} initialPage={0} ref={pagerRef}>
        <View key="1">
          <Page
            backgroundColor="#43B27D"
            title="Welcome to Grunt"
            description=""
          />
          <Footer
            backgroundColor="darkgreen"
            rightButtonLabel="Next"
            rightButtonPress={() => {
              handlePageChange(1);
            }}
          />
        </View>
        <View key="2">
          <Page
            backgroundColor="#43B27D"
            title="Report"
            description="Grunt allow easy reporting of wild boar sightings"
          />
          <Footer
            backgroundColor="darkgreen"
            rightButtonLabel="Next"
            rightButtonPress={() => {
              handlePageChange(2);
            }}
            leftButtonLabel="Back"
            leftButtonPress={() => {
              handlePageChange(0);
            }}
          />
        </View>
        <View key="3">
          <Page
            backgroundColor="#43B27D"
            title="Recive"
            description="Grunt helps you to keep track of wild board activites at your location"
          />
          <Footer
            backgroundColor="darkgreen"
            rightButtonLabel="Next"
            rightButtonPress={() => {
              navigation.navigate("Home");
            }}
            leftButtonLabel="Back"
            leftButtonPress={() => {
              handlePageChange(1);
            }}
          />
        </View>
      </ViewPager>
    </View>
  );
};

export default Onboarding;
