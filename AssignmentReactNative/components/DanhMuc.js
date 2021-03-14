import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import {GetApi} from './GetAPI';

class DanhMuc extends Component{
	render(){
		return (
			<TouchableOpacity 
			>
				<View style= {{
					flex:1,
					alignItems : 'center',
					borderRadius: 15,
					borderWidth: 2,
					borderColor: '#66b3ff',
					margin: 30,
					marginTop: 40		
				}}>
				
					<View style={{flex: 3, justifyContent : 'center'}}>
						<Image 
							source={{uri: 'https://'+this.props.item.ImgDM}}
							style={{width: 100, height: 90, borderRadius: 15}}>
						</Image>
					</View>
					<View style={{flex: 1, justifyContent : 'center', marginTop: 20}}>
						<Text style={{width: 100, height: 60, fontWeight: 'bold', color: 'black', textAlign: 'center'}}>{this.props.item.TenDanhMuc}</Text>
					</View>
					
					
				</View>
			</TouchableOpacity >
		)
	}
}
export default class TrangChu extends Component {
	componentDidMount(){
		return fetch(GetApi+'laydanhmuc')
		  .then((response) => response.json())
		  .then((responseJson) => {
			this.setState({
			  isLoading: false,
			  dataDM: responseJson,
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
			<View style={{ flex: 0.1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
					<View style={{
						backgroundColor: '#fff',
						flexDirection : 'row',
						justifyContent : 'flex-end',
						alignItems : 'center',
						height: 78,
						borderRadius: 15
					}}> 
						
						<TouchableOpacity
							style={{flex: 4, alignItems : 'flex-end', marginRight: 10, justifyContent : 'center'}}
							underlayColor = '#1a1aff'
							onPress={this._onPressAdd}>
							 <Image style={{width: 40, height: 40, tintColor: '#66b3ff', alignItems : 'center'}}
								source={require('../img/giohang.png')}/>
						</TouchableOpacity>
					</View>
			</View>
			<View style={{
				flex:1, alignItems : 'center', backgroundColor:'fff'}}>
				<FlatList style = {{
					backgroundColor: '#fff'
				}}
					numColumns={2}
					data={this.state.dataDM}
					renderItem={({item, index}) => {
						return (
							<DanhMuc navigation={this.props.navigation}  item = {item} index= {index} parentFlatList= {this}>
							
							</DanhMuc>
						);
					}}
					keyExtractor={(item, index) => item.TenDanhMuc}
					>
				</FlatList>	
			</View>
		</View>
    );
  }
}
