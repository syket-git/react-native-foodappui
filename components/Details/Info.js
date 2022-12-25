import { View, StyleSheet, Text, Image } from 'react-native';
import React from 'react';
import { colors, fonts } from '../../utils/theme';

const Info = () => {
  return (
    <View
      style={{
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <View style={{ flexDirection: 'column' }}>
        <View style={styles.gap}>
          <Text style={styles.subTitle}>Size</Text>
          <Text style={styles.title}>Medium 14”</Text>
        </View>
        <View style={styles.gap}>
          <Text style={styles.subTitle}>Crust</Text>
          <Text style={styles.title}>Thin Crust</Text>
        </View>
        <View style={styles.gap}>
          <Text style={styles.subTitle}>Delivery in</Text>
          <Text style={styles.title}>30 min</Text>
        </View>
      </View>
      <View style={{ marginLeft: 40 }}>
        <Image
          resizeMode="contain"
          source={require('../../assets/images/pizza1.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gap: {
    paddingVertical: 7,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: fonts.regular,
    colors: colors.lightGray,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.medium,
    colors: fonts.darkGray,
  },
});

export default Info;
