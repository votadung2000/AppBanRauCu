import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Button from 'react-native-button';

import GioHang from './GioHang'
import {GetApi} from './GetAPI';

class ChiTiet extends Component{
	
	render(){
	
		return (
				<View style= {{
					flex:1,
					flexDirection : 'column',
				}}>
					<View style={{flex: 3, justifyContent : 'center', alignItems:'center'}}>
						<Image 
							source={{uri: 'https://'+this.props.navigation.state.params.imgsp}}
							style={{height: 200, width: 300, resizeMode: 'center'}}>
						</Image>
					</View>
					<View style={{flex: 1, justifyContent : 'center'}}>
						<Text style={{fontWeight: 'bold', color: 'black',fontSize:23, textAlign: 'center', }}>{this.props.navigation.state.params.tensp}</Text>
					</View>
					<View style={{flex: 1, justifyContent : 'center'}}>
						<Text style={{color: 'black',fontSize:18, textAlign: 'center'}}>{this.props.navigation.state.params.mota}</Text>
					</View>
					<View style={{flex: 1, justifyContent : 'center'}}>
						<Text style={{fontWeight: 'bold', color: 'black',fontSize:20, textAlign: 'center'}}>
							Giá Bán: 
							<Text style={{fontWeight: 'bold', color: 'red',fontSize:25, textAlign: 'center'}}>  {this.props.navigation.state.params.giasp} VNĐ</Text>
						</Text>		
					</View>
					<View style={{flex: 2, justifyContent : 'center'}}>
						<Button
							style={{
								fontWeight:'bold',
								fontSize: 18, 
								color: 'white'
							}}
							containerStyle = {{
								padding: 8,
								marginLeft: 70,
								marginRight: 70,
								height: 40,
								borderRadius: 6,
								backgroundColor: 'red'
							}}
							onPress= {() =>{
								fetch(GetApi+'addgiohang', {
								  method: 'POST',
								  headers: {
								  Accept: 'application/json',
								  'Content-Type': 'application/json',
								  },
								  body: JSON.stringify({
								  ImgGioHang: this.props.navigation.state.params.imgsp,
								  TenGioHang: this.props.navigation.state.params.tensp,
								  GiaGioHang: this.props.navigation.state.params.giasp,
								  SoLuongGioHang: '1'
								  }),
								})
								.then((response) => response.text())
								.then((DieuKien) => {
									if(DieuKien === 'successed'){
							
									}
								})
							this.props.navigation.navigate("GioHang")
								
							}}
							
							>Thêm Vào Giỏ Hàng</Button>
					</View>
					
					
				</View>
		)
	}
}

export default class ChiTietSanPham extends Component {
	
  render() {
    return (
		<View style ={{flex: 1, backgroundColor: '#fff'}}>
			<ChiTiet navigation={this.props.navigation} parentFlatList= {this}>
							
			</ChiTiet>
			
		</View>
    );
  }
}
