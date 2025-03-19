import React from 'react';
import { Text, FlatList, SafeAreaView } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios';
import RenderProducts from './components/render-products';

// Function to fetch product data
const fetchProductsData = async () => {
    const response = await axiosInstance.get('/products');
    const data = await response.data;
    return data.products;
};

const ProductPage = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProductsData,
    });

    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    if (error) {
        return <Text>Error loading product data!</Text>;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={RenderProducts}
            contentContainerStyle={{ padding: 16, backgroundColor: 'white' }}
        />
        </SafeAreaView>
    );
};

export default ProductPage;
