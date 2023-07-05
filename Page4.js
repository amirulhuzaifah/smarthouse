import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StatusBar,Alert} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {Switch} from 'react-native-switch';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { onValue, ref } from 'firebase/database';
import { db } from "./src/image/components/firebase";
import { Linking } from 'react-native';

class Page3 extends Component{
  constructor(props){
    super(props);
    this.state={ 
      devices:[
        {
          deviceName:'Camera',
          icon:'lamp',
          status:'ON',
          isOn:'true',

        }
        
      ],
      Celsius: null,
      Condition: null,
    };
  }
  componentDidMount() {
    // Read temperature value
    const CelsiusRef = ref(db, 'House 1/temperature/Celsius');
    onValue(CelsiusRef, (snapshot) => {
      const Celsius = snapshot.val();
      this.setState({ Celsius });
    });
    const cameraRef = ref(db, 'House 1/Camera/Condition');
    onValue(cameraRef, (snapshot) => {
      const Condition = snapshot.val();
      this.setState({ Condition });
      if (Condition == "Motion Detected!"){
        this.showCamAlert();
      }
    });
  }
  showCamAlert=()=>{
    Alert.alert(
      'Security Alert',
      'Someone just entered your store ! Please check your SD card.',
      
      [
        { text: 'Call Emergency', onPress: this.handleCallEmergency },
        { text: 'Cancel', style: 'cancel' }
      ],
      { cancelable: false }
    );
  };

  handleCallEmergency = () => {
    Linking.openURL('tel:911');
  
  }
  render(){
    const { Celsius, Condition } = this.state;
    return(
      <View style={{backgroundColor: '#43C6DB', flex: 1}}>
        <StatusBar backgroundColor='#15317E' barStyle='light-content'/>
        <View style={{
          padding:20,
          borderBottomRightRadius:20,
          borderBottomLeftRadius:20,
          backgroundColor:'#15317E',}}>


           <Text style={{
            color:'#ffff',
            fontSize:28, 
            fontWeight:'bold',
            marginTop:15
            }}>
            Store
            </Text>
              <View style={{marginTop:30}}>
                <View style={{
                  flexDirection:'row',
                }}>
                  <View style={{
                    flexDirection:'row', flex:1,
                  }}>
                     <View style={{
                    backgroundColor:'#ffff',
                    width:50,
                    height:50,
                    borderRadius:50,
                    justifyContent:'center',
                    alignItems:'center'

                  }}>
                  <Icon2 name="motion-sensor" size={25} color="#15317E" />
                  </View>
                    <View style={{
                      justifyContent:'center',
                      marginLeft:10,
                    }}> 
                      <Text style={{
                      color:'#ffff',
                      fontWeight:'700',
                      fontSize:18,
                    }}>
                      {Condition != null ? `${Condition}` : ''}
                      </Text>
                      <Text style={{
                      color:'#ffff',
                      fontWeight:'500',
                      fontSize:14,
                    }}>
                      Motion sensor
                      </Text>
                    </View>
                  </View>
                  <View style={{
                      flexDirection:'row', flex:1,
                    }}>
                      <View style={{
                      backgroundColor:'#ffff',
                      width:50,
                      height:50,
                      borderRadius:50,
                      justifyContent:'center',
                      alignItems:'center',
                      marginLeft:50
                      

                    }}>
                    <Icon name="temperature-high" size={25} color="#15317E" />
                    </View>
                      <View style={{
                        justifyContent:'center',
                        marginLeft:10,
                      }}> 
                        <Text style={{
                        color:'#ffff',
                        fontWeight:'700',
                        fontSize:18,
                      }}>
                        {Celsius != null ? `${Celsius}°C` : ''}
                        </Text>
                        <Text style={{
                        color:'#ffff',
                        fontWeight:'500',
                        fontSize:14,
                      }}>
                        Temperature
                        </Text>
                    </View>
                  </View>
              </View>
          </View>         
        </View>
        <FlatGrid
          style={{flex: 1, marginTop:30,}}
          itemDimension={300}
          data={this.state.devices}
          renderItem={({item, index}) => (
            <TouchableOpacity
            style={{
                    backgroundColor: '#ffff',
                    height: 120,
                    borderRadius:12,
                    elevation:3,
                    padding:20,
                  }}>
                <View style={{
                  flexDirection:'row',
                }}>
                <Icon2 name="camera"size={65} color="#15317E" />
                <View style={{flex:1, justifyContent:'center'}}>
                <Text style={{fontSize:20, fontWeight:'bold', marginLeft:20}}>{item.deviceName}</Text>
                <Text style={{fontSize:15, color:'#778899',marginLeft:20}}>{item.status}</Text>
                </View>    
                {/* <Switch
                  value={item.isOn}
                  onValueChange={(val) =>{
                    let data = this.state.devices;
                    data[index].isOn=val;
                    this.setState({devices: data});
                  }}
                  activeText={'On'}
                  inActiveText={'Off'}
                  circleSize={19}
                  barHeight={15}
                  circleBorderWidth={0}
                  backgroundActive={'#95B9C7'}
                  backgroundInactive={'#C0C0C0'}
                  circleActiveColor={'#15317E'}
                  circleInActiveColor={'#808080'}
                  changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                  innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                  outerCircleStyle={{}} // style for outer animated circle
                  renderActiveText={false}
                  renderInActiveText={false}
                  switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                  switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                  switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
                  switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                /> */}
               </View>


            </TouchableOpacity>

        )}

        />
      </View>

    );
  }
}

export default Page3;