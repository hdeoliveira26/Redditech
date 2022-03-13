/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Auth from './functions/Auth';
import ButtonConnexion from './components/ButtonConnexion';
import 'react-native-gesture-handler';
import React, {useState,useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LandingPage} from './components/LandingPage';
import {Home} from './components/Home';
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
import routes from './routes/Route';

const Stack = createNativeStackNavigator()

const App = () => {
  const [userAuth, setUserAuth] = useState(initialState = false)
  useEffect(() => {
    ( async  () => { 
      const userToken = await AsyncStorage.getItem('userToken')
      setUserAuth(userToken)
    })()
  }, [
  ])
    


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
    alignItems: 'center',
  };

  


  return (
    <NavigationContainer linking = {routes}>
      <Stack.Navigator initialRouteName = {userAuth ? 'Home' : 'Landing'}>
        <Stack.Screen  name = 'Landing' component = {LandingPage}/>
        <Stack.Screen name = 'Home' component= {Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
