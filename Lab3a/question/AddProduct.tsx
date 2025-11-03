
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import Styles from './style';

export default function AddProduct() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('0');
	const [brand, setBrand] = useState('');
	const [category, setCategory] = useState('');
	const [stock, setStock] = useState('0');
	const [rating, setRating] = useState('0');
	const [thumbnail, setThumbnail] = useState('');

	const router = useRouter();

	const handleSubmit = () => {
		const body = {
			title,
			description,
			price: Number(price),
			brand,
			category,
			stock: Number(stock),
			rating: Number(rating),
			thumbnail,
		};

		fetch('https://dummyjson.com/products/add', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		})
			.then((res) => res.json())
			.then(() => {
				Alert.alert('Success', 'Product added');
				// navigate back to Products tab
				router.push({ pathname: './' } as any);
			})
			.catch((err) => {
				Alert.alert('Error', String(err));
			});
	};

	return (
		<View style={Styles().modalContainer}>
			<Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Add Product</Text>
			<TextInput placeholder="Title" value={title} onChangeText={setTitle} style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 8 }} />
			<TextInput placeholder="Description" value={description} onChangeText={setDescription} style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 8 }} />
			<TextInput placeholder="Price" value={price} onChangeText={setPrice} keyboardType="numeric" style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 8 }} />
			<TextInput placeholder="Brand" value={brand} onChangeText={setBrand} style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 8 }} />
			<TextInput placeholder="Category" value={category} onChangeText={setCategory} style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 8 }} />
			<TextInput placeholder="Stock" value={stock} onChangeText={setStock} keyboardType="numeric" style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 8 }} />
			<TextInput placeholder="Rating" value={rating} onChangeText={setRating} keyboardType="numeric" style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 8 }} />
			<TextInput placeholder="Thumbnail URL" value={thumbnail} onChangeText={setThumbnail} style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 8 }} />

			<View style={{ flexDirection: 'row', gap: 8 }}>
				<TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: '#28a745', padding: 12, borderRadius: 6, flex: 1, alignItems: 'center' }}>
					<Text style={{ color: '#fff', fontWeight: 'bold' }}>Submit</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => router.push({ pathname: './' } as any)} style={{ backgroundColor: '#dc3545', padding: 12, borderRadius: 6, flex: 1, alignItems: 'center' }}>
					<Text style={{ color: '#fff', fontWeight: 'bold' }}>Cancel</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
