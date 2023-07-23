import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Image,
} from 'react-native';
import { Button } from '@rneui/base';
import MapView from 'react-native-maps';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { Link, useNavigation, useRouter, useLocalSearchParams } from 'expo-router';
import LoadingDots from './LoadingDotsAnimation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const marker = require('../resources/marker/marker.png')

function MapContainer() {
    const router = useRouter();
    const [region, setRegion] = useState(null);
    const [loading, setLoading] = useState(true);


    async function getLocationAsync() {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted')
            return new Promise(async (resolve, reject) => {
                const locationListener = Location.watchPositionAsync(
                    { accuracy: Location.Accuracy.High },
                    (location) => {
                        const newRegion = {
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                            latitudeDelta: 0.0022,
                            longitudeDelta: 0.0021,
                        };
                        setRegion(newRegion);
                        resolve(newRegion);
                        setLoading(false); // Set loading to false when the location is available
                    },
                );
                // Return an object containing the locationListener and the stop function
                resolve({ locationListener, stop: (await locationListener).remove });
            });
    }

    useEffect(() => {
        getLocationAsync()
            .then(({ locationListener }) => {
                return () => locationListener.remove(); // Cleanup function to stop location updates
            })
            .catch((error) => {
                console.log('Error fetching location:', error);
                setLoading(false); // Set loading to false in case of an error
            });
    }, []);

    const storeRegionData = async (regionData) => {
        try {
            await AsyncStorage.setItem('@regionData', JSON.stringify(regionData));
        } catch (error) {
            console.log('Error saving region data:', error);
        }
    };

    function onRegionChange(newRegion: any) {
        setRegion(newRegion);
    }

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <LoadingDots />
            </View>
        );
    }

    return (
        <View style={styles.mapContainer}>
            <View style={styles.map}>
                <MapView
                    style={styles.map}
                    initialRegion={region}
                    region={region}
                    showsUserLocation={true}
                    showsMyLocationButton={false}
                    onRegionChangeComplete={onRegionChange}
                />
                <View style={styles.markerFixed}>
                    <Image style={styles.marker} source={marker} />
                </View>
                <SafeAreaView style={styles.footer}>
                    {/* <Text style={styles.region}>{JSON.stringify(region, null, 2)}</Text> */}
                </SafeAreaView>
                <View style={styles.buttonContainer}>
                    <Button
                        children={'Confirm the job'}
                        buttonStyle={{
                            borderRadius: 14,
                            backgroundColor: '#27348B',
                            height: 44,
                            width: 345,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        titleStyle={{ fontSize: 12, fontFamily: 'Epilogue-Regular' }}
                        onPress={async () => {
                            // await storeRegionData(region);
                            router.push('/dashboard/userform/');
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        //Controls 'Confirm the job' height
        height: '88%',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    markerFixed: {
        left: '50%',
        marginLeft: -24,
        marginTop: -48,
        position: 'absolute',
        top: '51%',
    },
    marker: {
        height: 48,
        width: 48,
    },
    footer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        bottom: 0,
        position: 'absolute',
        width: '100%',
    },
    region: {
        color: '#fff',
        lineHeight: 20,
        margin: 20,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
});

export default MapContainer;