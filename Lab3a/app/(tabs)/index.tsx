import { Image } from 'expo-image';
import { Platform, ScrollView, StyleSheet } from 'react-native';

import { Link, useRouter } from 'expo-router';
import Product from '@/question/product';

export default function HomeScreen() {
  const router = useRouter();

  const handleSelect = (item: any) => {
    // Navigate to the detail tab and pass the selected product as a route param.
    router.push({ pathname: './detail', params: { product: JSON.stringify(item) } } as any);
  };

  return (
    <ScrollView style={styles.container}>
      <Product onSelect={handleSelect} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
