import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StatusBar, Image} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <View style={{backgroundColor: '#15317E', flex: 1}} >
      <StatusBar backgroundColor='#15317E' barStyle='light-content'/>
        <View style={{flex: 1, margin: 20}}>
      <Image
        style={{width:50, height: 50}}
        source={require('./src/image/user1.png')}
      />
      <Text style={{color:'#ffff',fontSize:20, fontWeight:'bold',marginTop:10}}>
        Huzaifah
        </Text>
      <Text style={{color:'#95B9C7',fontSize:15}}> 
      Welcome Home
      </Text>
      <FlatGrid
          style={{flex: 1}}
          itemDimension={130}
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({item}) => <Text>{item}</Text>}
/>      </View>
    </View>
  }
}
export default App;