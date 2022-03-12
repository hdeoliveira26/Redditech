/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Auth from './functions/Auth';
import Btn from './components/Button';
import {Button} from 'react-native-paper';
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-native/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
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

const Tab = createBottomTabNavigator ()

const App = () => {


  const isDarkMode = useColorScheme() === 'dark';


  const textStyle = {
    fontSize: 30,
    color : 'white',
    paddingBottom: 100,
  }
  const backgroundStyle = {
    backgroundColor: 'black',
    width: '100%',
    height:'100%',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',qw
  };

  


  return (
    <NavigationContainer>
      
    </NavigationContainer>
  );
};

export default App;
