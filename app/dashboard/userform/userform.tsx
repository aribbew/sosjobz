import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, StatusBar, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Icon, Button } from '@rneui/themed';
import { API, Auth, graphqlOperation } from 'aws-amplify'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import HomeCat from '../../components/ListCategorys';
import { createOrders } from '../../../src/graphql/mutations';
import { listCategorys } from '../../../src/graphql/queries';

function UserForm() {
    const [storageRegion, setStoredRegion] = useState(null);
    const [responseOrder, setResponseOrder] = useState(null);
    const [responseOrderId, setResponseOrderId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [listCategory, setListCategory] = useState(null);
    const [cat, setCat] = useState(null);
    const [catIds, setCatIds] = useState([]);
    const { control, handleSubmit } = useForm();
    const router = useRouter();

    const MAX_LETTERS_PDESC = 41;
    const MAX_LETTERS = 656;

    useEffect(() => {
        const loadSelectedContent = async () => {
            try {
                const value = await AsyncStorage.getItem('@ListCategorySelection');
                if (value !== null) {
                    setListCategory(value);
                    // Fetch category data using the stored name from AsyncStorage
                }
            } catch (error) {
                console.log('Error retrieving data from AsyncStorage:', error);
            }
        };

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
        loadSelectedContent();
    }, [])

    const fetchCatIds = async () => {
        try {
            const response = await API.graphql(graphqlOperation(listCategorys));
            const categoryItems = response.data.listCategorys.items;

            // Filter the selected category from the listCategory state
            const selectedCategory = categoryItems.find((category) => category.name === listCategory);
            if (!selectedCategory) {
                console.log(`Category "${listCategory}" not found.`);
                return;
            }

            // Store the selected category ID in the catIds state
            setCatIds([selectedCategory.id]);

            setLoading(false); // Set loading to false after data is fetched
        } catch (e) {
            console.log(e);
            setLoading(false); // Set loading to false in case of an error
        }
    };



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

    // Fetch the category IDs when listCategory changes
    useEffect(() => {
        if (listCategory) {
            fetchCatIds();
        }
    }, [listCategory]);


    useEffect(() => {
        const storeResponseOrder = async () => {
            if (responseOrder) {
                try {
                    await AsyncStorage.setItem('@My-OrderObject', JSON.stringify(responseOrder));
                } catch (error) {
                    console.error('Error storing responseOrder in AsyncStorage:', error);
                }
            }
        };

        storeResponseOrder();
    }, [responseOrder]);

    useEffect(() => {
        const storeResponseOrderId = async () => {
            if (responseOrder) {
                try {
                    await AsyncStorage.setItem('@My-OrderObject-Id', JSON.stringify(responseOrderId));
                } catch (error) {
                    console.error('Error storing responseOrder in AsyncStorage:', error);
                }
            }
        };

        storeResponseOrderId();
    }, [responseOrderId]);

    const date = new Date();

    const StatusResponse = "New"


    const onSubmit = async (data) => {
        try {
            await AsyncStorage.setItem('@PriceRateDesc', data.priceRate);
            await AsyncStorage.setItem('@DescOfJob', data.description);
        } catch (error) {
            console.error('Error storing data in AsyncStorage:', error);
        }

        try {
            const userInfo = await Auth.currentAuthenticatedUser();

            const input = {
                createdAt: date.toISOString(),
                category: listCategory,
                geoLoc: storageRegion,
                priceRateDesc: data.priceRate,
                DescOfJob: data.description,
                userId: userInfo.attributes.sub,
                catId: catIds[0],
                status: StatusResponse,
            }

            const response = await API.graphql(
                graphqlOperation(
                    createOrders, {
                    input: input
                }
                )
            )
            // console.log(response)
            setResponseOrder(response.data.createOrders);
            setResponseOrderId(response.data.createOrders.id);
        } catch (e) {
            console.log(e)
        }
    };

    StatusBar.setBarStyle('dark-content', true);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <View style={styles.scrollviewContainer}>
                    <View style={styles.iconMap}>
                        <Icon
                            reverse
                            name='chevron-back-outline'
                            type='ionicon'
                            color='transparent'
                            reverseColor='black'
                            onPress={() => router.push('../stack/home')}
                        />
                    </View>
                    <View style={styles.containerInput}>
                        {/* Login/Password Container input (ROOT)*/}
                        <View>
                            {/* TextLogin Container */}
                            <Text style={styles.loginText}>Job Description</Text>
                            <View style={styles.cardsShowPadd}>
                                <HomeCat />
                            </View>
                            <View style={styles.InputsContainers}>
                                <View style={styles.EmailInputLabelContainerPR}>
                                    <Text style={styles.EmailInputLabel}>Price Description</Text>
                                </View>
                                {Platform.OS == "android" &&
                                    <View style={styles.emailInputPR}>
                                        <View style={styles.containerDirectEmailInputPR}>
                                            <Controller
                                                control={control}
                                                name='priceRate'
                                                defaultValue='' // Set default empty string value
                                                render={({ field: { value, onChange, onBlur } }) => (
                                                    <>
                                                        <TextInput
                                                            style={styles.emailInputField}
                                                            placeholder="Enter your Price Rate"
                                                            autoCapitalize="none"
                                                            autoCorrect={false}
                                                            textContentType="name"
                                                            value={value}
                                                            enablesReturnKeyAutomatically
                                                            onChangeText={(text) => {
                                                                if (text.length <= MAX_LETTERS_PDESC) {
                                                                    onChange(text);
                                                                }
                                                            }}
                                                            onBlur={onBlur}
                                                            placeholderTextColor="#A1A3A7"
                                                            maxLength={MAX_LETTERS_PDESC}
                                                            multiline
                                                        />
                                                        <Text style={styles.letterCounter}>
                                                            {`${value.length}/${MAX_LETTERS_PDESC} characters`}
                                                        </Text>
                                                    </>
                                                )}
                                            />
                                        </View>
                                    </View>
                                }
                                {Platform.OS == "ios" &&
                                    <View style={styles.emailInputPR}>
                                        <View style={styles.containerDirectEmailInputPR}>
                                            <Controller
                                                control={control}
                                                name='priceRate'
                                                defaultValue='' // Set default empty string value
                                                render={({ field: { value, onChange, onBlur } }) => (
                                                    <>
                                                        <TextInput
                                                            style={styles.emailInputField}
                                                            placeholder="Enter your Price Rate"
                                                            autoCapitalize="none"
                                                            autoCorrect={false}
                                                            textContentType="name"
                                                            value={value}
                                                            enablesReturnKeyAutomatically
                                                            onChangeText={(text) => {
                                                                if (text.length <= MAX_LETTERS_PDESC) {
                                                                    onChange(text);
                                                                }
                                                            }}
                                                            onBlur={onBlur}
                                                            placeholderTextColor="#A1A3A7"
                                                            maxLength={MAX_LETTERS_PDESC}
                                                            multiline
                                                        />
                                                        <Text style={styles.letterCounter}>
                                                            {`${value.length}/${MAX_LETTERS_PDESC} characters`}
                                                        </Text>
                                                    </>
                                                )}
                                            />
                                        </View>
                                    </View>
                                }
                                <View style={styles.EmailInputLabelContainer}>
                                    <Text style={styles.EmailInputLabel}>Description Of Job</Text>
                                </View>
                                {Platform.OS == "android" &&
                                    <View style={styles.emailInputDOJ}>
                                        <View style={styles.containerDirectEmailInputDOJ}>
                                            <Controller
                                                control={control}
                                                name='description'
                                                defaultValue='' // Set default empty string value
                                                render={({ field: { value, onChange, onBlur } }) => (
                                                    <>
                                                        <TextInput
                                                            style={styles.emailInputFieldBig}
                                                            placeholder="Exp: My bath pipe is broken"
                                                            autoCapitalize="none"
                                                            autoCorrect={false}
                                                            textContentType="username"
                                                            value={value}
                                                            enablesReturnKeyAutomatically
                                                            onChangeText={(text) => {
                                                                if (text.length <= MAX_LETTERS) {
                                                                    onChange(text);
                                                                }
                                                            }}
                                                            onBlur={onBlur}
                                                            placeholderTextColor="#A1A3A7"
                                                            maxLength={MAX_LETTERS}
                                                            multiline
                                                            textAlignVertical="top"
                                                        />
                                                        <Text style={styles.letterCounterBig}>
                                                            {`${value.length}/${MAX_LETTERS} characters`}
                                                        </Text>
                                                    </>
                                                )}
                                            />
                                        </View>
                                    </View>
                                }
                                {Platform.OS == "ios" &&
                                    <View style={styles.emailInputDOJ}>
                                        <View style={styles.containerDirectEmailInputDOJ}>
                                            <Controller
                                                control={control}
                                                name='description'
                                                defaultValue='' // Set default empty string value
                                                render={({ field: { value, onChange, onBlur } }) => (
                                                    <>
                                                        <TextInput
                                                            style={styles.emailInputFieldBig}
                                                            placeholder="Exp: My bath pipe is broken"
                                                            autoCapitalize="none"
                                                            autoCorrect={false}
                                                            textContentType="username"
                                                            value={value}
                                                            enablesReturnKeyAutomatically
                                                            onChangeText={(text) => {
                                                                if (text.length <= MAX_LETTERS) {
                                                                    onChange(text);
                                                                }
                                                            }}

                                                            onBlur={onBlur}
                                                            placeholderTextColor="#A1A3A7"
                                                            maxLength={MAX_LETTERS}
                                                            multiline
                                                            textAlignVertical="top"
                                                        />
                                                        <Text style={styles.letterCounterBig}>
                                                            {`${value.length}/${MAX_LETTERS} characters`}
                                                        </Text>
                                                    </>
                                                )}
                                            />
                                        </View>
                                    </View>
                                }
                            </View>
                        </View>
                    </View>
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
                            onPress={handleSubmit(async (data) => {
                                await onSubmit(data);
                                router.push('../sos/sos');
                            })}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback >
    );
}

