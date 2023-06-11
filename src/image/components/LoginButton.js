import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const LoginButton = ({ navigation, color, text }) => {
  const handlePress = () => {
    if (navigation) {
        navigation.navigate('Home');
    }
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: color,
        paddingVertical: 14,
        marginTop: 20,
        marginHorizontal: 25,
        borderRadius: 50,
        elevation: 2,
      }}
      onPress={handlePress}
    >
      <Text style={{ color: '#FFFFFF', textAlign: 'center', fontWeight: 'bold' }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

LoginButton.propTypes = {
  navigation: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default LoginButton;
