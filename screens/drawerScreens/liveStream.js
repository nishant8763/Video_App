import React, { Component } from "react";
import {Text,View,StyleSheet, ScrollView, Dimensions, TouchableNativeFeedback, TouchableOpacity,FlatList, Image} from "react-native";
import Video from 'react-native-video';
import  FIcon from 'react-native-vector-icons/FontAwesome5'
import Slider from '@react-native-community/slider';
import Orientation from "react-native-orientation";
import { Container,Header, Left,Body,Icon,Button, Title, Content, Right  } from "native-base";

const {width} = Dimensions.get('window')
const samplevideo = "https://www.w3schools.com/html/mov_bbb.mp4"
const samplevideo1 = require('../../assets/videoplayback(1).mp4')
 
export default class Videotest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime:0,
      duration:0.1,
      paused:false,
      overlay:false,
      fullscreen: false,
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
    }
  }
  
  getTime = t => {
    const digit = n => n < 10 ? `0${n}` : `${n}`;
    // const t = Math.round(time);
    const sec = digit(Math.floor(t % 60));
    const min = digit(Math.floor((t / 60) % 60));
    const hr = digit(Math.floor((t / 3600) % 60));
    return hr + ':' + min + ':' + sec; // this will convert sec to timer string
    // 33 -> 00:00:33
    // this is done here
    // ok now the theme is good to look
  }

  load = ({ duration }) => this.setState({ duration }) // now here the duration is update on load video
  progress =  currentTime  => this.setState({ currentTime }) // here the current time is upated

  backward = () => {
    
    this.player.seek( this.state.currentTime.currentTime -10);
    clearTimeout(this.overlayTimer);
    this.overlayTimer = setTimeout(() => this.setState({ overlay: false }), 3000);
  }
  forward = () => {
    // console.log(this.state.currentTime.currentTime)
    this.player.seek( this.state.currentTime.currentTime +10); // here the video is seek to 5 sec forward
    clearTimeout(this.overlayTimer);
    this.overlayTimer = setTimeout(() => this.setState({ overlay: false }), 3000);
  }

  onslide = slide => {
    // console.log(this.state.duration)
    this.player.seek(slide * this.state.duration); // here the upation is maked for video seeking
    clearTimeout(this.overlayTimer);
    this.overlayTimer = setTimeout(() => this.setState({ overlay: false }), 3000);
  }

  lastTap = null;
  handleDoubleTap = (doubleTapCallback, singleTapCallback) => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (this.lastTap && (now - this.lastTap) < DOUBLE_PRESS_DELAY) {
      clearTimeout(this.timer);
      doubleTapCallback();
    } else {
      this.lastTap = now;
      this.timer = setTimeout(() => {
        singleTapCallback();
      }, DOUBLE_PRESS_DELAY);
    }
  }

  SeekLeft = () => {
    const currtime= this.state.currentTime.currentTime
    this.handleDoubleTap(() => {
      this.player.seek(currtime - 10);
    }, () => {
      this.setState({ overlay: true });
      this.overlayTimer = setTimeout(() => this.setState({ overlay: false }), 3000);
    })
  }
  SeekRight = () => {
    const currtime= this.state.currentTime.currentTime
    this.handleDoubleTap(() => { // this fn is used to detect the double tap first callback
      this.player.seek(currtime + 10);
    }, () => {
      this.setState({ overlay: true });
      this.overlayTimer = setTimeout(() => this.setState({ overlay: false }), 3000);
    })
  }

  fullscreen = () => {
    const { fullscreen } = this.state;
    if(fullscreen) {
        Orientation.lockToPortrait();
    } else {
        Orientation.lockToLandscape();
    }
    this.setState({ fullscreen: !fullscreen });
  }

  render(){
    const{ currentTime, duration, paused, overlay, fullscreen,}= this.state
    const currtime= currentTime.currentTime
    // console.log(currtime)
  return(
      <View style={ fullscreen ?  {...StyleSheet.absoluteFill, backgroundColor:'black'}:{ width, height:width*.6, backgroundColor:'black'} }>
      <Video 
      // source={{uri:samplevideo}}   // Can be a URL or a local file.
      source={samplevideo1}
      paused={paused}
      ref={(ref) => {
        this.player = ref
      }}                                      // Store reference
      repeat
      onBuffer={this.onBuffer}                // Callback when remote video is buffering
      onError={this.videoError}               // Callback when video cannot be loaded
      style={{ ...StyleSheet.absoluteFill}} 
      resizeMode='contain'
      onLoad={this.load}
      onProgress={this.progress}
      />
      <View style={styles.overlay}>
      { overlay ? <View style={{...styles.overlayset, backgroundColor:'#0006'}}>
      <FIcon name='backward' style={styles.icon} onPress={this.backward} />
        <FIcon name={paused ? 'play' : 'pause'} style={styles.icon} onPress={() => this.setState({ paused: !paused })} />
        <FIcon name='forward' style={styles.icon} onPress={this.forward} />
      <View style={{position: 'absolute',width: '100%', bottom:0,  }} >
        <View style={{ width: '100%',flexDirection: 'row',justifyContent: 'space-between',paddingHorizontal: 5, marginBottom:15}} >
          <Text style={{color:'white'}} >{this.getTime(currentTime.currentTime)}</Text>
          <Text style={{color:'white'}} >{this.getTime(duration)}        <FIcon onPress={this.fullscreen} name= { fullscreen ? 'compress' : 'expand'} style={{ fontSize: 20}} />      </Text> 
        </View>
        <Slider 
         maximumTrackTintColor='white'
         minimumTrackTintColor='white'
         thumbTintColor='white' // now the slider and the time will work
         value={ currtime } // slier input is 0 - 1 only so we want to convert sec to 0 - 1
        //  minimumValue={currtime}
         maximumValue={duration}
         onValueChange={this.onslide} 
        />
      </View>
      </View> 
      : 
      <View style={{flex: 1, flexDirection: 'row'}} >
           <TouchableNativeFeedback onPress={this.SeekLeft}><View style={{ flex: 1 }} /></TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={this.SeekRight}><View style={{ flex: 1 }} /></TouchableNativeFeedback>
      </View>
      }
      </View>
      </View>
  );
  }
}

var styles = StyleSheet.create({
  backgroundVideos: {
    width:1000, height:800
  },
  overlay:{
    ...StyleSheet.absoluteFillObject
  },
  overlayset:{
    flex:1,
    flexDirection:'row'
  },
  icon:{
    color: 'white',
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25
  },
  sliderCont: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  timer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },
});