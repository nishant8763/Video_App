import React from 'react';
import { NavigationContainer,  } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";


import tabnavigator from "./tabnavigator";
import Drawerscreen from "./drawerScreen";
import subscribtion from "../drawerScreens/subscribtion";
import liveStream from "../drawerScreens/liveStream";

const stack = createDrawerNavigator();
const drawer = createDrawerNavigator();


export default function DrawerNavigation() {

  return (              
    <drawer.Navigator drawerContent={props=> <Drawerscreen{...props}/> } openByDefault={false} >
        <drawer.Screen name='tabnavigator' component={tabnavigator} />
        <drawer.Screen name='subscribtion' component={subscribtion} options={{swipeEnabled:false}} />
        <drawer.Screen name='liveStream' component={liveStream} options={{swipeEnabled:false}} />
      </drawer.Navigator>
  );

  }