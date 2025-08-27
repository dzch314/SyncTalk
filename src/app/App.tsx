import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { MainScreen } from '@screens/MainScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle='dark-content' />
      <MainScreen />
    </SafeAreaProvider>
  );
}
