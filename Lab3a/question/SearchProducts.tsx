import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from "react-native";
import { useRouter } from 'expo-router';

export default function SearchProducts() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState<any[]>([]);
    const router = useRouter();

    useEffect(() => {
        const t = setTimeout(() => {
            if (search.trim().length === 0) {
                setResults([]);
                return;
            }
            fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(search)}`)
                .then((r) => r.json())
                .then((data) => setResults(data.products || []))
                .catch(() => setResults([]));
        }, 300);
        return () => clearTimeout(t);
    }, [search]);



    return (
        <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Search Products</Text>
            <TextInput
                placeholder="Type product name..."
                value={search}
                onChangeText={setSearch}
                style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 6 }}
            />

            <FlatList
                data={results}
                keyExtractor={(i) => String(i.id)}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', padding: 8, alignItems: 'center' }}>
                        <Image source={{ uri: item.thumbnail }} style={{ width: 64, height: 64, borderRadius: 6, marginRight: 8 }} />
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                            <Text numberOfLines={2} style={{ color: '#555' }}>{item.description}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => router.push({ pathname: './detail', params: { product: JSON.stringify(item) } } as any)}
                            style={{ backgroundColor: '#007bff', padding: 8, borderRadius: 6 }}
                        >
                            <Text style={{ color: '#fff' }}>Detail</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}