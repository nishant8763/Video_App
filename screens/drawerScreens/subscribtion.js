import React, { Component } from "react";
import {View, Text, StyleSheet, Modal, TouchableOpacity, Image, FlatList ,} from "react-native";
import { Container,Header, Left,Body,Icon, Title, Content, Right, Radio, Button  } from "native-base";
import { SliderBox } from "react-native-image-slider-box";
import RazorpayCheckout from 'react-native-razorpay';
import ImageSlider from "react-native-image-slider";
import { Table, Row, Rows } from 'react-native-table-component';
import { ScrollView } from "react-native-gesture-handler";

export default class subscribtion extends Component{
    constructor(props) {
        super(props);
        this.state = {
          movies:[
            "https://wallpaperaccess.com/full/1494464.jpg",
            "https://source.unsplash.com/1024x768/?tree",
            "https://image.shutterstock.com/image-vector/mosaic-1024x768-600w-38646253.jpg",
            "https://1.bp.blogspot.com/-yZ5b2mGURXQ/VjxLx4yu1RI/AAAAAAAADUo/nOTQk_YkXQM/s1600/Kick-2014-Bollywood-Movie-Poster-Wallpaper.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6HdFD_fhad9qPvq_Q4Ft0yC4Pywn78BdDJQ&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ_Lch4tCl6I5a2HryzLOfkzYonjpGSajX0w&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQD1H5RBortXRMrwtP_MazgFXaLo2hxHI5mng&usqp=CAU",
           "https://4.bp.blogspot.com/-2hdT22mjlgU/VjxLBqgWDmI/AAAAAAAADTo/MSwvZDjxbzA/s1600/Ek-Villain-Bollywood-Movie-Poster-Wallpaper.jpg",
            "https://2.bp.blogspot.com/-bAk1I3tuM98/VjxKzIAm1cI/AAAAAAAADTY/3yXiuzSuo3s/s1600/Dhoom3-all-actor-Fire-HD-poster.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ_Lch4tCl6I5a2HryzLOfkzYonjpGSajX0w&usqp=CAU",
            "https://image.shutterstock.com/image-vector/mosaic-1024x768-600w-38646253.jpg",
            "https://1.bp.blogspot.com/-yZ5b2mGURXQ/VjxLx4yu1RI/AAAAAAAADUo/nOTQk_YkXQM/s1600/Kick-2014-Bollywood-Movie-Poster-Wallpaper.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQj3O5-XX_ttN6onigYYIyLggWA_ylVTQf8IA&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6HdFD_fhad9qPvq_Q4Ft0yC4Pywn78BdDJQ&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQD1H5RBortXRMrwtP_MazgFXaLo2hxHI5mng&usqp=CAU",
            "https://wallpaperaccess.com/full/1494464.jpg",
            "https://2.bp.blogspot.com/-bAk1I3tuM98/VjxKzIAm1cI/AAAAAAAADTY/3yXiuzSuo3s/s1600/Dhoom3-all-actor-Fire-HD-poster.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQ_Lch4tCl6I5a2HryzLOfkzYonjpGSajX0w&usqp=CAU",
            "https://4.bp.blogspot.com/-2hdT22mjlgU/VjxLBqgWDmI/AAAAAAAADTo/MSwvZDjxbzA/s1600/Ek-Villain-Bollywood-Movie-Poster-Wallpaper.jpg"
          ],
         checked:'',
         tableHead: ['content', 'silver', 'Gold', 'Platinum', 'Premium'],
         tableData: [
            ['Live', '2', '3', '4','5'],
            ['sports', '2', '3', '4', '5'],
            ['movies', 'b', 'c', 'd', '6'],
            ['F.D.F.S', 'b', 'c', 'd', 'e'],
            ['Specials', 'b', 'c', 'd', 'e'],
            ['no of screens', 'b', 'c', 'd', 'e'],
            ['Ad free', 'b', 'c', 'd', 'e'],
            ['Music', 'b', 'c', 'd', 'e'],
            
         ],
    
        };
      }

