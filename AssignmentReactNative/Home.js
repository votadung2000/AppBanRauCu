import { createAppContainer } from 'react-navigation';
import { createStackNavigator, headerMode } from 'react-navigation-stack';
import Router from './Router';
import { Component } from 'react';
import { View } from 'react-native';
const MainNavigator = createStackNavigator({
  Home: {
    screen: Router, navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerMode
    },
  }
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
});
const Home = createAppContainer(MainNavigator);

export default Home;

