import react from "react";
import View from 'react-native';
import Img from "./Image";
import ButtonConnexion from './ButtonConnexion';


const LandingPage = () => {
      return (
      <View style={backgroundStyle}>
            <Text style ={textStyle}>Redditech</Text>
            <Img/>
            <ButtonConnexion/>
      </View>
      )
}

