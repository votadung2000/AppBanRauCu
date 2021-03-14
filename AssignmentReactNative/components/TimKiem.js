import React, { Component } from 'react';
import { Text, View, Image, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import Button from 'react-native-button';
import {GetApi} from './GetAPI';


class SearchItem extends Component{
	render(){
		return (
			<TouchableOpacity 
				onPress = { () =>this.props.navigation.navigate("ChiTietSanPham", {masp: this.props.item.MaSP, imgsp:this.props.item.ImgSP, tensp: this.props.item.TenSP, giasp: this.props.item.GiaBan, mota: this.props.item.MoTa})}
			>
				<View style= {{
					flex:1,
					flexDirection : 'column',
					alignItems : 'center',
					width: 110,
					height: 170,
					borderRadius: 15,
					borderWidth: 2,
					borderColor: '#66b3ff',
					margin: 4
					
				}}>
					<Image 
						source={{uri: 'https://'+this.props.item.ImgSP}}
						style={{width: 87, height: 90, borderRadius: 15}}>
					</Image>
					<Text style={{width: 87, height: 45, fontWeight: 'bold', color: 'black', textAlign: 'center'}}>{this.props.item.TenSP}</Text>
					<Text style={{width: 87, height: 25, fontWeight: 'bold', color: 'red', textAlign: 'center'}}>{this.props.item.GiaBan} VNĐ</Text>
				</View>
			</TouchableOpacity >
		)
	}
}

export default class TimKiem extends Component {
	constructor(props) {
    super(props);
    this.state = {
		TenSP:''
    };
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection : 'column', backgroundColor: '#fff'}}>
        <View style={{ flex: 2, justifyContent: "center", alignItems: "center", flexDirection : 'row' }}>
			<View style={{ flex: 7, justifyContent: "center", alignItems: "center" }}>
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
					onChangeText={(text) => this.setState({ TenSP: text })}
					placeholder="......Search......"
					value={this.state.TenSP}
				/>
			</View>
			<View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
				<Button style={{
					fontSize: 14, 
					color: 'white'
				}}
					containerStyle = {{
						padding: 8,
						marginLeft: 70,
						marginRight: 70,
						height: 40,
						width: 90,
						borderRadius: 6,
						backgroundColor: '#7a7a52',
						marginTop: 30
					}}

					onPress= {() =>{
						if (this.state.TenSP.length == 0) {
							alert("Nhập thông tin");
							return;
						}
						
						return fetch(GetApi+'search/'+this.state.TenSP)
						  .then((response) => response.json())
						  .then((responseJson) => {
							this.setState({
							  isLoading: false,
							  dataSearch: responseJson,
							}, function(){
								if(responseJson.length === 1){
									
									
								}else{
									
								}
							});
						 
						  })
						  .catch((error) =>{
							console.error(error);
						});
					}}
				>
					Tìm Kiếm
				</Button>
			</View>
			
		</View>
		<View style={{ flex: 8, justifyContent: "center", alignItems: "center"}}>
				<View style={{
					borderRadius: 15,
					backgroundColor: '#fff',
					flexDirection : 'column',
					justifyContent : 'center',
					alignItems : 'center',
					height: 550,
					width:400
					}}> 
					<View style={{height: 350, alignItems : 'center'}}>
						<FlatList style = {{
							backgroundColor: '#fff'
							
						}}
							numColumns={2}
							data={this.state.dataSearch}
							renderItem={({item, index}) => {
								return (
									<SearchItem navigation={this.props.navigation}  item = {item} index= {index} parentFlatList= {this}>
									
									</SearchItem>
								);
							}}
							keyExtractor={(item, index) => item.TenSP}
							>
						</FlatList>	
						
					</View>
					
				</View>
		</View>
      </View>
    );
  }
}
