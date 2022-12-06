import React from 'react';  
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';  
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import FirstScreen from './FirstScreen';
import LoginScreen from './LoginScreen';
import Dashboard from "./Dashboard";

const navigator = createStackNavigator(
  {
    Login: LoginScreen,
    Dash: Dashboard,
    First: FirstScreen
    
    
  },
  {
    initialRouteName: 'First',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
