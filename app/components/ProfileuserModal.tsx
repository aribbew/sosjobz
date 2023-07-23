import { StatusBar } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import { Button, Icon } from '@rneui/base';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ProfileuserModal() {
    const [username, setUsername] = useState('');

    StatusBar.setBarStyle('dark-content', true);

    const [fontsLoaded] = useFonts({
        'Epilogue-Bold': require('../resources/fonts/Epilogue-Bold.ttf'),
        'Epilogue-Regular': require('../resources/fonts/Epilogue-Regular.ttf'),
    });

    useEffect(() => {
        const prepare = async () => {
            await SplashScreen.preventAutoHideAsync();
        };

        loadCachedUsername();
        prepare();
    }, []);

    useEffect(() => {
        saveUsernameToCache();
    }, [username]);

    const loadCachedUsername = async () => {
        try {
            const cachedUsername = await AsyncStorage.getItem('username');
            if (cachedUsername) {
                setUsername(cachedUsername);
            } else {
                fetchUser();
            }
        } catch (error) {
            console.log('Error loading username from cache:', error);
            fetchUser(); // If error in loading from cache, fetch from Auth
        }
    };

    const fetchUser = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            const fetchedUsername = user.username;
            setUsername(fetchedUsername);
        } catch (error) {
            console.log('Error fetching username:', error);
            setUsername(''); // Set username to empty string to clear the UI
        }
    };

    const saveUsernameToCache = async () => {
        try {
            await AsyncStorage.setItem('username', username);
        } catch (error) {
            console.log('Error saving username to cache:', error);
        }
    };

    if (!fontsLoaded) {
        return null;
    } else {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Icon
                            style={styles.imageIcon}
                            name='person'
                            type='ionicon'
                            color={'white'}
                        />
                    </View>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.nameText}>{username}</Text>
                    <Button children={'Logout'} buttonStyle={{ borderRadius: 5, backgroundColor: 'red', height: 35, width: 105, alignItems: 'center', justifyContent: 'center' }} titleStyle={{ fontSize: 12, fontFamily: 'Epilogue-Regular' }} />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '11%',
    },
    container: {
        height: 100,
        width: 100,
        backgroundColor: 'white',
        borderRadius: 50,
        zIndex: 3, // works on ios
        elevation: 0, // works on android
        position: 'relative',
        top: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        backgroundColor: '#FFDE00',
        height: 94,
        width: 94,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageIcon: {

    },
    button: {
        borderRadius: 60,
    },
    nameContainer: {
        height: 137,
        width: 335,
        backgroundColor: 'white',
        borderRadius: 28,
        position: 'absolute',
        top: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
        gap: 15
    },
    nameText: {
        fontSize: 16,
        fontFamily: 'Epilogue-Bold',
        color: 'black',
    }
})

export default withAuthenticator(ProfileuserModal)