import React, {} from "react";
import{View, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TextInputData = props => {
    const handleTextChange = (text) => {
        props.set(text);
    };
    return (
        <View>
            <View style={{flexDirection: 'row', marginHorizontal: 25, marginTop: 10}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            width: 50,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            elevation: 2,
          }}>
          <Icon name={props.icon} size={20} color="#2396F2"/>
        </View>
             <TextInput
            value={props.state}
            style={{
                backgroundColor: '#E5E4E2',
            // marginHorizontal: 20,
            // borderRadius: 15,
            flex: 1,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            paddingVertical: 15,
            elevation: 2,
            paddingLeft: 10,
            color:'#000000',
             }}

            placeholder= {props.placeholder}
            placeholderTextColor="#0000FF"
            onChangeText={handleTextChange}
            secureTextEntry={props.isPassword}
            />
            
            </View>
        </View>
    );
};

TextInputData.propTypes = {
    state: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    set: PropTypes.func.isRequired,
    isPassword: PropTypes.bool,
  };
export default TextInputData;