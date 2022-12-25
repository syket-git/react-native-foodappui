import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from '../../utils/theme';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View
          style={{
            width: 40,
            height: 40,
            borderWidth: 2,
            borderColor: colors.lightGray,
            backgroundColor: colors.white,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Entypo name="chevron-left" size={20} />
        </View>
      </TouchableOpacity>
      <View
        style={{
          width: 40,
          height: 40,
          borderWidth: 2,
          borderColor: colors.yellow,
          backgroundColor: colors.yellow,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Entypo name="star" size={20} color="#fff" />
      </View>
    </View>
  );
};

export default Header;
