import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import ChiTietSanPham from './ChiTietSanPham'
import GioHang from './GioHang'
import {GetApi} from './GetAPI';

export default class TrangChu extends Component {
	componentDidMount(){
		return fetch(GetApi+'laysp')
		  .then((response) => response.json())
		  .then((responseJson) => {
			this.setState({
			  isLoading: false,
			  dataSP: responseJson,
			}, function(){

			});
		 
		  })
		  .catch((error) =>{
			console.error(error);
		});
	}
	constructor(props) {
    super(props);
    this.state = {
		
    };
  }
  render() {
    return (
		<View style ={{flex: 1, padding: 20, backgroundColor: '#fff'}}>
			<ScrollView>
				<View style={{ flex: 2, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
					<View style={{
						backgroundColor: '#fff',
						flexDirection : 'row',
						justifyContent : 'flex-end',
						alignItems : 'center',
						height: 78,
						borderRadius: 15
					}}> 
						<View style ={{flex: 6, alignItems : 'flex-end'}}>
							<Image style={{width: 100, height: 100, justifyContent : 'center', borderRadius: 15}} source={require('../img/logotiki.png')}/>
						</View>
						<TouchableOpacity
							style={{flex: 4, alignItems : 'flex-end', marginRight: 10, justifyContent : 'center'}}
							underlayColor = '#1a1aff'
							onPress={() => this.props.navigation.navigate("GioHang")}>
							 <Image style={{width: 40, height: 40, tintColor: '#66b3ff', alignItems : 'center'}}
								source={require('../img/giohang.png')}/>
						</TouchableOpacity>
					</View>
					<View style={{
						flex: 1,
						backgroundColor: '#e6f2ff',
						flexDirection : 'row',
						justifyContent : 'center',
						alignItems : 'center',
						height: 78,
						marginTop: 10,
						borderRadius: 15
					}}> 
					
						<View style={{
							flex: 1,
							backgroundColor: '#fff',
							flexDirection : 'row',
							justifyContent : 'center',
							alignItems : 'center',
							height: 60,
							borderRadius: 15
							
						}}> 
							<TextInput style={{
								flex: 1,
								borderBottomColor: '#000',
								marginLeft: 30,
								marginRight: 30,
								fontSize: 18,
								alignItems : 'center'
							}}
							placeholder="Bạn tìm gì hôm nay ... "
							/>
						</View>
					</View>
				</View>
				
				<View style={{
					flexDirection : 'row',
					justifyContent : 'center',
					alignItems : 'center',
					height: 150,
					marginTop:20
					}}> 
					<Image style={{width: '100%', height: '100%', alignItems : 'center'}}
								source={require('../img/slide1.png')}/>
				</View>
				
				<View style={{
					
					borderRadius: 15,
					backgroundColor: '#fff',
					flexDirection : 'column',
					justifyContent : 'center',
					alignItems : 'center',
					height: 240,
					marginTop:20
					}}> 
					<View style={{height: 220, alignItems : 'center'}}>
						<Text style = {{fontSize: 23, color: '#66b3ff', height:40, fontWeight: 'bold'}}> Hàng Tiêu Dùng </Text>
						<FlatList style = {{
							backgroundColor: '#fff'
							
						}}
							horizontal={true}
							data={this.state.dataSP}
							renderItem={({item, index}) => {
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
								);
							}}
							keyExtractor={(item, index) => item.TenSP}
							>
						</FlatList>	
						
					</View>
					
				</View>
				<View style={{
					
					borderRadius: 15,
					backgroundColor: '#fff',
					flexDirection : 'column',
					justifyContent : 'center',
					alignItems : 'center',
					height: 240,
					marginTop:20
					}}> 
					<View style={{height: 220, alignItems : 'center'}}>
						<Text style = {{fontSize: 23, color: '#66b3ff', height:40, fontWeight: 'bold'}}> Đồ Dùng Cá Nhân </Text>
						<FlatList style = {{
							backgroundColor: '#fff'
							
						}}
							horizontal={true}
							data={this.state.dataSP}
							renderItem={({item, index}) => {
								return (
									<HorizontalFlatListItem navigation={this.props.navigation}  item = {item} index= {index} parentFlatList= {this}>
									
									</HorizontalFlatListItem>
								);
							}}
							keyExtractor={(item, index) => item.TenSP}
							>
						</FlatList>	
						
					</View>
					
				</View>
			</ScrollView>
		</View>
    );
  }
}
