import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Header from '../components/Details/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../components/Details/Title';
import Info from '../components/Details/Info';
import Ingredients from '../components/Details/Ingredients';
import PlaceOrderButton from '../components/Details/PlaceOrderButton';

const Details = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ padding: 20 }}>
          <Header />
          <Title />
          <Info />
          <Ingredients />
          <PlaceOrderButton />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
