import React, { Component } from 'react';
import { Text, View, Image, TextInput, Alert, TouchableOpacity, AsyncStorage } from 'react-native';
import { GetApi } from './GetAPI';

import Button from 'react-native-button';

export default class CaNhan extends Component {
	constructor(props) {
		super(props)
		this.state = { TenUser: '' };

	}
	removeKey = async () => {
		try {
			await AsyncStorage.removeItem('@storage_Key');
			this.props.navigation.navigate("Login");
			console.log("da xoa key");
		} catch (error) {
			// Error retrieving data
			console.log("không thể xóa key");
		}
	};
	getData = async () => {
		try {
			const value = await AsyncStorage.getItem('@storage_Key')

			if (value !== null) {
				console.log(value);
				this.setState({ TenUser: value });
			}
		} catch (e) {
			// error reading value
		}
	}

	componentDidMount() {
		this.getData();
	}
	render() {

		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'white' }}>
				<View style={{ flex: 1, marginTop: 30 }}>
					<Text style={{ fontSize: 18 }}>Chào mừng {this.state.TenUser} đến với cửa hàng của chúng tôi</Text>
				</View>
				<View style={{ flex: 1 }}>
					<TouchableOpacity onPress={() => this.props.navigation.navigate("SuaUser")}>
						<Text style={{ fontSize: 16 }}>Chỉnh sửa hồ sơ</Text>
					</TouchableOpacity>
				</View>
				<View style={{ flex: 1, justifyContent: "flex-end", textAlign: 'center', alignItems: 'center' }}>
					<Button style={{
						fontSize: 18,
						color: 'white'
					}}
						containerStyle={{
							padding: 8,
							marginLeft: 70,
							marginRight: 70,
							height: 50,
							width: 250,
							borderRadius: 6,
							backgroundColor: 'mediumseagreen',
							marginBottom: 40
						}}

						onPress={() => {
							this.removeKey();
							Alert.alert("Thông báo", 'Đăng xuất thành công!');


						}}
					>
						Đăng Xuất
			</Button>
				</View>

			</View>

		);
	}
}
