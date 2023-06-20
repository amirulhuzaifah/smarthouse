import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const LoginButton = ({ color, text, onPress }) => {
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
      onPress={onPress}
    >
      <Text style={{ color: '#FFFFFF', textAlign: 'center', fontWeight: 'bold' }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

LoginButton.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default LoginButton;
