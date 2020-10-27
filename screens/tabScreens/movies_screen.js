import React, { Component } from "react";
import {View, Text, StyleSheet,ScrollView, Image, Modal, SafeAreaView,TouchableOpacity , FlatList } from "react-native";
import ImageSlider from 'react-native-image-slider';
import { SliderBox } from "react-native-image-slider-box";
import { Container,Header, Left,Body, Button,Icon, Title, Content, Right  } from "native-base";

import  Ionicons from 'react-native-vector-icons/Ionicons'
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import  Entypo from 'react-native-vector-icons/Entypo'



export default class moviesScreen extends Component{

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
            {image:"https://wallpaperaccess.com/full/1494464.jpg"},
            {image:"https://source.unsplash.com/1024x768/?tree"},
            {image:"https://image.shutterstock.com/image-vector/mosaic-1024x768-600w-38646253.jpg"},
            {image:"https://1.bp.blogspot.com/-yZ5b2mGURXQ/VjxLx4yu1RI/AAAAAAAADUo/nOTQk_YkXQM/s1600/Kick-2014-Bollywood-Movie-Poster-Wallpaper.jpg"},
            {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6HdFD_fhad9qPvq_Q4Ft0yC4Pywn78BdDJQ&usqp=CAU"},
            {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ_Lch4tCl6I5a2HryzLOfkzYonjpGSajX0w&usqp=CAU"},
            {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQD1H5RBortXRMrwtP_MazgFXaLo2hxHI5mng&usqp=CAU"},
            {image:"https://4.bp.blogspot.com/-2hdT22mjlgU/VjxLBqgWDmI/AAAAAAAADTo/MSwvZDjxbzA/s1600/Ek-Villain-Bollywood-Movie-Poster-Wallpaper.jpg"},
            {image:"https://2.bp.blogspot.com/-bAk1I3tuM98/VjxKzIAm1cI/AAAAAAAADTY/3yXiuzSuo3s/s1600/Dhoom3-all-actor-Fire-HD-poster.jpg"},
            {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ_Lch4tCl6I5a2HryzLOfkzYonjpGSajX0w&usqp=CAU"},
            {image:"https://image.shutterstock.com/image-vector/mosaic-1024x768-600w-38646253.jpg"},
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
        <Content style={styles.container} >
        <View style={{ paddingVertical:5, width:'100%'}} >
        <SliderBox
          ImageComponentStyle={{ borderRadius:0}}
          sliderBoxHeight={200}
          autoplay
          paginationBoxVerticalPadding={2}
          //  paginationBoxVerticalPadding={200}
          imageLoadingColor="#2196F3"
          resizeMethod={'auto'}
          resizeMode='contain'
          images={this.state.images}
          onCurrentImagePressed={index =>
          console.warn(`image ${index} pressed`)
          }
        />
      </View>

      <View style={{marginTop:15 ,paddingHorizontal:10, paddingVertical:5, backgroundColor:'#000'}}>
        <View style={{flexDirection:'row', justifyContent:'space-between',}} >
          <Text style={{fontSize:18, fontWeight:'bold' ,color:'#fff'}} >Popular Movies</Text>
          <Icon type='FontAwesome' name='chevron-right' style={{ fontSize:20, color:'#fff'}}  />
        </View>     
        <FlatList style={{elevation:20}}
        contentContainerStyle={{ paddingVertical:10, }}
          horizontal
        data={this.state.movies} 
        keyExtractor={(item)=> {
          return new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString();  
        }}
        renderItem={({item}) =>{
        return(
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('moviedetails')}>
          <Image style={{paddingHorizontal:5, height:200, width:150, marginEnd:20, borderRadius:10, }}
          source={{ uri:item.image}}/>
          </TouchableOpacity>                      
        );}}
        />
      </View>
      <View style={{marginTop:15 ,paddingHorizontal:10, paddingVertical:5, backgroundColor:'#000'}}>
        <View style={{flexDirection:'row', justifyContent:'space-between',}} >
          <Text style={{fontSize:18, fontWeight:'bold' ,color:'#fff'}} >New Movies</Text>
          <Icon type='FontAwesome' name='chevron-right' style={{ fontSize:20, color:'#fff'}}  />
        </View>     
        <FlatList style={{elevation:20}}
        contentContainerStyle={{ paddingVertical:10, }}
          horizontal
        data={this.state.movies} 
        keyExtractor={(item)=> {
          return new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString();  
        }}
        renderItem={({item}) =>{
        return(
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('moviedetails')}>
          <Image style={{paddingHorizontal:5, height:200, width:150, marginEnd:20, borderRadius:10, }}
          source={{ uri:item.image}}/>
          </TouchableOpacity>                      
        );}}
        />
      </View>
      <View style={{marginTop:15 ,paddingHorizontal:10, paddingVertical:5, backgroundColor:'#000'}}>
        <View style={{flexDirection:'row', justifyContent:'space-between',}} >
          <Text style={{fontSize:18, fontWeight:'bold' ,color:'#fff'}} >Best Of SuperStars</Text>
          <Icon type='FontAwesome' name='chevron-right' style={{ fontSize:20, color:'#fff'}}  />
        </View>     
        <FlatList style={{elevation:20}}
        contentContainerStyle={{ paddingVertical:10, }}
          horizontal
        data={this.state.movies} 
        keyExtractor={(item)=> {
          return new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString();  
        }}
        renderItem={({item}) =>{
        return(
          <TouchableOpacity style={{ elevation:2}} >
          <Image style={{paddingHorizontal:5, height:120, width:120, marginEnd:20, borderRadius:70, borderWidth:2, borderColor:'#fff' }}
          source={{ uri:item.image}}/>
          </TouchableOpacity>                      
        );}}
        />
      </View>
      <View style={{marginTop:15 ,paddingHorizontal:10, paddingVertical:5, backgroundColor:'#000'}}>
        <View style={{flexDirection:'row', justifyContent:'space-between',}} >
          <Text style={{fontSize:18, fontWeight:'bold' ,color:'#fff'}} >Best For Kids</Text>
          <Icon type='FontAwesome' name='chevron-right' style={{ fontSize:20, color:'#fff'}}  />
        </View>     
        <FlatList style={{elevation:20}}
        contentContainerStyle={{ paddingVertical:10, }}
          horizontal
        data={this.state.movies} 
        keyExtractor={(item)=> {
          return new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString();  
        }}
        renderItem={({item}) =>{
        return(
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('moviedetails')}>
          <Image style={{paddingHorizontal:5, height:200, width:150, marginEnd:20, borderRadius:10, }}
          source={{ uri:item.image}}/>
          </TouchableOpacity>                      
        );}}
        />
      </View>
      <View style={{marginTop:15 ,paddingHorizontal:10, paddingVertical:5, backgroundColor:'#000'}}>
        <View style={{flexDirection:'row', justifyContent:'space-between',}} >
          <Text style={{fontSize:18, fontWeight:'bold' ,color:'#fff'}} >Trending Now</Text>
          <Icon type='FontAwesome' name='chevron-right' style={{ fontSize:20, color:'#fff'}}  />
        </View>     
        <FlatList style={{elevation:20}}
        contentContainerStyle={{ paddingVertical:10, }}
          horizontal
        data={this.state.movies} 
        keyExtractor={(item)=> {
          return new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString();  
        }}
        renderItem={({item}) =>{
        return(
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('moviedetails')}>
          <Image style={{paddingHorizontal:5, height:200, width:150, marginEnd:20, borderRadius:10, }}
          source={{ uri:item.image}}/>
          </TouchableOpacity>                      
        );}}
        />
      </View>
      <View style={{marginTop:15 ,paddingHorizontal:10, paddingVertical:5, backgroundColor:'#000'}}>
        <View style={{flexDirection:'row', justifyContent:'space-between',}} >
          <Text style={{fontSize:18, fontWeight:'bold' ,color:'#fff'}} >Must Watch</Text>
          <Icon type='FontAwesome' name='chevron-right' style={{ fontSize:20, color:'#fff'}}  />
        </View>     
        <FlatList style={{elevation:20}}
        contentContainerStyle={{ paddingVertical:10, }}
          horizontal
        data={this.state.movies} 
        keyExtractor={(item)=> {
          return new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString();  
        }}
        renderItem={({item}) =>{
        return(
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('moviedetails')}>
          <Image style={{paddingHorizontal:5, height:200, width:150, marginEnd:20, borderRadius:10, }}
          source={{ uri:item.image}}/>
          </TouchableOpacity>                      
        );}}
        />
      </View>
      <View style={{marginTop:15 ,paddingHorizontal:10, paddingVertical:5, backgroundColor:'#000'}}>
        <View style={{flexDirection:'row', justifyContent:'space-between',}} >
          <Text style={{fontSize:18, fontWeight:'bold' ,color:'#fff'}} >HollyWood</Text>
          <Icon type='FontAwesome' name='chevron-right' style={{ fontSize:20, color:'#fff'}}  />
        </View>     
        <FlatList style={{elevation:20}}
        contentContainerStyle={{ paddingVertical:10, }}
          horizontal
        data={this.state.movies} 
        keyExtractor={(item)=> {
          return new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString();  
        }}
        renderItem={({item}) =>{
        return(
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('moviedetails')}>
          <Image style={{paddingHorizontal:5, height:200, width:150, marginEnd:20, borderRadius:10, }}
          source={{ uri:item.image}}/>
          </TouchableOpacity>                      
        );}}
        />
      </View>
      <View style={{marginTop:15 ,paddingHorizontal:10, paddingVertical:5, backgroundColor:'#000'}}>
        <View style={{flexDirection:'row', justifyContent:'space-between',}} >
          <Text style={{fontSize:18, fontWeight:'bold' ,color:'#fff'}} >BollyWood</Text>
          <Icon type='FontAwesome' name='chevron-right' style={{ fontSize:20, color:'#fff'}}  />
        </View>     
        <FlatList style={{elevation:20}}
        contentContainerStyle={{ paddingVertical:10, }}
          horizontal
        data={this.state.movies} 
        keyExtractor={(item)=> {
          return new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString();  
        }}
        renderItem={({item}) =>{
        return(
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('moviedetails')}>
          <Image style={{paddingHorizontal:5, height:200, width:150, marginEnd:20, borderRadius:10, }}
          source={{ uri:item.image}}/>
          </TouchableOpacity>                      
        );}}
        />
      </View>
        </Content>
        </Container>
        )
      }
}



const styles= StyleSheet.create({
    container: {
        // flex: 1,
        paddingVertical:2,
        // marginBottom:50,
        backgroundColor:'#333333'
      }
});

