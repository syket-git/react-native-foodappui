import { View, Text } from 'react-native';
import React from 'react';
import { colors, fonts } from '../../utils/theme';

const Title = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text
        style={{
          fontFamily: fonts.regular,
          colors: colors.darkGray,
          fontSize: 16,
          fontWeight: '400',
        }}
      >
        Food
      </Text>
      <Text
        style={{
          fontFamily: fonts.semibold,
          fontSize: 32,
          colors: colors.darkGray,
        }}
      >
        Delivery
      </Text>
    </View>
  );
};

export default Title;
