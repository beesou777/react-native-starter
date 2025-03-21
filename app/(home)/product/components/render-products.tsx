import React from 'react';
import { View, Text, Image } from 'react-native';

const RenderProducts = ({ item }) => {
    return (
        <View className="mb-5 p-3 border border-gray-300 rounded-lg card ">
            <Image source={{ uri: item.thumbnail }} className="w-full h-48 object-contain mb-4" />
            <Text className="text-lg font-bold mb-2">{item.title}</Text>
            <Text className="text-sm text-primary mb-4">{item.description}</Text>
            <Text className="text-lg font-semibold text-primary-foreground">${item.price}</Text>
        </View>
    );
};

export default RenderProducts;
