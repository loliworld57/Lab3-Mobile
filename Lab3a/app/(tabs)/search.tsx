import React from 'react';
import { ScrollView } from 'react-native';
import SearchProducts from '@/question/SearchProducts';

export default function SearchTab() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} contentContainerStyle={{ padding: 16 }}>
      <SearchProducts />
    </ScrollView>
  );
}
