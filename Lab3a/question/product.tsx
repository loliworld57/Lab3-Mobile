import React, { useEffect, useState, useCallback } from "react";
import {
    ActivityIndicator,
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    TextInput,
    Modal,
    ScrollView,
} from "react-native";
import Styles from "./style";
import { useFocusEffect } from '@react-navigation/native';

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    brand: string;
    category: string;
    stock: number;
    rating: number;
    thumbnail: string;
}

export default function Product({ onSelect }: { onSelect?: (item: Product) => void } = {}) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState<Omit<Product, "id">>({
        title: "",
        description: "",
        price: 0,
        brand: "",
        category: "",
        stock: 0,
        rating: 0,
        thumbnail: "",
    });


    const fetchProducts = useCallback(() => {
        setLoading(true);
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data.products || []))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);


    const handleDetail = (item: Product) => {
        if (onSelect) onSelect(item);
    };

    const handleAdd = (item: Product) => {
        alert(`Added ${item.title} to cart`);
    };

    const handleDelete = (item: Product) => {
        alert(`Deleted ${item.title}`);
    };

    const handleAddNewProduct = () => {
        setShowForm(true);
    };

    const handleSubmit = () => {
        fetch("https://dummyjson.com/products/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        })
            .then((res) => res.json())
            .then(() => {
                setShowForm(false);
                fetchProducts();
            });
    };

    if (loading) {
        return (
            <View style={Styles().center}>
                <ActivityIndicator size="large" color="#007bff" />
            </View>
        );
    }

    return (

        <ScrollView style={{ padding: 10,margin:10 }}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ padding: 10 }}
                renderItem={({ item }) => (
                    <View style={Styles().card}>
                        <Image source={{ uri: item.thumbnail }} style={Styles().image} />
                        <View style={Styles().info}>
                            <Text style={Styles().title}>{item.title}</Text>
                            <Text style={Styles().desc}>{item.description}</Text>
                            <Text>Price: ${item.price}</Text>
                            <Text>Brand: {item.brand}</Text>
                            <Text>Category: {item.category}</Text>
                            <Text>Rating: {item.rating}</Text>
                            <Text>Stock: {item.stock}</Text>
                            <View style={Styles().buttonRow}>
                                <TouchableOpacity
                                    style={[Styles().btn, Styles().btnDetail]}
                                    onPress={() => handleDetail(item)}
                                >
                                    <Text style={Styles().btnText}>Detail</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[Styles().btn, Styles().btnAdd]}
                                    onPress={() => handleAdd(item)}
                                >
                                    <Text style={Styles().btnText}>Add</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[Styles().btn, Styles().btnDelete]}
                                    onPress={() => handleDelete(item)}
                                >
                                    <Text style={Styles().btnText}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />

            

            <Modal visible={showForm} transparent animationType="slide">
                <View style={Styles().modalContainer}>
                    <View style={Styles().modalContent}>
                        <TextInput
                            placeholder="Title"
                            value={form.title}
                            onChangeText={(t) => setForm({ ...form, title: t })}
                            style={Styles().input}
                        />
                        <TextInput
                            placeholder="Description"
                            value={form.description}
                            onChangeText={(t) => setForm({ ...form, description: t })}
                            style={Styles().input}
                        />
                        <TextInput
                            placeholder="Price"
                            keyboardType="numeric"
                            value={form.price.toString()}
                            onChangeText={(t) => setForm({ ...form, price: Number(t) })}
                            style={Styles().input}
                        />
                        <TextInput
                            placeholder="Brand"
                            value={form.brand}
                            onChangeText={(t) => setForm({ ...form, brand: t })}
                            style={Styles().input}
                        />
                        <TextInput
                            placeholder="Category"
                            value={form.category}
                            onChangeText={(t) => setForm({ ...form, category: t })}
                            style={Styles().input}
                        />
                        <TextInput
                            placeholder="Stock"
                            keyboardType="numeric"
                            value={form.stock.toString()}
                            onChangeText={(t) => setForm({ ...form, stock: Number(t) })}
                            style={Styles().input}
                        />
                        <TextInput
                            placeholder="Rating"
                            keyboardType="numeric"
                            value={form.rating.toString()}
                            onChangeText={(t) => setForm({ ...form, rating: Number(t) })}
                            style={Styles().input}
                        />
                        <TextInput
                            placeholder="Thumbnail URL"
                            value={form.thumbnail}
                            onChangeText={(t) => setForm({ ...form, thumbnail: t })}
                            style={Styles().input}
                        />

                        <View style={Styles().buttonRow}>
                            <TouchableOpacity
                                style={[Styles().btn, Styles().btnAdd]}
                                onPress={handleSubmit}
                            >
                                <Text style={Styles().btnText}>Submit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[Styles().btn, Styles().btnDelete]}
                                onPress={() => setShowForm(false)}
                            >
                                <Text style={Styles().btnText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
}
