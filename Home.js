import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StatusBar, Image} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {Switch} from 'react-native-switch';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import { auth } from "./src/image/components/firebase";

// const navigation = useNavigation();
class Home extends Component {

  handleLogout = () => {
    const { navigation } = this.props;
    auth.signOut()
      .then(() => {
        console.log('Logged out successfully');
        navigation.replace('LoginPage');
        // Add any additional logic or navigation here after logout
      })
      .catch((error) => {
        console.log('Logout error:', error.message);
      });
  };
  navigateToPage = (pageName) => {
      const { navigation } = this.props;
      navigation.navigate(pageName);
    };
     constructor(props) {
    super(props);
    this.state = {
      devices:[
        {
          place:'Living Room',
          icon: 'couch',
          deviceCount:1,
          isOn:true,
          name: 'Details 1', 
          title: 'Page 1' 
        },
        {
          place:'Kitchen',
          icon: 'coffee',
          deviceCount:1,
          isOn:true,
          name: 'Details 2', 
          title: 'Page 2' 
        },
        {
          place:'Store',
          icon: 'box',
          deviceCount:1,
          isOn:true,
          name: 'Details 4', 
          title: 'Page 4' 
        },
        {
          place:'Toilet',
          icon: 'toilet',
          deviceCount:1,
          isOn:true,
          name: 'Details 3', 
          title: 'Page 3' 
        },

        
      ],
    };
  }
  render() {
    // 
    return (
      <View style={{backgroundColor: '#43C6DB', flex: 1}}>
        <StatusBar backgroundColor='#43C6DB' barStyle='light-content'/>
          <View style={{flex: 1, margin: 20}}>
            <Image
              style={{width:50, height: 50}}
              source={require('./src/image/user1.png')}
              />
              <Text
              style={{
                color:'#ffff',
                fontSize:25, 
                fontWeight:'bold',
                marginTop:10
                }}>
                Huzaifah
                </Text>
              <Text style={{color:'#FFFFFF',fontSize:20}}> 
              Welcome Home
              </Text>
              <FlatGrid
                  style={{flex: 1, marginTop:30,}}
                  itemDimension={130}
                  data={this.state.devices}
                  renderItem={({item,index}) => (
                    <TouchableOpacity
                    style={{
                            backgroundColor: '#ffff',
                            height: 150,
                            borderRadius:12,
                            elevation:3,
                            padding:20,
                          }}
                      key={index}
                      onPress={() => this.navigateToPage(item.name)}>
                      <Text style={{fontSize:23, fontWeight:'bold'}}>{item.place}</Text>
                      <View style={{
                       justifyContent:'center',
                       alignItems:'center',
                       marginTop:10,
                       width:25,
                       height:30,
                      }}>
                      <Icon name={item.icon} size={20} color='#15317E' />
                      </View>
                      
                      {/* <Text style={{fontSize:12, fontWeight:'bold'}}>{item.deviceCount} devices</Text> */}
                      <Text>{item.isOn}</Text>
                      <Switch
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
                        />
                    </TouchableOpacity>

                  )}
                  

                  />
            </View>
      <View style={{
        backgroundColor:'#FFFFFF', 
        flexDirection:'row',
        paddingVertical:20,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,}}>

        {/* <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Icon name="map-marker" size={30} color="#15317E" />
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Icon name="clock" size={30} color="#15317E" />
         </TouchableOpacity>
         <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Icon name="home" size={30} color="#15317E" />
          </TouchableOpacity>  */}
        <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
             onPress={this.handleLogout}
          >
            <Icon name="power-off" size={30} color="#FF0000" />
          </TouchableOpacity>
          

      </View>
    </View>
    );
  }
}
Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default Home;