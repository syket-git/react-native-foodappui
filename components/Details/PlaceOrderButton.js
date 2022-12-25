import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors, fonts } from '../../utils/theme';

const PlaceOrderButton = () => {
  return (
    <TouchableOpacity style={{ flex: 1 }}>
      <View
        style={{
          width: '100%',
          backgroundColor: colors.yellow,
          height: 62,
          borderRadius: 50,
          marginTop: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontFamily: fonts.bold, fontSize: 17 }}>
          Place an order
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceOrderButton;
