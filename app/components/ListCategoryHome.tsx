import React, { useState, useEffect } from 'react';

import { listCategorys } from "../../src/graphql/queries"
import { API, graphqlOperation } from 'aws-amplify';
import { SafeAreaView, Text, StyleSheet, View, Image, Pressable, TouchableOpacity, Platform, TextInput } from 'react-native';
import { ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import useSWR from 'swr'
import { Icon } from '@rneui/base';
import { ViewBase } from 'react-native';
import { Skeleton } from 'moti/skeleton'

// const getImage = (name) => {
//     if (name === 'Administrateur de base de données') {
//         // return require(ddbAdmin);
//     } else if (name === 'Categoría 2') {
//         // return require('../../resources/assets/foto2.jpg');
//     } else if (name === 'Categoría 3') {
//         // return require('../../resources/assets/foto3.jpg');
//     }
//     // Puedes agregar más condiciones para asignar diferentes fotos a cada categoría
// };


const ListHomeCat = () => {

    const [cat, setCat] = useState([]);
    const [loading, setLoading] = useState(true);
    const [imageLoadError, setImageLoadError] = useState(false);


    //Font loading start this gets all the return
    const [fontsLoaded] = useFonts({
        'Epilogue-Bold': require('../resources/fonts/Epilogue-Bold.ttf'),
    });

    useEffect(() => {
        const fetchCat = async () => {
            try {
                const response = await API.graphql(graphqlOperation(listCategorys));
                setCat(response.data.listCategorys.items);
                setLoading(false); // Set loading to false after data is fetched
            } catch (e) {
                console.log(e);
                setLoading(false); // Set loading to false in case of error
            }
        };
        fetchCat();
    }, []);

    const handleImageError = (categoryId) => {
        // Find the category with the specified categoryId and mark it as failed to load
        setCat((prevCat) => {
            return prevCat.map((cat) => {
                if (cat.id === categoryId) {
                    return { ...cat, imageError: true };
                }
                return cat;
            });
        });
    };

    const renderLoadingSkeletons = () => {
        const skeletons = [];
        for (let i = 0; i < 151; i++) {
            skeletons.push(
                <View key={i} style={styles.horizontalScrollCards}>
                    <Skeleton colorMode="light" height={98} width={102} radius="square" />
                </View>
            );
        }
        return skeletons;
    };



    return (
        <View>
            {loading ? (
                <ScrollView
                    horizontal={true}
                    scrollEnabled={true}
                    nestedScrollEnabled={true}
                >
                    {renderLoadingSkeletons()}
                </ScrollView>
            ) : (
                // Render the category list once data is fetched
                <ScrollView
                    horizontal={true}
                    scrollEnabled={true}
                    nestedScrollEnabled={true}
                >
                    {cat.map((cat) => (
                        <View key={cat.id} style={styles.horizontalScrollCards}>
                            {cat.imageError ? (
                                <Skeleton
                                    colorMode="light"
                                    height={98}
                                    width={102}
                                    radius="square"
                                />
                            ) : (
                                <Image
                                    source={{ uri: cat.image }}
                                    style={{ width: 102, height: 98, zIndex: 0, borderRadius: 10 }}
                                    onError={() => handleImageError(cat.id)}
                                />
                            )}
                            <Text style={styles.textSmallCardsStyle}>{cat.name}</Text>
                        </View>
                    ))}
                </ScrollView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    textSmallCardsStyle: {
        position: 'absolute',
        bottom: 10,
        color: 'white',
        fontFamily: 'Epilogue-Bold',
        left: 0.5,
        width: 'auto'

    },
    iconIos: {
        paddingTop: 10,
        paddingLeft: 10,
    },
    iconAndroid: {
        paddingTop: 10,
        paddingLeft: 10,
    },
    emailInput: {
        backgroundColor: "white",
        height: 48,
        width: '65%',
        borderRadius: 30,
        flexDirection: "row",
        borderWidth: 1.5,
        borderColor: "transparent",
    },
    emailInputIos: {
        backgroundColor: "white",
        height: 48,
        width: '65%',
        borderRadius: 30,
        flexDirection: "row",
        borderWidth: 1.5,
        borderColor: "transparent",
    },
    homeContainer: {
        paddingTop: 35,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
    },
    homeContainerIos: {
        flex: 0,
        paddingTop: 70,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    horizontalScrollCards: {
        backgroundColor: '#27348B',
        height: 98,
        width: 102,
        borderRadius: 10,
        margin: 5,
        shadowColor: "#000000",
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 2.54,
        elevation: 3
    },
    footer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        bottom: 0,
        position: 'absolute',
        width: '100%'
    },
    region: {
        color: '#fff',
        lineHeight: 20,
        margin: 20

    }
})


export default ListHomeCat;

