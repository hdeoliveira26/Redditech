/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Landing} from './components/Landing';
import { Home } from "./components/Home";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { routes } from "./routes/Route";

const Stack = createNativeStackNavigator();

const App = () => {
  const [userAuth, setUserAuth] = useState((initialState = false));
  useEffect(() => {
    (async () => {
      const userToken = await AsyncStorage.getItem("userToken");
      setUserAuth(userToken);
    })();
  }, []);



  return (
    <NavigationContainer linking={routes}>
      <Stack.Navigator initialRouteName={userAuth ? "Home" : "Landing"}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
