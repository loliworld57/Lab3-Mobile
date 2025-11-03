/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Product from './question/product';
import { ScrollView, StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <ScrollView>
        <Product />
      </ScrollView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default App;
