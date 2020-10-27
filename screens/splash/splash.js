import React, {Component} from 'react';
import { View,Text,StyleSheet,TextInput, TouchableOpacity, ScrollView, Image, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default class splash extends Component{

  constructor(props){
      super(props);
      this.state={
         loader:false
      }
  }
  
  async componentDidMount() {

    // Register all listener for notification

    //AsyncStorage.clear();
    // console.log(this.props);
    setTimeout(() => {
        if (this.state.loader != false) {
            this.props.navigation.navigate('DrawerNavigation');
        } else {
            this.props.navigation.navigate('DrawerNavigation');
        }
        }, 30);
    }
  

  render(){
    //   console.log(this.props)
      return(
          <View style={{ backgroundColor:'#272D3B', height:'100%', width:'100%', flex:1, flexDirection:'column' , justifyContent:'space-evenly' }}>  
            <Image style={styles.image} resizeMode='contain' source={require('../../assets/orocast-logo.png')} /> 
            {/* <Image style={
              {height:'65%',
              width:'95%',
              alignSelf:'center',
              padding:20,
              marginStart:50,marginEnd:50}
            } source={require('../assets/boy.jpg')} />         */}
          </View>  
      );  
  }

} 
const styles = StyleSheet.create({
  image:{
    height:'25%', width:'90%',
    alignSelf:'center',
    marginStart:15,marginEnd:15,
    padding:20
  }
});