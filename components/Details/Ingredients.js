import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import { fonts, colors } from '../../utils/theme';
import { ingredientsData } from '../../utils/data/ingrediantsData';

const Ingredients = () => {
  const renderItem = (item) => {
    return (
      <View
        style={{
          width: 100,
          height: 80,
          overflow: 'hidden',
          padding: 10,
          borderRadius: 15,
          backgroundColor: colors.white,
          marginRight: 15,
        }}
      >
        <Image
          style={{ width: '100%', height: '100%' }}
          source={item?.image}
          resizeMode="contain"
        />
      </View>
    );
  };

  return (
    <View style={{ marginTop: 30 }}>
      <Text
        style={{ fontFamily: fonts.semibold, fontSize: 16, marginBottom: 15 }}
      >
        Ingredients
      </Text>
      <FlatList
        data={ingredientsData}
        horizontal
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => renderItem(item)}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Ingredients;
