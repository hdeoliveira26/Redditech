import React from "react";
import { View } from "react-native";
import { Img } from "./Image";
import { Button as PaperButton } from "react-native-paper";
import Auth from "../functions/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const textStyle = {
  fontSize: 30,
  color: "white",
  paddingBottom: 100,
};
const backgroundStyle = {
  backgroundColor: "white",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Landing = ({navigation}) => {
  const manageAuth = function () {
    Auth()
      .then((result) => {
        console.log(result);
        AsyncStorage.setItem("userToken", result.accessToken);
        navigation.navigate('Home')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={backgroundStyle}>
      <Img/>

      <PaperButton

        mode="contained"
        dark={false}
        color="orange"
        onPress={manageAuth}
      >
        Reddit Auth
      </PaperButton>
    </View>
  );
};

export {Landing};
