import { ScrollView, View } from 'react-native';
import React from 'react';
import Header from '../components/Home/Header';
import Title from '../components/Home/Title';
import Search from '../components/Home/Search';
import { SafeAreaView } from 'react-native-safe-area-context';
import Categories from '../components/Home/Categories';

const Home = () => {
  return (
    <SafeAreaView style={{ padding: 20 }}>
      <ScrollView>
        <Header />
        <Title />
        <Search />
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
