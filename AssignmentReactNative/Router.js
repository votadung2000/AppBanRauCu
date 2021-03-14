import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View , Image } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import TrangChu from './components/TrangChu';
import DanhMuc from './components/DanhMuc';
import TimKiem from './components/TimKiem';
import ThongBao from './components/ThongBao';
import CaNhan from './components/CaNhan';


const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TrangChuNav = createStackNavigator({

  TrangChuScreen: { screen: TrangChu },
}, {
  initialRouteName: 'TrangChuScreen',
  headerMode: 'none',
});
TrangChuNav.navigationOptions = {
  tabBarLabel: 'Trang Chủ',
  tabBarIcon: ({ focused }) => {
    return  <Image style = {{width: 28, height: 28, tintColor: focused ? '#1a1aff': '#7a7a52' }} source={require('./img/home.png')} />
  }
};

const DanhMucNav = createStackNavigator({

  DanhMucScreen: { screen: DanhMuc },
}, {
  initialRouteName: 'DanhMucScreen',
  headerMode: 'none',
});
DanhMucNav.navigationOptions = {
  tabBarLabel: 'Danh Mục',
  tabBarIcon: ({ focused }) => {
    return   <Image style = {{width: 28, height: 28, tintColor: focused ? '#1a1aff': '#7a7a52'}} source={require('./img/danhmuc.png')} />
  }
};

const TimKiemNav = createStackNavigator({

  TimKiemScreen: { screen: TimKiem },
}, {
  initialRouteName: 'TimKiemScreen',
  headerMode: 'none',
});
TimKiemNav.navigationOptions = {
  tabBarLabel: 'Tìm Kiếm',
  tabBarIcon: ({ focused }) => {
    return  <Image style = {{width: 28, height: 28, tintColor: focused ? '#1a1aff': '#7a7a52'}} source={require('./img/search.png')} />
  }
};

const ThongBaoNav = createStackNavigator({

   ThongBaoScreen: { screen: ThongBao },
}, {
  initialRouteName: 'ThongBaoScreen',
  headerMode: 'none',
});
ThongBaoNav.navigationOptions = {
  tabBarLabel: 'Thông Báo',
  tabBarIcon: ({ focused }) => {
    return   <Image style = {{width: 28, height: 28, tintColor: focused ? '#1a1aff': '#7a7a52'}} source={require('./img/thongbao.png')} />
  }
};

const CaNhanNav = createStackNavigator({

  CaNhanScreen: { screen: CaNhan },
}, {
  initialRouteName: 'CaNhanScreen',
  headerMode: 'none',
});
CaNhanNav.navigationOptions = {
  tabBarLabel: 'Cá Nhân',
  tabBarIcon: ({ focused }) => {
    return   <Image style = {{width: 18, height: 28, tintColor: focused ? '#1a1aff': '#7a7a52'}} source={require('./img/canhan.png')} />
  }
};


const Router = createBottomTabNavigator({
  TrangChuNav,
  DanhMucNav,
  TimKiemNav,
  ThongBaoNav,
  CaNhanNav
 
}, {
  tabBarOptions: {
    activeTintColor: '#1a1aff',
    inactiveTintColor: '#7a7a52'
  }
})
export default Router;