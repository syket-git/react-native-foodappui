import { View, Text, TextInput } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { colors, fonts } from '../../utils/theme';

const Search = () => {
  return (
    <View
      style={{
        marginTop: 10,
        flexDirection: 'row',

        alignItems: 'flex-end',
      }}
    >
      <Feather name="search" size={20} color={colors.darkGray} />
      <TextInput
        placeholder="Search..."
        style={{
          borderBottomWidth: 2,
          flex: 1,
          marginLeft: 10,
          paddingHorizontal: 5,
          fontFamily: fonts.regular,
          borderBottomColor: colors.lightGray,
          width: '100%',
        }}
      />
    </View>
  );
};

export default Search;
