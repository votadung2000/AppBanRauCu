import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Home';
import ChiTietSanPham from './components/ChiTietSanPham'
import GioHang from './components/GioHang'
import Login from './components/Login'
import SuaUser from './components/SuaUser'


import { TouchableOpacity } from 'react-native-gesture-handler';
const MainNavigator = createStackNavigator({
  Home: {
    screen: Home, navigationOptions: {
      headerShown: false,
    }
  },
  ChiTietSanPham: {
    screen: ChiTietSanPham, navigationOptions: {
      headerShown: true,
    }
  },
  GioHang: {
    screen: GioHang, navigationOptions: {
      headerShown: false,
    }
  },
  Login: {
    screen: Login, navigationOptions: {
      headerShown: false,
    }
  },
  SuaUser: {
    screen: SuaUser, navigationOptions: {
      headerShown: false,
    }
  },
});

const App = createAppContainer(MainNavigator);

export default App;