export default UserForm;

const styles = StyleSheet.create({
    letterCounter: {
        position: 'relative',
        top: -20,
        alignSelf: 'flex-end',
        marginTop: 5,
        color: '#A1A3A7',
        fontSize: 12,
        fontFamily: 'Epilogue-Regular',
    },
    letterCounterBig: {
        position: 'relative',
        top: -20,
        left: 50,
        alignSelf: 'flex-end',
        marginTop: 5,
        color: '#A1A3A7',
        fontSize: 12,
        fontFamily: 'Epilogue-Regular',
    },
    iconMap: {
        zIndex: 3,
        elevation: 3,
        position: 'absolute',
        paddingTop: 30,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    cardsShowPadd: {
        paddingLeft: 35,
        paddingTop: 10,
        height: 'auto',
    },
    scrollviewContainer: {
        height: '100%'
    },
    region: {
        color: '#fff',
        lineHeight: 20,
        margin: 20
    },
    InputsContainers: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInput: {
        // flex: 0,
        rowGap: 10,

    },
    inputField: {
        flex: 1,
        fontSize: 13,
        width: "100%",
        padding: 14,
    },
    loginText: {
        fontSize: 24,
        paddingHorizontal: 50,
        // paddingBottom: 15,
        paddingTop: 45,
    },

    EmailInputLabel: {
        marginTop: 1,
        marginBottom: 1,
    },
    EmailInputLabelContainer: {
        alignSelf: 'flex-start',
        paddingHorizontal: 40
    },
    EmailInputLabelContainerPR: {
        alignSelf: 'flex-start',
        paddingHorizontal: 40
    },
    PasswordInputLabelContainer: {
        alignSelf: 'flex-start',
        paddingHorizontal: 40
    },
    //Android Title Search Input
    titleSearchInput: {
        paddingTop: 7,
        margin: 5
    },
    //Icon Android Style
    iconAndroid: {
        paddingTop: 10,
        paddingLeft: 10,
    },
    //First Title
    firstTitleContainer: {
        paddingTop: 10,
        paddingLeft: 10,
    },
    firstTitle: {
        fontSize: 29,
        fontFamily: 'Epilogue-Bold',
    },
    homeContainer: {
        paddingTop: 35,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
    },
    //Input Android
    emailInput: {
        backgroundColor: "white",
        height: 45,
        width: '65%',
        borderRadius: 30,
        flexDirection: "row",
        borderWidth: 1.5,
        borderColor: "transparent",
    },
    emailInputPR: {
        backgroundColor: "white",
        height: 48,
        width: '85%',
        borderRadius: 30,
        flexDirection: "row",
        borderWidth: 1.5,
        borderColor: "transparent",
    },
    emailInputDOJ: {
        backgroundColor: "white",
        height: 280,
        width: '85%',
        borderRadius: 30,
        flexDirection: "row",
        borderWidth: 1.5,
        borderColor: "transparent",
    },
    containerDirectEmailInput: {
        width: 250,

    },
    containerDirectEmailInputDOJ: {
        width: 250,

    },
    containerDirectEmailInputPR: {
        width: 300,
    },
    emailInputField: {
        padding: 14,
        fontSize: 13,
        width: "110%",
    },
    emailInputFieldBig: {
        padding: 14,
        fontSize: 13,
        width: '132%',
        height: '100%'
    },
    //Input Container Ios
    homeContainerIos: {
        flex: 0,
        paddingTop: 70,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    //Icon Ios Style 
    iconIos: {
        paddingTop: 10,
        paddingLeft: 10,
    },
    //Input Ios
    emailInputIos: {
        backgroundColor: "white",
        height: 48,
        width: '65%',
        borderRadius: 30,
        flexDirection: "row",
        borderWidth: 1.5,
        borderColor: "transparent",
    },
    containerDirectEmailInputIos: {
        width: 250,
    },
    emailInputFieldIos: {
        padding: 14,
        fontSize: 13,
        width: "100%",
    },
});
