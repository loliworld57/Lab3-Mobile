import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ProductDetailStyles from '@/question/productDetail';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function DetailTab() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const Styles = ProductDetailStyles();

  // Product passed via route params (stringified). Parse safely here.
  let selected: any = null;
  try {
    if (params.product) selected = JSON.parse(String(params.product));
  } catch (e) {
    selected = null;
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }} contentContainerStyle={{ padding: 16 }}>
      {selected ? (
        <View style={Styles.card}>
          <Image source={{ uri: selected.thumbnail }} style={Styles.image} />
          <View style={Styles.info}>
            <Text style={Styles.title}>{selected.title}</Text>
            <Text style={Styles.desc}>{selected.description}</Text>
            <Text style={Styles.price}>Price: ${selected.price}</Text>
            <Text>Brand: {selected.brand}</Text>
            <Text>Category: {selected.category}</Text>
            <Text>Rating: {selected.rating} ⭐</Text>
            <Text>Stock: {selected.stock} units</Text>
            <TouchableOpacity style={[Styles.btn, Styles.btnDelete, { marginTop: 12 }]} onPress={() => router.push('/') }>
              <Text style={Styles.btnText}>Back to Products</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Text>No product selected. Use the Products tab and tap Detail to view a product here.</Text>
      )}
    </ScrollView>
  );
}
