import React from 'react';
import { Text, ScrollView, FlatList } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/utils/axios';
import RenderProducts from './components/render-products';

// Function to fetch product data
const fetchProductsData = async () => {
    const response = await axiosInstance.get('https://dummyjson.com/products');
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
        <ScrollView className="flex-1 p-4 bg-white">
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={RenderProducts}
            />
        </ScrollView>
    );
};

export default ProductPage;
