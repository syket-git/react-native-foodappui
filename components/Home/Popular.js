import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { fonts, colors } from '../../utils/theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import popularData from '../../utils/data/popularData';
import Header from './Header';
import Title from './Title';
import Search from './Search';
import Categories from './Categories';
import { useNavigation } from '@react-navigation/native';

const Popular = () => {
  const navigation = useNavigation();

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', { data: item })}
      >
        <View
          style={{
            width: '100%',
            height: 150,
            borderRadius: 25,
            marginVertical: 10,
            padding: 20,
            backgroundColor: colors.white,
            flexDirection: 'row',
            overflow: 'hidden',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesome name="crown" size={17} color={colors.yellow} />
              <Text
                style={{
                  fontFamily: fonts.semibold,
                  marginLeft: 10,
                  fontSize: 14,
                }}
              >
                top of the week
              </Text>
            </View>
            <View>
              <Text style={{ fontFamily: fonts.medium, fontSize: 17 }}>
                {item?.title}
              </Text>
              <Text
                style={{
                  fontFamily: fonts.medium,
                  fontSize: 12,
                  color: colors.lightGray,
                }}
              >
                weight {item?.weight}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: colors.yellow,
                  width: 90,
                  height: 53,
                  borderBottomLeftRadius: 25,
                  borderTopRightRadius: 25,
                  marginBottom: -20,
                  marginLeft: -20,
                }}
              >
                <Text style={{ fontSize: 25 }}>+</Text>
              </View>
              <View
                style={{
                  marginLeft: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 16,
                }}
              >
                <Entypo name="star" size={17} />
                <Text style={{ marginLeft: 3 }}>{item?.rating}</Text>
              </View>
            </View>
          </View>
          <View style={{ width: '100%', height: 'auto' }}>
            <Image
              style={{ width: '100%', height: '100%' }}
              resizeMode="contain"
              source={item?.image}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={popularData}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item?.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <Header />
            <Title />
            <Search />
            <Categories />

            <Text
              style={{
                fontFamily: fonts.semibold,
                fontSize: 16,
                marginBottom: 5,
              }}
            >
              Popular
            </Text>
          </>
        }
      />
    </View>
  );
};

export default Popular;
