import { View, Text, StyleSheet } from 'react-native'

import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoadingStates() {

    const [order, setOrder] = useState('')

    console.log(order)

    useEffect(() => {
        const fetchStoredRegion = async () => {
            try {
                const Order = await AsyncStorage.getItem('@My-OrderObject');
                if (Order) {
                    const order = JSON.parse(Order)
                    setOrder(order)
                }
            } catch (error) {
                console.log('Error fetching stored region data:', error);
            }
        };
        fetchStoredRegion();
    }, [])

    return (
        <View>
            <Text>{order}</Text>
        </View>
    )
}

export default LoadingStates;