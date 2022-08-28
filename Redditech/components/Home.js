import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Best } from "./Best";
import { Top } from "./Top";
import { New } from "./New";
import { Hot } from "./Hot";
import { Profile } from "./Profile";
import { SearchPage } from "./SearchPage";

const Tab = createBottomTabNavigator();
const Home = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Best" component={Best} />
        <Tab.Screen name="Hot" component={Hot} />
        <Tab.Screen name="Seach"  component={SearchPage}/>
        <Tab.Screen name="Top" component={Top} />
        <Tab.Screen name="New" component={New}/>
        <Tab.Screen name="Profile" component={Profile}/>

      </Tab.Navigator>
  );
};

export { Home };
