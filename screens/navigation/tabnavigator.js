import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React, { Component } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import  FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import  Fontisto from 'react-native-vector-icons/Fontisto'
import home from "../tabScreens/home_screen";
import moviesScreen from "../tabScreens/movies_screen";
import sportsScreen from "../tabScreens/sports_screen";
import tvScreen from "../tabScreens/tv_screen";

const Tab = createMaterialBottomTabNavigator();
const tabnavigator= () => { 
    return (
        <Tab.Navigator
        inactiveColor="#f2f2f2"
        initialRouteName="home"
        // tabBarOptions={{
        //   activeTintColor: '#cc0000',
        // }}
        barStyle={{ backgroundColor: '#000' }}
      >
        <Tab.Screen
          name="home"
          component={home}
          options={{
            tabBarLabel:'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={'#f2f2f2'} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="movies"
          component={moviesScreen}
          options={{
            tabBarLabel: 'Movies',
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="film" color={'#f2f2f2'} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="tv"
          component={tvScreen}
          options={{
            tabBarLabel: 'TV',
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="tv" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="sports"
          component={sportsScreen}
          options={{
            tabBarLabel: 'Sports',
            tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="football-ball" color={color} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    );
}
export default tabnavigator;