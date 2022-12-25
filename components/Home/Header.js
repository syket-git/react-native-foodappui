import { View, Image } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../../utils/theme';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <View style={{ width: 50, height: 50 }}>
        <Image
          resizeMode="contain"
          style={{ width: '100%', height: '100%', borderRadius: 50 / 2 }}
          source={require('../../assets/images/profile.png')}
        />
      </View>

      <Feather name="menu" size={24} color={colors.darkGray} />
    </View>
  );
};

export default Header;
