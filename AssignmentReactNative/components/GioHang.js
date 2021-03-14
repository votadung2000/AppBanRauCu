import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, TextInput, ScrollView, FlatList, TouchableOpacity, Alert } from 'react-native';
import Button from 'react-native-button';
import Swipeout from 'react-native-swipeout';

import {GetApi} from './GetAPI';

class GioHangCT extends Component{
	constructor(props) {
    super(props);
    this.state = {
		isLoading:true,
		MaGioHang: '',
		ImgGioHang: '',
		TenGioHang: '',
		GiaGioHang: '',
		SoLuongGioHang: 1
    };
  }
	render(){
	const swipeSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {
        if (this.setState.activeRowKey != null ) {
          this.setState({ activeRowKey: null });
        }
      },
      onOpen: (secId, rowId, direction) => {
        
      },
      right: [
        {
          onPress: () => {
            const deletingRow = this.state.activeRowKey;
            Alert.alert(
                'Alert',
                'Bạn có chắc muốn xóa không??',
                [
                  {text: 'Không', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'Có', onPress: () =>{
                    fetch(GetApi+'deleteGiohang', {
                               method: 'POST',
                               headers: {
                               Accept: 'application/json',
                               'Content-Type': 'application/json',
                               },
                               body: JSON.stringify({
                                MaGioHang: this.props.item.MaGioHang
                               }),
                            })
							.then((response) => response.text())
							.then((DieuKien) => {
								if(DieuKien === 'successed'){
									return fetch(GetApi+'laygiohang')
								  .then((response) => response.json())
								  .then((responseJson) => {
									this.setState({
									  isLoading: false,
									  giohang: responseJson,
									}, function(){

									});
								 
								  })
								  .catch((error) =>{
									console.error(error);
								});
								}
							})
                        
                          
                  }}
                ]
              )

          },
          text: "Delete", type: 'delete'
        }
      ],
      rowId: this.props.MaGioHang,
      sectionId: 1
    };
		return (
			<Swipeout {...swipeSettings}>
				<View style= {{
					flex:1,
					flexDirection : 'row',
					padding: 10, backgroundColor:'#fff'
				}}>
					<View style={{flex: 1, justifyContent : 'center', alignItems:'center'}}>
						<Image 
							source={{uri: 'https://'+this.props.item.ImgGioHang}}
							style={{height: 150, width: 100, resizeMode: 'center'}}>
						</Image>
					</View>
					<View style={{flex: 2, justifyContent : 'center',flexDirection : 'column', alignItems:'center'}}>
						<View style={{flex: 2, justifyContent : 'center',flexDirection : 'column'}}>
							<Text style={{fontWeight: 'bold', color: 'black',fontSize:21, textAlign: 'center',marginBottom: 10}}>{this.props.item.TenGioHang}</Text>
							<Text style={{fontWeight: 'bold', color: 'red',fontSize:23, textAlign: 'center', }}>{this.props.item.GiaGioHang} VNĐ</Text>
						</View>
						
						<View style={{flex: 1, justifyContent : 'center',flexDirection : 'row'}}>
							<Button style={{
								fontSize: 18, 
								color: 'white'
							}}
								containerStyle = {{
									padding: 8,
									marginLeft: 20,
									marginRight: 20,
									height: 40,
									width: 30,
									borderRadius: 6,
									backgroundColor: 'mediumseagreen'
								}}
								onPress = {() => {
									if(this.props.item.SoLuongGioHang >0 && this.props.item.SoLuongGioHang < 5){
										this.props.item.SoLuongGioHang = this.props.item.SoLuongGioHang - 1
									}else{
										this.props.item.SoLuongGioHang = this.props.item.SoLuongGioHang 
									}
									
									
									fetch(GetApi+'suagiohang', {
									  method: 'POST',
									  headers: {
									  Accept: 'application/json',
									  'Content-Type': 'application/json',
									  },
									  body: JSON.stringify({
										MaGioHang: this.props.item.MaGioHang,
										ImgGioHang: this.props.item.ImgGioHang,
										TenGioHang: this.props.item.TenGioHang,
										GiaGioHang: this.props.item.GiaGioHang,
										SoLuongGioHang: this.props.item.SoLuongGioHang
									  }),
									})
									.then((response) => response.text())
									.then((DieuKien) => {
										if(DieuKien === 'successed'){
											return fetch(GetApi+'laygiohang')
										  .then((response) => response.json())
										  .then((responseJson) => {
											this.setState({
											  isLoading: false,
											  giohang: responseJson,
											}, function(){

											});
										 
										  })
										  .catch((error) =>{
											console.error(error);
										});
										}
									})
								}}
							>
								-
							</Button>
							<Button style={{
								fontSize: 18, 
								color: 'white'
							}}
								containerStyle = {{
									padding: 8,
									marginLeft: 20,
									marginRight: 20,
									height: 40,
									width: 30,
									borderRadius: 6,
									backgroundColor: 'mediumseagreen'
								}}


							>
								
								{this.props.item.SoLuongGioHang}
							</Button>
							<Button style={{
								fontSize: 18, 
								color: 'white'
							}}
								containerStyle = {{
									padding: 8,
									marginLeft: 20,
									marginRight: 20,
									height: 40,
									width: 30,
									borderRadius: 6,
									backgroundColor: 'mediumseagreen'
								}}
							onPress = {() => {
									if(this.props.item.SoLuongGioHang >0 && this.props.item.SoLuongGioHang < 5){
										this.props.item.SoLuongGioHang = this.props.item.SoLuongGioHang + 1
									}else{
										this.props.item.SoLuongGioHang = this.props.item.SoLuongGioHang 
									}
									
									
									fetch(GetApi+'suagiohang', {
									  method: 'POST',
									  headers: {
									  Accept: 'application/json',
									  'Content-Type': 'application/json',
									  },
									  body: JSON.stringify({
										MaGioHang: this.props.item.MaGioHang,
										ImgGioHang: this.props.item.ImgGioHang,
										TenGioHang: this.props.item.TenGioHang,
										GiaGioHang: this.props.item.GiaGioHang,
										SoLuongGioHang: this.props.item.SoLuongGioHang
									  }),
									})
									.then((response) => response.text())
									.then((DieuKien) => {
										if(DieuKien === 'successed'){
											return fetch(GetApi+'laygiohang')
										  .then((response) => response.json())
										  .then((responseJson) => {
											this.setState({
											  isLoading: false,
											  giohang: responseJson,
											}, function(){

											});
										 
										  })
										  .catch((error) =>{
											console.error(error);
										});
										}
									})
								}}

							>
								+
							</Button>
							
						</View>
					</View>
				</View>
				
			</Swipeout>
		)
	}
}

