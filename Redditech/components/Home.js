import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Best } from "./Best";
import { New, Random, Top } from "./Top";
import { Hot } from "./Hot";
import { Profile } from "./Profile";

const Tab = createBottomTabNavigator();
const Home = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Best" component={Best} />
        <Tab.Screen name="Hot" component={Hot} />
        <Tab.Screen name="New" component={Top} />
        <Tab.Screen name="Profile" component={Profile}/>

      </Tab.Navigator>
  );
};

export { Home };
