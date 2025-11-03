import { useEffect, useState } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import Styles from "./style";

interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
    category?: string;
    discount?: number;
    rating?: number;
    stock?: number;
    brand?: string;
    thumbnail?: string;
}
export default function Product() {
    const [product, setProduct] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        console.log('Fetching products...');
        fetch('https://dummyjson.com/products')
            .then(res => {
                console.log('Response received:', res.status);
                return res.json();
            })
            .then(data => {
                console.log('Data received:', data);
                if (data && data.products) {
                    setProduct(data.products);
                } else {
                    console.error('No products found in response');
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching products:", err);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return (
            <View style={Styles().center}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View style={{ padding: 10 }}>
            {product.map((item) => (
                <View key={item.id} style={Styles().card}>
                    <View style={Styles().info}>
                        <Text style={Styles().title}>{item.name}</Text>
                        <Text style={Styles().desc}>{item.description}</Text>
                        <Text style={Styles().price}>${item.price}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
}