/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Btn from './components/Button';
import {Button} from 'react-native-paper';
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';
import DisplayMode from 'react-native/Libraries/ReactNative/DisplayMode';
import Img from './components/Image';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';


  
  const backgroundStyle = {
    backgroundColor: 'black',
    height:'100%',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (

    <View style={backgroundStyle}>
      <Text>Redditech</Text>
      <Img />
      <Btn />
    </View>
  );
};

export default App;
