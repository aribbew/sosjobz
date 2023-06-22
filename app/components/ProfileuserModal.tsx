import { StatusBar, } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import React, { useEffect } from 'react';
import { Button, Icon } from '@rneui/base';

function ProfileuserModal() {
    StatusBar.setBarStyle('dark-content', true);


    //Font loading start this gets all the return
    const [fontsLoaded] = useFonts({
        'Epilogue-Bold': require('../resources/fonts/Epilogue-Bold.ttf'),
        'Epilogue-Regular': require('../resources/fonts/Epilogue-Regular.ttf'),
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync
        }
        prepare();
    }, []);

    if (!fontsLoaded) {

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
                    <Text style={styles.nameText}>$ProfileName</Text>
                    <Button children={'Edit Profile'} buttonStyle={{ borderRadius: 5, backgroundColor: 'red', height: 35, width: 105, alignItems: 'center', justifyContent: 'center' }} titleStyle={{ fontSize: 12, fontFamily: 'Epilogue-Regular' }} />
                </View>


            </View>
        )
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
        fontFamily: 'Epilogue-Bold'
    }
})

export default ProfileuserModal