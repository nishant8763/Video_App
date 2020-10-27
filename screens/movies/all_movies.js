import React, { Component } from "react";
import {View, Text, StyleSheet,ScrollView, Image, Modal, SafeAreaView,TouchableHighlight  } from "react-native";
import ImageSlider from 'react-native-image-slider';
import { Container,Header, Left,Body, Button,Icon, Title, Content, Right  } from "native-base";

import  Ionicons from 'react-native-vector-icons/Ionicons'
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import  Entypo from 'react-native-vector-icons/Entypo'



export default class allMoviesScreen extends Component{
render() {
return (
    <Container>
         <Header style={{backgroundColor:'#000'}} >
            <Left>
                <Button transparent style={{}} onPress={()=>{this.props.navigation.toggleDrawer()}}  >
                     <Icon type='Entypo' name='menu' style={{fontSize:30, color:'#fff'}} />
                </Button>
            </Left>
            <Body style={{marginStart:85, flexDirection:'row'}}  >           
                <Image resizeMode='contain' style={{ height:40, width:120, }} source={require('../../assets/orocast-logo.png')}  />
                
            </Body>
            <Right style={{alignItems:'flex-end',}}>
            {/* <Icon type='MaterialIcons' name='cast-connected' style={{marginEnd:25 ,fontSize:30, color:'#fff',  }} /> */}
            <Icon type='FontAwesome' name='search' style={{ fontSize:30, color:'#fff'}} />
            </Right>
        </Header>
        <Content style={{backgroundColor:'f2f2f2'}} >
        <Text>this is All Movies screen</Text>
    </Content>
        </Container>
        )
      }
}



const styles= StyleSheet.create({
    
});

