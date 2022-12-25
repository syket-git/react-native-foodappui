import { View, Text } from 'react-native';
import { colors, fonts } from '../../utils/theme';

const Title = () => {
  return (
    <View style={{ marginTop: 30 }}>
      <Text
        style={{
          fontFamily: fonts.bold,
          color: colors.darkGray,
          fontSize: 32,
        }}
      >
        Primavera Pizza
      </Text>
      <Text
        style={{
          fontFamily: fonts.bold,
          fontSize: 32,
          color: colors.darkOrange,
        }}
      >
        $5.99
      </Text>
    </View>
  );
};

export default Title;
