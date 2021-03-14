import React, { Component } from 'react';
import { Text, View, Image, TextInput } from 'react-native';

export default class TimKiem extends Component {
	
	constructor(props) {
    super(props);
    this.state = {
		
    };
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:'#fff' }}>
		<View style={{flex:2}}>
			<Text style={{fontSize: 26, marginTop: 30, fontWeight:'bold'}}>Hồ sơ người dùng</Text>
		</View>
		<View style={{flex:8}}>
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
				onChangeText={(text) => this.setState({ Email: text })}
				placeholder="Email người dùng"
				value={this.state.Email}
			/>
		</View>
      </View>
    );
  }
}
