import React from "react";
import {View} from 'react-native';
import {Img} from "./Image";
import {ButtonConnexion} from './ButtonConnexion';
import { Text } from "react-native-paper";




const textStyle = {
  fontSize: 30,
  color: "white",
  paddingBottom: 100,
};
const backgroundStyle = {
  backgroundColor: "black",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Landing = () => {
      return (
      <View style={backgroundStyle}>
            <Text style ={textStyle}>Redditech</Text>
            <Img/>
            <ButtonConnexion/>
      </View>
      )
}

export  {Landing};

