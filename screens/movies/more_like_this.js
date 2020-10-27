import React, { Component } from "react";
import {View, Text, StyleSheet,ScrollView, Image, Modal, SafeAreaView,TouchableOpacity, FlatList, ImageBackground  } from "react-native";
import ImageSlider from 'react-native-image-slider';
import { Container,Header, Left,Body, Button,Icon, Title, Content, Right  } from "native-base";

import  Ionicons from 'react-native-vector-icons/Ionicons'
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import  Entypo from 'react-native-vector-icons/Entypo'



export default class moreLikeThis extends Component{

    constructor(props) {
        super(props);
        this.state = {
          images: [
            // "https://source.unsplash.com/1024x768/?girl",
            // "https://source.unsplash.com/1024x768/?tree",
            // "https://image.shutterstock.com/image-vector/mosaic-1024x768-600w-38646253.jpg",
            "https://1.bp.blogspot.com/-yZ5b2mGURXQ/VjxLx4yu1RI/AAAAAAAADUo/nOTQk_YkXQM/s1600/Kick-2014-Bollywood-Movie-Poster-Wallpaper.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQj3O5-XX_ttN6onigYYIyLggWA_ylVTQf8IA&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6HdFD_fhad9qPvq_Q4Ft0yC4Pywn78BdDJQ&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQD1H5RBortXRMrwtP_MazgFXaLo2hxHI5mng&usqp=CAU",
            "https://wallpaperaccess.com/full/1494464.jpg",
            "https://2.bp.blogspot.com/-bAk1I3tuM98/VjxKzIAm1cI/AAAAAAAADTY/3yXiuzSuo3s/s1600/Dhoom3-all-actor-Fire-HD-poster.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ_Lch4tCl6I5a2HryzLOfkzYonjpGSajX0w&usqp=CAU",
            "https://4.bp.blogspot.com/-2hdT22mjlgU/VjxLBqgWDmI/AAAAAAAADTo/MSwvZDjxbzA/s1600/Ek-Villain-Bollywood-Movie-Poster-Wallpaper.jpg"
          ],
          movies:[
            {image:"https://wallpaperaccess.com/full/1494464.jpg", time:'30 sec', name:'trailer 1'},
            {image:"https://source.unsplash.com/1024x768/?tree",time:'30 sec', name:'trailer 2'},
            {image:"https://image.shutterstock.com/image-vector/mosaic-1024x768-600w-38646253.jpg",time:'30 sec', name:'trailer 3'},
            {image:"https://1.bp.blogspot.com/-yZ5b2mGURXQ/VjxLx4yu1RI/AAAAAAAADUo/nOTQk_YkXQM/s1600/Kick-2014-Bollywood-Movie-Poster-Wallpaper.jpg",time:'30 sec', name:'trailer 4'},
            {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6HdFD_fhad9qPvq_Q4Ft0yC4Pywn78BdDJQ&usqp=CAU",time:'30 sec', name:'trailer 5'},
            {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ_Lch4tCl6I5a2HryzLOfkzYonjpGSajX0w&usqp=CAU",time:'30 sec', name:'trailer 6'},
            {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQD1H5RBortXRMrwtP_MazgFXaLo2hxHI5mng&usqp=CAU",time:'30 sec', name:'trailer 7'},
            {image:"https://4.bp.blogspot.com/-2hdT22mjlgU/VjxLBqgWDmI/AAAAAAAADTo/MSwvZDjxbzA/s1600/Ek-Villain-Bollywood-Movie-Poster-Wallpaper.jpg",time:'30 sec', name:'trailer 8'},
            {image:"https://2.bp.blogspot.com/-bAk1I3tuM98/VjxKzIAm1cI/AAAAAAAADTY/3yXiuzSuo3s/s1600/Dhoom3-all-actor-Fire-HD-poster.jpg",time:'30 sec', name:'trailer 9'},
            {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ_Lch4tCl6I5a2HryzLOfkzYonjpGSajX0w&usqp=CAU",time:'30 sec', name:'trailer 10'},
            {image:"https://image.shutterstock.com/image-vector/mosaic-1024x768-600w-38646253.jpg",time:'30 sec', name:'trailer 11'},
          ],
          tvshows:[
            {image:"https://wallpaperaccess.com/full/1494464.jpg"},
          ],
          webseries:[
            {image:"https://wallpaperaccess.com/full/1494464.jpg"},
          ],
    
        };
      }

render() {

return (
    <Container>
        <Header style={{backgroundColor:'#000'}} >
            <Left>
                <Button transparent style={{}} onPress={()=>{this.props.navigation.goBack()}}  >
                     <Icon type='MaterialIcons' name='arrow-back' style={{fontSize:30, color:'#fff'}} />
                </Button>
            </Left>
            <Body  >           
                <Text style={{color:'#fff', fontSize:22, fontWeight:'bold'}}>U will Also Like</Text>
            </Body>
        </Header>
        <Content style={{marginTop:15 ,paddingHorizontal:10, paddingVertical:5, backgroundColor:'#000'}} >
            <FlatList style={{elevation:20}}
            contentContainerStyle={{ paddingVertical:10,}}
            numColumns={2}
            data={this.state.movies} 
            keyExtractor={(item)=> {
            return new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString();  
            }}
            renderItem={({item}) =>{
            return(
            <TouchableOpacity style={{paddingHorizontal:5,paddingHorizontal:5, marginEnd:10, borderRadius:40, marginBottom:10}}>
                <ImageBackground style={{ height:150, width:190, borderRadius:40,}}
                    source={{ uri:item.image}}>
                    <Text style={{ fontSize:15, top:5, alignSelf:'flex-end', color:'#f2f2f2', paddingHorizontal:10}}>{item.time}</Text>
                    <View style={{ flexDirection:'row', justifyContent:'space-between', top:100, paddingHorizontal:10 , }} >
                    <Icon type='FontAwesome5' name='play' style={{fontSize:15, color:'#ccc'}} />
                    <Text style={{ fontSize:15, fontWeight:'bold', color:'#ccc'}} >{item.name}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>                      
            );}}
            />
        </Content>
        </Container>
        )
      }
}



const styles= StyleSheet.create({
    
});

