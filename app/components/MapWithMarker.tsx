import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import { Button } from '@rneui/base';
import MapView from 'react-native-maps';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { useRouter } from 'expo-router';
import LoadingDots from './LoadingDotsAnimation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const marker = require('../resources/marker/marker.png')

function MapWithMarker() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    const [storageRegion, setStoredRegion] = useState(null);


    useEffect(() => {
        const fetchStoredRegion = async () => {
            try {
                const regionData = await AsyncStorage.getItem('@regionData');
                if (regionData) {
                    setStoredRegion(JSON.parse(regionData));
                }
            } catch (error) {
                console.log('Error fetching stored region data:', error);
            }
        };
        fetchStoredRegion()
    }, []);


    return (
        <View style={styles.mapContainer}>
            <MapView
                style={styles.map}
                initialRegion={storageRegion}
                region={storageRegion}
                showsUserLocation={true}
                showsMyLocationButton={false}
                scrollEnabled={false} // Disable map panning/movement
                zoomEnabled={false}   // Disable map zooming
            />
            <View style={styles.markerFixed}>
                <Image style={styles.marker} source={marker} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: 148, // Set the width of the MapView
        height: 146, // Set the height of the MapView
        borderRadius: 32
    },
    markerFixed: {
        marginLeft: -24,
        marginTop: -48,
        position: 'absolute',
        top: '63%',
    },
    marker: {
        height: 35,
        width: 35,
    },
    mapContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
});
export default MapWithMarker;
