import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { colors } from './utils/theme';

export default function App() {
  const [loadedFont] = useFonts({
    InterRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
    InterMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
    InterSemibold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
    InterBold: require('./assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!loadedFont) return null;

  return (
    <View style={styles.container}>
      <Text style={{ backgroundColor: colors.yellow }}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
