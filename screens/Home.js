import { SafeAreaView } from 'react-native-safe-area-context';
import Popular from '../components/Home/Popular';

const Home = () => {
  return (
    <SafeAreaView style={{ padding: 20 }}>
      <Popular />
    </SafeAreaView>
  );
};

export default Home;
