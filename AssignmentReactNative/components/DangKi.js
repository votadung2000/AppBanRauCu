import React, { Component } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import {GetApi} from './GetAPI';

import Button from 'react-native-button';

export default class DangKi extends Component {
	constructor(props) {
    super(props)
    this.state = {
    	
    };
    
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'white' }}>
		<Button style={{
			fontSize: 18, 
			color: 'white'
		}}
			containerStyle = {{
				padding: 8,
				marginLeft: 70,
				marginRight: 70,
				height: 40,
				borderRadius: 6,
				backgroundColor: 'mediumseagreen'
			}}

			onPress= {() =>{
				if (this.state.TenUser.length == 0 || this.state.PassUser.length == 0) {
					alert("Nhập đầy đủ thông tin");
					return;
				}
				fetch(GetApi+'adduser', {
				  method: 'POST',
				  headers: {
				  Accept: 'application/json',
				  'Content-Type': 'application/json',
				  },
				  body: JSON.stringify({
				  TenUser: this.state.TenUser,
				  PassUser: this.state.PassUser,
				  Email: this.state.Email
				  }),
				})
				.then((response) => response.text())
				.then((DieuKien) => {
					if(DieuKien === 'successed'){
						alert("Thêm thành công!!");
					}
				})
			}}
		>
			Save
		</Button>
      </View>
    );
  }
}
