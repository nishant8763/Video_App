<View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:10, paddingVertical:10}} >
      
<View style={this.state.checked==='first'|| this.state.checked==='second' ?
 {flexDirection:'column', alignItems:'center',borderRadius:10,backgroundColor:'#bfbfbf', paddingHorizontal:5, paddingVertical:5  }
  :  {flexDirection:'column', alignItems:'center',borderRadius:10,backgroundColor:'#fff', paddingHorizontal:5, paddingVertical:5 }}> 
  <Text style={{ fontSize:20, fontWeight:'bold'}}>Silver</Text>
  <View style={{ borderBottomWidth:1, width:'60%',}} ></View>
  <TouchableOpacity  onPress={() => this.setState({ checked:'first' })} >
      <View style={{flexDirection:'row', justifyContent:'center', paddingHorizontal:5, paddingVertical:8}}>
      
      
          { this.state.checked === 'first' ?
              <Icon type='Fontisto' name='checkbox-active' style={{fontSize:30, color:'red'}} /> 
           :
           <Icon type='Fontisto' name='checkbox-passive' style={{fontSize:30, color:'#000'}}/>
            }
      
      {/* <RadioButton value='first'
          color='#000'
          status={ this.state.checked === 'first' ? 'checked' : 'unchecked' }
          onPress={() => this.setState({ checked:'first' })} */}
      {/* /> */}
      <View style={{flexDirection:'column', justifyContent:'center'}}>
          <Text style={{fontSize:18, fontWeight:'bold', alignSelf:'center'}}>299/- </Text>     
          <Text style={{fontSize:15, }}>Monthly Subscribtion</Text>
      </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => this.setState({ checked:'second' })} >
      <View style={{flexDirection:'row', justifyContent:'center', paddingHorizontal:7, paddingVertical:8}}>
      { this.state.checked === 'second' ?
              <Icon type='Fontisto' name='checkbox-active' style={{fontSize:30, color:'red'}} /> 
           :
           <Icon type='Fontisto' name='checkbox-passive' style={{fontSize:30, color:'#000'}}/>
            }
      {/* <RadioButton value='second'
          color='#000'
          status={ this.state.checked === 'second' ? 'checked' : 'unchecked' }
          onPress={() => this.setState({ checked:'second' })}
      /> */}
      <View style={{flexDirection:'column', justifyContent:'center', paddingLeft:2}}>
          <Text style={{fontSize:18, fontWeight:'bold', alignSelf:'center'}}>999/- </Text>     
          <Text style={{fontSize:15, }}>Annual Subscribtion</Text>
      </View>
      </View> 
      </TouchableOpacity>              
  </View>   
           
  
  <View style={this.state.checked==='third'|| this.state.checked==='fourth' ?
 {flexDirection:'column', alignItems:'center',borderRadius:10,backgroundColor:'#ffd11a', paddingHorizontal:5, paddingVertical:5  }
  :  {flexDirection:'column', alignItems:'center',borderRadius:10,backgroundColor:'#fff', paddingHorizontal:5, paddingVertical:5 }}>  
  <Text style={{ fontSize:20, fontWeight:'bold'}}>Gold</Text>
  <View style={{ borderBottomWidth:1, width:'60%',}} ></View>
  <TouchableOpacity  onPress={() => this.setState({ checked:'third' })} >
      <View style={{flexDirection:'row', justifyContent:'center', paddingHorizontal:5, paddingVertical:8}}>
      { this.state.checked === 'third' ?
          <Icon type='Fontisto' name='checkbox-active' style={{fontSize:30, color:'red'}} /> 
           :
          <Icon type='Fontisto' name='checkbox-passive' style={{fontSize:30, color:'#000'}}/>
            }
      {/* <RadioButton value='third'
          color='#000'
          status={ this.state.checked === 'third' ? 'checked' : 'unchecked' }
          onPress={() => this.setState({ checked:'third' })}
      /> */}
      <View style={{flexDirection:'column', justifyContent:'center'}}>
          <Text style={{fontSize:18, fontWeight:'bold', alignSelf:'center'}}>399/- </Text>     
          <Text style={{fontSize:15, }}>Monthly Subscribtion</Text>
      </View>
      </View>
      </TouchableOpacity>
      
      <TouchableOpacity  onPress={() => this.setState({ checked:'fourth' })} >
      <View style={{flexDirection:'row', justifyContent:'center', paddingHorizontal:7, paddingVertical:8}}>
      { this.state.checked === 'fourth' ?
              <Icon type='Fontisto' name='checkbox-active' style={{fontSize:30, color:'red'}} /> 
           :
           <Icon type='Fontisto' name='checkbox-passive' style={{fontSize:30, color:'#000'}}/>
            }
      {/* <RadioButton value='fourth'
          color='#000'
          status={ this.state.checked === 'fourth' ? 'checked' : 'unchecked' }
          onPress={() => this.setState({ checked:'fourth' })}
      /> */}
      <View style={{flexDirection:'column', justifyContent:'center', paddingLeft:2}}>
          <Text style={{fontSize:18, fontWeight:'bold', alignSelf:'center'}}>1199/- </Text>     
          <Text style={{fontSize:15, }}>Annual Subscribtion</Text>
      </View>
      </View>
      </TouchableOpacity>
                    
  </View>       
</View>