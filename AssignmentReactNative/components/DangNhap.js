import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput
, StatusBar, TouchableOpacity, KeyboardAvoidingView
, TouchableWithoutFeedback, SafeAreaView  } from 'react-native';

//import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

export default class DangNhap extends Component {
  render() {
    return (
      <View style={styles.container}>
			<View style={styles.logoContainer}>
				
					
				
			</View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
	container : {
		flex: 1,
		backgroundColor: 'white',
		flexDirection: 'column'
	},
	logoContainer : {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	logo : {
		width: 256,
		height: 112
	}
})
