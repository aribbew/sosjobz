import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image as RNImage, ScrollView } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { listCategorys } from '../../../src/graphql/queries';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Skeleton } from 'moti/skeleton';
import MapWithMarker from '../../components/MapWithMarker';
import { Button, Icon } from '@rneui/themed';
import { useRouter } from 'expo-router';
import LoadingStates from '../../components/LoadingStates';
import { onUpdateOrders } from '../../components/subscriptions';
import { getOrders } from '../../../src/graphql/queries';

function sos() {
    const [order, setOrder] = useState('');
    const [storedRegion, setStoredRegion] = useState(null);
    const [listCategory, setListCategory] = useState(null);
    const [cat, setCat] = useState([]);
    const [orderData, setOrderData] = useState('');
    const [orderId, setOrderId] = useState('');
    const router = useRouter();
    const [categoryData, setCategoryData] = useState(null);
    const [orderIdFetched, setOrderIdFetched] = useState(false);
    const [descOfJob, setDescOfJob] = useState(null);
    const [priceRate, setPriceRate] = useState(null);

    useEffect(() => {
        // Subscription setup for real-time updates
        const subscription = API.graphql(
            graphqlOperation(onUpdateOrders, { id: orderId })
        ).subscribe({
            next: ({ value }) => {
                // Update the order state when a new order update is received
                setOrder(value.data.onUpdateOrders);
            },
            error: error => console.warn(error)
        });

        // Clean up the subscription when the component unmounts
        return () => {
            subscription.unsubscribe();
        };
    }, [orderId]);

    useEffect(() => {
        const fetchStoreOrder = async () => {
            try {
                if (orderIdFetched) {
                    const orderDat = await API.graphql(graphqlOperation(getOrders, { id: orderId }));
                    setOrderData(JSON.stringify(orderDat));
                }
            } catch (error) {
                console.log('Error fetching stored region data:', error);
            }
        };

        fetchStoreOrder();
    }, [orderIdFetched, orderId]);

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

        const loadSelectedContent = async () => {
            try {
                const value = await AsyncStorage.getItem('@ListCategorySelection');
                if (value !== null) {
                    setListCategory(value);
                }
            } catch (error) {
                console.log('Error retrieving data from AsyncStorage:', error);
            }
        };

        const fetchCat = async () => {
            try {
                const response = await API.graphql(graphqlOperation(listCategorys));
                setCat(response.data.listCategorys.items);
            } catch (e) {
                console.log(e);
            }
        };

        loadSelectedContent();
        fetchStoredRegion();
        fetchCat();
    }, []);

    useEffect(() => {
        // Filter the desired category and set it in categoryData state
        if (listCategory && cat.length > 0) {
            const selectedCategory = cat.find((category) => category.name === listCategory);
            if (selectedCategory) {
                setCategoryData(selectedCategory);
            }
        }
    }, [listCategory, cat]);

    const retrieveFormData = async () => {
        try {
            const priceRate = await AsyncStorage.getItem('@PriceRateDesc');
            const description = await AsyncStorage.getItem('@DescOfJob');

            return { priceRate, description };
        } catch (error) {
            console.error('Error retrieving data from AsyncStorage:', error);
            return { priceRate: null, description: null };
        }
    };

    useEffect(() => {
        // Call the function to retrieve the data from AsyncStorage.
        retrieveFormData().then(({ priceRate, description }) => {
            setPriceRate(priceRate);
            setDescOfJob(description);
        });
    }, []);

    useEffect(() => {
        const fetchUserOrder = async () => {
            try {
                const orderData = await AsyncStorage.getItem('@My-OrderObject');
                if (orderData) {
                    setOrder(JSON.parse(orderData));
                }
            } catch (e) {
                console.log(e);
            }
        };

        const fetchUserOrderId = async () => {
            try {
                const orderDataId = await AsyncStorage.getItem('@My-OrderObject-Id');
                if (orderDataId) {
                    setOrderId(JSON.parse(orderDataId));
                    setOrderIdFetched(true); // Mark orderId as fetched
                }
            } catch (e) {
                console.log(e);
            }
        };

        // Call both functions in the same useEffect
        fetchUserOrderId();
        fetchUserOrder();
    }, []);

    const renderLoadingSkeletons = () => {
        const skeletons = [];
        for (let i = 0; i < 1; i++) {
            skeletons.push(
                <View style={styles.cardsContainer} key={i}>
                    <View key={i} style={styles.horizontalScrollCards}>
                        <Skeleton colorMode="light" height={130} width={135} radius="square" />
                    </View>
                </View>
            );
        }
        return skeletons;
    };

    return (
        <View style={styles.iconTitleContainer}>
            <View style={styles.iconTitleContainer}>
                <View style={styles.iconMap}>
                    <Icon
                        reverse
                        name='chevron-back-outline'
                        type='ionicon'
                        color='transparent'
                        reverseColor='black'
                        onPress={() => router.push('../userform/userform')}
                    />
                </View>
                <Text style={styles.loginText}>Job Description</Text>
            </View>
            <Text style={styles.serviceText}>Service</Text>
            <View style={styles.container}>
                <MapWithMarker />
                {categoryData ? (
                    <View style={styles.cardsContainer}>
                        <View style={styles.horizontalScrollCards}>
                            {categoryData.image && <RNImage source={{ uri: categoryData.image }} style={{ width: 135, height: 130, zIndex: 0, borderRadius: 10 }} />}
                            <Text style={styles.textSmallCardsStyle}>{categoryData.name}</Text>
                        </View>
                    </View>
                ) : (
                    <View>{renderLoadingSkeletons()}</View>
                )}
                <Button
                    children={'Chat'}
                    buttonStyle={{
                        borderRadius: 14,
                        backgroundColor: '#0500FF',
                        height: 146,
                        width: 65,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    titleStyle={{ fontSize: 12, fontFamily: 'Epilogue-Regular' }}
                    disabled={order?.status !== 'USER_P'}
                />
            </View>
            <View style={styles.priceDescContainer}>
                <Text style={styles.priceRateTitle}>Price Description</Text>
                <View style={styles.priceRateInput}>
                    <Text style={styles.priceRateField}>{priceRate}</Text>
                </View>
                <Text style={styles.descriptionTitle}>Description of job</Text>
                <View style={styles.priceDescInpuBig}>
                    <ScrollView style={styles.DescFieldBig}><Text style={styles.textBigView}>{descOfJob}</Text></ScrollView>
                </View>
                <LoadingStates style={styles.loadingStatesStyles}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    loadingStatesStyles:{
        
    },  
    serviceText: {
        position: 'relative',
        left: '44%',
        top: 20,
        zIndex: 3
    },
    cardsContainer: {
        paddingTop: 15
    },
    textBigView: {
        color: '#666363',
    },
    priceRateTitle: {
        position: 'relative',
        left: 10,
    },
    descriptionTitle: {
        position: 'relative',
        left: 10,
    },
    priceRateField: {
        padding: 14,
        fontSize: 13,
        width: "110%",
        color: '#666363',
    },
    DescFieldBig: {
        fontSize: 13,
        width: "100%",
        height: 70,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    priceRateInput: {
        backgroundColor: '#F2F2F2',
        height: 48,
        width: '85%',
        borderRadius: 30,
        flexDirection: "row",
        borderWidth: 1.5,
        color: '#DADADA',
        borderColor: "#C3BEBE",
    },
    priceDescInpuBig: {
        backgroundColor: '#F2F2F2',
        height: 86,
        width: '85%',
        borderRadius: 30,
        flexDirection: "row",
        borderWidth: 1.5,
        color: '#DADADA',
        borderColor: "#C3BEBE",
    },
    iconTitleContainer: {
        backgroundColor: '#fff',
        height: 'auto',
    },
    priceDescContainer: {
        paddingTop: 10,
        backgroundColor: '#fff',
        height: '100%',
        gap: 5,
        width: "100%",
        position: 'relative',
        left: 30,
        gap: 7
    },
    loginText: {
        fontSize: 24,
        paddingHorizontal: 50,
        paddingTop: 45,
    },
    iconMap: {
        zIndex: 3,
        elevation: 3,
        position: 'absolute',
        paddingTop: 30,
        height: 100
    },
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    region: {
        color: 'black',
        lineHeight: 20,
        margin: 20,
    },
    horizontalScrollCards: {
        backgroundColor: '#27348B',
        height: 130,
        width: 135,
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
    textSmallCardsStyle: {
        position: 'absolute',
        bottom: 10,
        color: 'white',
        fontFamily: 'Epilogue-Bold',
        left: 0.5,
        width: 'auto'
    },
});

export default sos;