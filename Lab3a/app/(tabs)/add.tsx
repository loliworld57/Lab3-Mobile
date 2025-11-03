import React from 'react';
import { ScrollView, Text } from 'react-native';
import AddProduct from '@/question/AddProduct';

export default function AddTab() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} contentContainerStyle={{ padding: 16 }}>
      {AddProduct ? <AddProduct /> : <Text>Add Product form goes here.</Text>}
    </ScrollView>
  );
}
