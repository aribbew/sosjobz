import React, { useState, useEffect, useRef } from 'react';

import { listCategorys } from "../../src/graphql/queries"
import { API, graphqlOperation } from 'aws-amplify';
import { SafeAreaView, Text, StyleSheet, View, Image, Pressable, TouchableOpacity, Platform, TextInput } from 'react-native';
import { ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import useSWR from 'swr'
import { Icon } from '@rneui/base';
import { Skeleton } from 'moti/skeleton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeCat = () => {

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedContent, setSelectedContent] = React.useState(null);
    const scrollViewRef = useRef(null); // Create a ref for ScrollView
    const [cat, setCat] = useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [loading, setLoading] = useState(true);
    const [imageLoadError, setImageLoadError] = useState(false);
    const [selectedCardRef, setSelectedCardRef] = useState(null);

    const resetScrollViewPosition = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
        }
    };

    const handlePress = (name, ref) => {
        if (selectedCategory === name) {
            setSelectedCategory(null); // If the same category is selected again, deselect it
        } else {
            setSelectedCategory(name); // Select the new category
            storeSelectedContent(name);
            setSelectedCardRef(ref);
        }
    };

    const storeSelectedContent = async (name) => {
        try {
            await AsyncStorage.setItem('@ListCategorySelection', name);
        } catch (error) {
            console.log('Error storing data in AsyncStorage:', error);
        }
    };

    const filteredCategories = cat.filter((cat) => {
        if (selectedCategory) {
            return cat.name.toLowerCase().includes(searchTerm.toLowerCase()) && cat.name === selectedCategory;
        }
        return cat.name.toLowerCase().includes(searchTerm.toLowerCase());
    });


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


    useEffect(() => {
        // Call the reset function whenever the search term changes
        resetScrollViewPosition();
    }, [searchTerm]);

    useEffect(() => {
        if (selectedCardRef && selectedCategory) {
            const selectedCardOffsetX = selectedCardRef.current.offsetLeft;
            scrollViewRef.current.scrollTo({ x: selectedCardOffsetX, y: 0, animated: true });
        }
    }, [selectedCategory]);


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


    return (

        <View>
            {Platform.OS == "android" &&
                <View>
                    <View style={styles.homeContainer}>
                        <Text>Service   </Text>
                        <View style={styles.emailInput}>
                            <Icon name='search' type='feather' style={styles.iconAndroid} />
                            <TextInput
                                style={styles.inputFields}
                                placeholder="Search..."
                                placeholderTextColor={'grey'}
                                onChangeText={(text) => setSearchTerm(text)}
                                value={searchTerm}
                            />
                        </View>
                    </View>
                </View>
            }
            {Platform.OS == "ios" &&
                <View>
                    <View>
                        <View style={styles.homeContainerIos}>
                            <Text>Service   </Text>
                            <View style={styles.emailInputIos}>
                                <Icon name='search' type='feather' style={styles.iconIos} />
                                <TextInput
                                    style={styles.inputFields}
                                    placeholder="Search..."
                                    placeholderTextColor={'black'}
                                    onChangeText={(text) => setSearchTerm(text)}
                                    value={searchTerm}
                                />
                            </View>
                        </View>
                    </View>

                </View>
            }
            <View>
                {loading ? (
                    <ScrollView
                        horizontal={true}
                        scrollEnabled={true}
                        ref={scrollViewRef}
                        nestedScrollEnabled={true}
                    >
                        {renderLoadingSkeletons()}
                    </ScrollView>
                ) : (
                    <ScrollView horizontal={true} scrollEnabled={true}
                        nestedScrollEnabled={true} ref={scrollViewRef} >
                        {filteredCategories.map((cat) => (
                            <TouchableOpacity key={cat.id}
                                style={[
                                    styles.horizontalScrollCards,
                                    selectedCategory === cat.name ? styles.selectedCard : null,
                                ]}
                                onPress={() => handlePress(cat.name, scrollViewRef)}>
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
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    selectedCard: {
        borderWidth: 1,
        borderColor: 'yellow', // You can use any color you prefer here
    },
    inputFields: {
        width: '85%'
    },
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
        backgroundColor: 'white',
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


export default HomeCat;

