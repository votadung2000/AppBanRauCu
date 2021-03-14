import React, { Component } from 'react';
import { Text, View, Image, TextInput, Alert, AsyncStorage } from 'react-native';
import { GetApi } from './GetAPI';

import Button from 'react-native-button';


export default class Login extends Component {

	constructor(props) {
		super(props)
		this.state = {
			TenUser: '',
			PassUser: '',
			Email: ''
		};
	}
	storeData = async () => {
		try {
			await AsyncStorage.setItem('@storage_Key', this.state.TenUser);
			this.props.navigation.navigate('Home');
		} catch (e) {
			// saving error
		}
	}


	render() {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'white' }}>
				<View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
					<Text style={{ fontSize: 26, marginTop: 30, fontWeight: 'bold' }}>Đăng Nhập</Text>
				</View>
				<View style={{ flex: 8 }}>
					<TextInput style={{
						height: 60,
						width: 300,
						borderBottomColor: 'gray',
						marginLeft: 30,
						marginRight: 30,
						marginTop: 20,
						marginBottom: 10,
						borderBottomWidth: 1,
						fontSize: 16
					}}
						onChangeText={(text) => this.setState({ TenUser: text })}
						placeholder="Nhập tên người dùng"
						value={this.state.TenUser}
					/>

					<TextInput style={{
						height: 60,
						width: 300,
						borderBottomColor: 'gray',
						marginLeft: 30,
						marginRight: 30,
						marginTop: 20,
						marginBottom: 10,
						borderBottomWidth: 1,
						fontSize: 16
					}}
						onChangeText={(text) => this.setState({ PassUser: text })}
						placeholder="Mật khẩu người dùng"
						value={this.state.PassUser}
					/>

					<Button style={{
						fontSize: 18,
						color: 'white'
					}}
						containerStyle={{
							padding: 8,
							marginLeft: 70,
							marginRight: 70,
							height: 40,
							borderRadius: 6,
							backgroundColor: 'mediumseagreen',
							marginTop: 30
						}}

						onPress={() => {
							if (this.state.TenUser.length == 0 || this.state.PassUser.length == 0) {
								alert("Nhập đầy đủ thông tin");
								return;
							}

							return fetch(GetApi + 'dangnhap/' + this.state.TenUser + '/' + this.state.PassUser)
								.then((response) => response.json())
								.then((responseJson) => {
									this.setState({
										isLoading: false,
										dataLogin: responseJson,
									}, function () {
										if (responseJson.length === 1) {

											this.storeData()
											//Alert.alert("Thông báo", 'Đăng nhập thành công!');

										} else {
											alert('Đăng nhập thất bại!!');
										}
									});

								})
								.catch((error) => {
									console.error(error);
								});
						}}
					>
						Save
			</Button>
				</View>
			</View>
		);
	}
}