      onPressButton=()=>{ 
        var options = {
        description: 'Credits towards consultation',
        image: 'https://i.imgur.com/3g7nmJC.png',
        currency: 'INR',
        key: 'rzp_test_dAqZvsGVmghE3X',
        amount: '5000',
        name: 'streaming',
        // order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API. Learn more at https://razorpay.com/docs/api/orders.
        prefill: {
        email: 'sahoonishant03@gmail.com',
        contact: '8763544348',
        name: 'Nishant Sahoo'
        },
        theme: {color: '#53a20e'}
    }
    
    RazorpayCheckout.open(options).then((data) => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
        console.log(data.razorpay_payment_id)
    }).catch((error) => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
    });
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
                <Title>Subscription</Title>
            </Body>
        </Header>
        <Content style={{backgroundColor:'#333333'}} padder >
        <View style={{ paddingVertical:5, width:'100%',}} >
        {/* <ImageSlider
          
          
          autoPlayWithInterval={30}
          images={this.state.movies}
          style={{ height:200, width:'100%'}}
        //   customSlide={({ index, item, style, width }) => (
        //     // It's important to put style here because it's got offset inside
        //     // <View key={index} style={[style, styles.customSlide]}>
        //     //   <Image source={} style={styles.customImage} />
        //     // </View>
        //   )}
        /> */}
            <SliderBox
            ImageComponentStyle={{ borderRadius:5}}
            sliderBoxHeight={200}
            autoplay
            circleLoop
            
            paginationBoxVerticalPadding={250}
            //  paginationBoxVerticalPadding={200}
                imageLoadingColor="#2196F3"
                resizeMethod={'auto'}
                resizeMode='cover'
                images={this.state.movies}
                // onCurrentImagePressed={index =>
                // console.warn(`image ${index} pressed`)
            // }
            />
      </View>
        <Text style={{alignSelf:'center' ,fontSize:22, fontWeight:'bold', paddingTop:15, paddingHorizontal:5, color:'#fff'}} >
            Subscribe to Unlimited Entertainment
        </Text>
            <View style={{ alignSelf:'center', borderBottomWidth:1, width:'80%',borderColor:'#fff', marginBottom:12}} ></View>
        <View style={{ flexDirection:'row', justifyContent:'space-around'}} >
            <View style={this.state.checked==='first' ?
                    {flexDirection:'row', alignItems:'center',borderRadius:10,backgroundColor:'#ffd11a', paddingHorizontal:5, paddingVertical:5  }
                    :  {flexDirection:'row', alignItems:'center',borderRadius:10,backgroundColor:'#fff', paddingHorizontal:5, paddingVertical:5 }}>
                {/* { this.state.checked === 'second' ?
                    <Icon type='Fontisto' name='checkbox-active' style={{fontSize:30, color:'red'}} /> 
                        :
                    <Icon type='Fontisto' name='checkbox-passive' style={{fontSize:30, color:'#000'}}/>
                }         */}
            <TouchableOpacity style={{flexDirection:'column',paddingHorizontal:1}}
                    //  onPress={() => this.setState({ checked:'first' })} 
                     >
                    <Text style={{ fontSize:20, fontWeight:'bold',textAlign:'center'}}>Silver</Text>
                    <View style={{ borderBottomWidth:1, width:'80%',alignSelf:'center'}} ></View>
                    <Text style={{fontSize:18, fontWeight:'bold', alignSelf:'center'}}>199/-</Text>     
                    <Text style={{fontSize:15, }}>Monthly Subscribtion</Text>        
            </TouchableOpacity>
            </View>
        
            <View style={this.state.checked==='second' ?
                    {flexDirection:'row', alignItems:'center',borderRadius:10,backgroundColor:'#ffd11a', paddingHorizontal:5, paddingVertical:5  }
                    :  {flexDirection:'row', alignItems:'center',borderRadius:10,backgroundColor:'#fff', paddingHorizontal:5, paddingVertical:5 }}>
                {/* { this.state.checked === 'second' ?
                    <Icon type='Fontisto' name='checkbox-active' style={{fontSize:30, color:'red'}} /> 
                        :
                    <Icon type='Fontisto' name='checkbox-passive' style={{fontSize:30, color:'#000'}}/>
                }         */}
            <TouchableOpacity style={{flexDirection:'column',paddingHorizontal:1}} onPress={() => this.setState({ checked:'second' })} >
                    <Text style={{ fontSize:20, fontWeight:'bold',textAlign:'center'}}>Gold</Text>
                    <View style={{ borderBottomWidth:1, width:'80%',alignSelf:'center'}} ></View>
                    <Text style={{fontSize:18, fontWeight:'bold', alignSelf:'center'}}>299/-</Text>     
                    <Text style={{fontSize:15, }}>Monthly Subscribtion</Text>        
            </TouchableOpacity>
            </View>
        </View>

        <View style={{ flexDirection:'row', justifyContent:'space-around', marginVertical:20}} >
        <View style={this.state.checked==='third' ?
                {flexDirection:'row', alignItems:'center',borderRadius:10,backgroundColor:'#ffd11a', paddingHorizontal:5, paddingVertical:5  }
                :  {flexDirection:'row', alignItems:'center',borderRadius:10,backgroundColor:'#fff', paddingHorizontal:5, paddingVertical:5 }}>
            {/* { this.state.checked === 'second' ?
                <Icon type='Fontisto' name='checkbox-active' style={{fontSize:30, color:'red'}} /> 
                    :
                <Icon type='Fontisto' name='checkbox-passive' style={{fontSize:30, color:'#000'}}/>
            }         */}
        <TouchableOpacity style={{flexDirection:'column',paddingHorizontal:1}} onPress={() => this.setState({ checked:'third' })} >
                <Text style={{ fontSize:20, fontWeight:'bold',textAlign:'center'}}>Platinum</Text>
                <View style={{ borderBottomWidth:1, width:'80%',alignSelf:'center'}} ></View>
                <Text style={{fontSize:18, fontWeight:'bold', alignSelf:'center'}}>399/-</Text>     
                <Text style={{fontSize:15, }}>Monthly Subscribtion</Text>        
        </TouchableOpacity>
        </View>
        
        <View style={this.state.checked==='forth' ?
                {flexDirection:'row', alignItems:'center',borderRadius:10,backgroundColor:'#ffd11a', paddingHorizontal:5, paddingVertical:5  }
                :  {flexDirection:'row', alignItems:'center',borderRadius:10,backgroundColor:'#fff', paddingHorizontal:5, paddingVertical:5 }}>
            {/* { this.state.checked === 'second' ?
                <Icon type='Fontisto' name='checkbox-active' style={{fontSize:30, color:'red'}} /> 
                    :
                <Icon type='Fontisto' name='checkbox-passive' style={{fontSize:30, color:'#000'}}/>
            }         */}
        <TouchableOpacity style={{flexDirection:'column',paddingHorizontal:1}} onPress={() => this.setState({ checked:'forth' })} >
                <Text style={{ fontSize:20, fontWeight:'bold',textAlign:'center'}}>Premium</Text>
                <View style={{ borderBottomWidth:1, width:'80%',alignSelf:'center'}} ></View>
                <Text style={{fontSize:18, fontWeight:'bold', alignSelf:'center'}}>499/-</Text>     
                <Text style={{fontSize:15, }}>Monthly Subscribtion</Text>        
        </TouchableOpacity>
        </View>
        </View>
        {/* <TouchableOpacity style={{ alignSelf:'center', backgroundColor:'#1a1a1a', width:'95%', borderRadius:25, paddingVertical:15, bottom:0}} onPress={this.onPressButton}>
        <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold', color:'#cccccc', marginBottom:3 }} >Make Payment</Text>
        </TouchableOpacity> */}
        
        <View style={styles.container}>
        <ScrollView horizontal={true}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#333333'}}>
            
                <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
            
          
          <Rows data={this.state.tableData} style={styles.shead} textStyle={styles.stext}/>
          
        </Table>
        </ScrollView>
        </View>
        
        </Content>
    </Container>

)}
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, },
    head: { height: 40, width:600},
    text: { margin: 6, color:'#fff', fontSize:20  },
    shead:{ height: 40, width:600},
    stext:{ margin: 6, color:'#fff' }

  });
  