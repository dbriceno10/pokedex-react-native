import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Account from "../screens/Account";
import Favorite from "../screens/Favorite";
import Pokedex from "../screens/Pokedex";

const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
    <Tab.Navigator>
       <Tab.Screen name='Favorite' component={Favorite}/>
       <Tab.Screen name='Pokedex' component={Pokedex}/>
      <Tab.Screen name='Account' component={Account}/>
    </Tab.Navigator>
  );
}
