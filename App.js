import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Details from './screens/Details';

const Stack = createNativeStackNavigator();

const App = () => {
  const [loadedFont] = useFonts({
    InterRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
    InterMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
    InterSemibold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
    InterBold: require('./assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!loadedFont) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
