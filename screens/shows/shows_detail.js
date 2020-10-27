import React, { Component } from "react";
import {View, Text, StyleSheet, Modal, TouchableOpacity, Image, FlatList } from "react-native";
import { Container,Header, Left,Body,Icon,Button, Title, Content, Right  } from "native-base";

export default class showDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {
          movies:[
            {image:"https://wallpaperaccess.com/full/1494464.jpg", name:'season1'},
            {image:"https://source.unsplash.com/1024x768/?tree", name:'season2'},
            {image:"https://image.shutterstock.com/image-vector/mosaic-1024x768-600w-38646253.jpg", name:'season1'},
            {image:"https://1.bp.blogspot.com/-yZ5b2mGURXQ/VjxLx4yu1RI/AAAAAAAADUo/nOTQk_YkXQM/s1600/Kick-2014-Bollywood-Movie-Poster-Wallpaper.jpg", name:'season1'},
            {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6HdFD_fhad9qPvq_Q4Ft0yC4Pywn78BdDJQ&usqp=CAU", name:'season1'},
            {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ_Lch4tCl6I5a2HryzLOfkzYonjpGSajX0w&usqp=CAU", name:'season1'},
            {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQD1H5RBortXRMrwtP_MazgFXaLo2hxHI5mng&usqp=CAU", name:'season1'},
            {image:"https://4.bp.blogspot.com/-2hdT22mjlgU/VjxLBqgWDmI/AAAAAAAADTo/MSwvZDjxbzA/s1600/Ek-Villain-Bollywood-Movie-Poster-Wallpaper.jpg", name:'season1'},
            {image:"https://2.bp.blogspot.com/-bAk1I3tuM98/VjxKzIAm1cI/AAAAAAAADTY/3yXiuzSuo3s/s1600/Dhoom3-all-actor-Fire-HD-poster.jpg", name:'season1'},
            {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ_Lch4tCl6I5a2HryzLOfkzYonjpGSajX0w&usqp=CAU", name:'season1'},
            {image:"https://image.shutterstock.com/image-vector/mosaic-1024x768-600w-38646253.jpg", name:'season1'},
          ],
         
    
        };
      }
render(){
    
    return(
    <Container>
        <Header style={{backgroundColor:'#000'}} >
            <Left>
                <Button transparent style={{}} onPress={()=>{this.props.navigation.goBack()}}  >
                     <Icon type='MaterialIcons' name='arrow-back' style={{fontSize:30, color:'#fff'}} />
                </Button>
            </Left>
            <Body style={{ flexDirection:'row'}}  >           
                <Title>Kick</Title>
            </Body>
            <Right style={{alignItems:'flex-end',}}>
            <Icon type='FontAwesome' name='search' style={{ fontSize:30, color:'#fff'}} />
            </Right>
        </Header>
        <Content style={{backgroundColor:'#333333'}} >
            <View>
                <Image resizeMode='cover' style={{ width:'98%', height:300, marginHorizontal:5, marginVertical:5 }} source={{uri:"https://1.bp.blogspot.com/-yZ5b2mGURXQ/VjxLx4yu1RI/AAAAAAAADUo/nOTQk_YkXQM/s1600/Kick-2014-Bollywood-Movie-Poster-Wallpaper.jpg" }} />
            </View>
            <View style={{ flexDirection:'row', marginHorizontal:5, marginVertical:5}}> 
            <Image resizeMode='cover' style={{ width:70, height:100, borderRadius:5,borderColor:'#fff', borderWidth:0.5, }} source={{uri:"https://1.bp.blogspot.com/-yZ5b2mGURXQ/VjxLx4yu1RI/AAAAAAAADUo/nOTQk_YkXQM/s1600/Kick-2014-Bollywood-Movie-Poster-Wallpaper.jpg" }} />  
                <View style={{ flexDirection:'column', paddingHorizontal:10}}>
                    <Text style={{color:'#fff',fontSize:20, fontWeight:'bold', paddingVertical:5 }}>Kick</Text>
                    <Text style={{color:'#f2f2f2',fontSize:14,}}>Hindi - Drama</Text>
                    <Text style={{color:'#f2f2f2',fontSize:14, paddingVertical:2}}>2018 - PG</Text>
                </View>
            </View>
            <Text style={{color:'#fff', fontSize:14, paddingHorizontal:5, paddingVertical:10}} >
            Devi Lal Singh, a typical youth with an anomalous standard of living, tries to find pleasure in whatever he does. He eventually becomes a thief and dons a new name, Devil.
            </Text>
            <Text style={{color:'#f2f2f2', fontSize:12, paddingHorizontal:5,}}>
                Starring Salman Khan, Jacqueline Fernandez, Randeep Hooda and Nawazuddin Siddiqui
            </Text>
            <View style={{ flexDirection:'row', justifyContent:'space-between', paddingHorizontal:10, paddingVertical:20}} >
                <TouchableOpacity style={{flexDirection:'row', backgroundColor:'#fff', paddingHorizontal:15, paddingVertical:12, borderRadius:10}} >
                    <Icon type='Foundation' name='download' style={{fontSize:20, color:'#000'}} />
                    <Text style={{fontSize:15, fontWeight:'bold',paddingStart:5}}>Download</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row', backgroundColor:'#fff', paddingHorizontal:15, paddingVertical:12, borderRadius:10}} >
                    <Icon type='Entypo' name='plus' style={{fontSize:20, color:'#000'}} />
                    <Text style={{fontSize:15, fontWeight:'bold', paddingStart:5}}>Watchlist</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row', backgroundColor:'#fff', paddingHorizontal:15, paddingVertical:12, borderRadius:10}} >
                    <Icon type='Ionicons' name='ios-arrow-redo-sharp' style={{fontSize:20, color:'#000'}} />
                    <Text style={{fontSize:15, fontWeight:'bold',paddingStart:5}}>  Share  </Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:15 ,paddingHorizontal:10, paddingVertical:5}}>
            <View style={{flexDirection:'row', justifyContent:'space-between',}} >
            <Text style={{fontSize:18, fontWeight:'bold' ,color:'#fff'}} >Seasons</Text>
            <Icon type='FontAwesome' name='chevron-right' style={{ fontSize:20, color:'#fff'}} onPress={()=>this.props.navigation.navigate('seasons')} />
            </View>     
            <FlatList style={{elevation:20}}
            contentContainerStyle={{ paddingVertical:10, }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={this.state.movies} 
            keyExtractor={(item)=> {
            return new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString();  
            }}
            renderItem={({item}) =>{
            return(
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('seasonsDetails', {item})}>
            <Image style={{paddingHorizontal:5, height:150, width:220, marginEnd:20, borderRadius:10, }}
            source={{ uri:item.image}}/>
            <Text style={{fontSize:16, fontWeight:'bold' ,color:'#fff', }} >{item.name}</Text>
            </TouchableOpacity>                      
        );}}
        />
      </View>
      <View style={{marginTop:15 ,paddingHorizontal:10, paddingVertical:5}}>
        <View style={{flexDirection:'row', justifyContent:'space-between',}} >
          <Text style={{fontSize:18, fontWeight:'bold' ,color:'#fff'}} >More Like This</Text>
          <Icon type='FontAwesome' name='chevron-right' style={{ fontSize:20, color:'#fff'}} onPress={()=>this.props.navigation.navigate('moreLikeThis')} />
        </View>     
        <FlatList style={{elevation:20}}
          contentContainerStyle={{ paddingVertical:10, }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={this.state.movies} 
          keyExtractor={(item)=> {
          return new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString();  
        }}
        renderItem={({item}) =>{
        return(
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('moviedetails')}>
          <Image style={{paddingHorizontal:5, height:170, width:120, marginEnd:20, borderRadius:10, }}
          source={{ uri:item.image}}/>
          </TouchableOpacity>                      
        );}}
        />
      </View>
        </Content>
    </Container>

)}
}