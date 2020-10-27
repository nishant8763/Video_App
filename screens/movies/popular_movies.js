import React, { Component } from "react";
import {View, Text, StyleSheet,ScrollView, Image, Modal, SafeAreaView,TouchableHighlight  } from "react-native";
import ImageSlider from 'react-native-image-slider';
import { Container,Header, Left,Body, Button,Icon, Title, Content, Right  } from "native-base";

import  Ionicons from 'react-native-vector-icons/Ionicons'
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import  Entypo from 'react-native-vector-icons/Entypo'



export default class popularMovies extends Component{
render() {

return (
    <Container>
        <Header style={{backgroundColor:'#000'}} >
            <Left>
                <Button transparent style={{}} onPress={()=>{this.props.navigation.goBack()}}  >
                     <Icon type='MaterialIcons' name='arrow-back' style={{fontSize:30, color:'#fff'}} />
                </Button>
            </Left>
            <Body >           
                <Text style={{color:'#fff', fontSize:22,}}>Popular Movies</Text>
            </Body>

        </Header>
        <Content style={{backgroundColor:'f2f2f2'}} >
        <Text>this is popular Movies Screen</Text>
    </Content>
        </Container>
        )
      }
}



const styles= StyleSheet.create({
    
});

