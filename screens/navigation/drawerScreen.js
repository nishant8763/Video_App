import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, View, Image, Text } from 'react-native';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer, Avatar,Title,Caption } from 'react-native-paper';
import  FontAwesome from 'react-native-vector-icons/FontAwesome5'
import  Icon from 'react-native-vector-icons/MaterialIcons'
import  Entypo from 'react-native-vector-icons/Entypo'
import { TouchableOpacity } from "react-native-gesture-handler";

const Drawerscreen=(props)=> {
    
  return (
    <View style={{ flex:1}} >
        <DrawerContentScrollView {...props} >
            <View style={styles.drawercontent}>
                <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                    <View style={{paddingHorizontal:10, paddingVertical:10, alignSelf:'center'}}>
                        <Avatar.Image 
                        source={{uri:"https://c7.uihere.com/files/348/800/890/computer-icons-avatar-user-login-avatar.jpg" }}   />
                    </View>
                    <View style={{paddingHorizontal:10, alignSelf:'center' }}>
                        <Text>Log In</Text>
                        <Text>For a Better experience</Text>
                    </View>
                    <View  style={{paddingHorizontal:10, alignSelf:'center' }}>
                        <FontAwesome  name="chevron-right" color={'#000'} size={20}/>
                    </View>                   
                </View>
                <View style={styles.line}></View>
                <Drawer.Section style={styles.drawersection}>
                    <DrawerItem
                     icon={()=>(<Icon name="live-tv" size={30} color={'red'} />) }
                     label="Live" labelStyle={{fontSize:20,
                        fontWeight:'bold', color:'red'}} 
                     onPress={()=>props.navigation.navigate('liveStream')}
                    />
                    <DrawerItem
                     icon={()=>(<Icon name="playlist-add" size={30} color={'#000'} />) }
                     label="Watch list" labelStyle={styles.item} 
                    />
                    <DrawerItem
                     icon={()=>(<Icon name="movie" size={30} color={'#000'} />) }
                     label="Movies" labelStyle={styles.item} 
                    />
                    <DrawerItem
                     icon={()=>(<FontAwesome name="user" size={28} color={'#000'} />) }
                     label="Subscription" labelStyle={styles.item} 
                     onPress={()=>props.navigation.navigate('subscribtion')}
                    />
                    <DrawerItem
                     icon={()=>(<Icon name="tv" size={30} color={'#000'} />) }
                     label="Channels" labelStyle={styles.item} 
                    />
                   <DrawerItem
                     icon={()=>(<Icon name="tag-faces" size={30} color={'#000'} />) }
                     label="Genres" labelStyle={styles.item} 
                    />
                    <DrawerItem
                     icon={()=>(<Icon name="language" size={30} color={'#000'} />) }
                     label="Languages" labelStyle={styles.item} 
                    />
                    <View style={styles.line}></View>
                    <DrawerItem
                     icon={()=>(<Entypo name="help" size={30} color={'#000'} />) }
                     label="Help" labelStyle={styles.item} 
                    />
                    <View style={styles.line}></View> 
                </Drawer.Section>
                <View style={{ width:150, flexDirection:'row', justifyContent:'space-between', paddingStart:10, paddingVertical:15}} > 
                    <TouchableOpacity><Text>Privacy Policy</Text></TouchableOpacity>
                    <Text>.</Text>
                    <TouchableOpacity><Text>T&C</Text></TouchableOpacity>
                </View>
            </View>

        </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
 drawercontent:{
  flex:1
 },
 title:{
    fontSize:20,
    fontWeight:'bold', 
    // alignSelf:'flex-start',
    marginBottom:5
 },
 caption:{
    fontSize:18,
    lineHeight:20,
    marginBottom:10
    // alignSelf:'flex-start',
 },
 drawersection:{
     marginTop:20,
    //  backgroundColor:'#36A3F0',
     marginEnd:5,     
 },
 item:{
    fontSize:18,
    fontWeight:'bold'
 },
 bottomdrawersection:{
     marginBottom:20
 },
 image:{
    height:100,
    width:200,
    alignSelf:'center'
    
},
line:{
    borderBottomWidth:1,
    width:'100%',
    alignSelf:'center',
    borderBottomColor:'#ccc'
},
});

export default Drawerscreen;