export default class ChiTietSanPham extends Component {
	componentDidMount(){
		this.LoadGioHang();
	}
	
	LoadGioHang(){
		return fetch(GetApi+'laygiohang')
		  .then((response) => response.json())
		  .then((responseJson) => {
			this.setState({
			  isLoading: false,
			  giohang: responseJson,
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
		isLoading: true,
    };
  }
  refreshing() {
   this.LoadGioHang();
  }
  render() {
    return (
		<View style ={{flex: 8, backgroundColor: '#fff'}}>
			<View style ={{flex: 7, backgroundColor: '#fff'}}>
				<FlatList 
					refreshing={this.state.isLoading}
					onRefresh={() => { this.refreshing() }}
					data={this.state.giohang}
						  renderItem= {({item, index}) => {
							return (
							  <GioHangCT item={item} index={index}>

							  </GioHangCT>);
						  }}
						  keyExtractor={(item, index) => item.MaGioHang}
						  >
						  
				</FlatList>
			</View>
			
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<Button style={{
					fontSize: 24, 
					color: 'white'
				}}
					containerStyle = {{
						textAlign: 'center',
						fontWeight: 'bold',
						padding: 8,
						height: 50,
						width: 250,
						borderRadius: 6,
						backgroundColor: 'mediumseagreen',
						
					}}
					onPress ={ ()=>{
						
						this.props.navigation.navigate("Home");
					}}

				>
					
					Tiếp tục mua hàng
				</Button>
			</View>
		</View>
    );
  }
}
