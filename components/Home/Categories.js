import { View, Text, Image, FlatList } from 'react-native';
import React from 'react';
import categoriesData from '../../utils/data/categoryData';
import { colors, fonts } from '../../utils/theme';
import Feather from 'react-native-vector-icons/Feather';

const Categories = () => {
  const renderItem = (item) => {
    return (
      <View
        style={{
          backgroundColor: item?.selected ? colors.yellow : colors.white,
          borderRadius: 20,
          width: 105,
          height: 177,
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 13,
          marginRight: 16,
          elevation: 1,
          shadowColor: '#52006A',
        }}
      >
        <Image source={item?.image} />
        <Text
          style={{ fontFamily: fonts.medium, fontSize: 14, marginVertical: 13 }}
        >
          {item?.title}
        </Text>

        <View
          style={{
            backgroundColor: item?.selected ? colors.white : colors.darkOrange,

            width: 30,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30 / 2,
          }}
        >
          <Feather
            name="chevron-right"
            size={18}
            color={item?.selected ? colors.black : colors.white}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontFamily: fonts.semibold, fontSize: 16 }}>
        Categories
      </Text>

      <FlatList
        data={categoriesData}
        horizontal
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item?.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Categories;
