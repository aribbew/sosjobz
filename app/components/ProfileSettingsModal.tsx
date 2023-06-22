import { StatusBar } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import React, { useEffect } from 'react';
import { Button, Icon } from '@rneui/base';


function ProfileSettingsModal() {
    StatusBar.setBarStyle('dark-content', true);
    //Font loading start this gets all the return
    const [fontsLoaded] = useFonts({
        'Epilogue-Bold': require('../resources/fonts/Epilogue-Bold.ttf'),
        'Epilogue-Regular': require('../resources/fonts/Epilogue-Regular.ttf'),
        'Epilogue-Semibold': require('../resources/fonts/Epilogue-SemiBold.ttf'),
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
                    <Text style={styles.textFixer}>Principal</Text>

                    <Button children={'Address'} titleStyle={{ fontFamily: 'Epilogue-Regular', color: 'black', fontSize: 15, }} buttonStyle={{
                        justifyContent: 'space-between', backgroundColor: 'white', borderRadius: 6, height: 40, borderWidth: 1, width: 359, shadowColor: "#000", shadowOffset: {
                            width: 2,
                            height: 4,
                        }, shadowOpacity: 0.25,
                        shadowRadius: 4.84,

                        elevation: 5,
                        zIndex: 2,
                    }} iconRight={true} iconPosition='right' icon={<Icon name='chevron-forward' type='ionicon' />} />
                    <Button children={'Security'} titleStyle={{ fontFamily: 'Epilogue-Regular', color: 'black', fontSize: 15, }} buttonStyle={{
                        justifyContent: 'space-between', backgroundColor: 'white', borderWidth: 1, borderRadius: 6, height: 40, width: 359, shadowColor: "#000", shadowOffset: {
                            width: 0,
                            height: 45,
                        }, shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                        zIndex: 2,
                    }} iconRight={true} iconPosition='right' icon={<Icon name='chevron-forward' type='ionicon' />} />
                    <Button children={'Payment Method'} titleStyle={{ fontFamily: 'Epilogue-Regular', color: 'black', fontSize: 15, }} buttonStyle={{
                        justifyContent: 'space-between', backgroundColor: 'white', borderWidth: 1, borderRadius: 6, height: 40, width: 359, shadowColor: "#000", shadowOffset: {
                            width: 0,
                            height: 45,
                        }, shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                        zIndex: 2,
                    }} iconRight={true} iconPosition='right' icon={<Icon name='chevron-forward' type='ionicon' />} />

                    <Text style={styles.textFixer}>Content</Text>
                    <Button children={'Language'} titleStyle={{ color: 'black', fontSize: 15, fontFamily: 'Epilogue-Regular' }} buttonStyle={{
                        justifyContent: 'space-between', backgroundColor: 'white', borderWidth: 1, borderRadius: 6, height: 40, width: 359, shadowColor: "#000", shadowOffset: {
                            width: 0,
                            height: 45,
                        }, shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                        zIndex: 2,
                    }} iconRight={true} iconPosition='right' icon={<Icon name='chevron-forward' type='ionicon' />} />

                    <View style={styles.buttonContainer}>
                        <Button children={'Create a Worker Account'} buttonStyle={{ borderRadius: 14, backgroundColor: 'red', height: 44, width: 345, alignItems: 'center', justifyContent: 'center' }} titleStyle={{ fontSize: 12, fontFamily: 'Epilogue-Regular' }} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingRight: 10,
    },
    textFixer: {
        fontFamily: 'Epilogue-Bold'
    },
    mainContainer: {
        top: '110%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        paddingTop: 10,
        borderRadius: 21,
        height: 450,
        width: 375,
        backgroundColor: '#fff',
        paddingLeft: 10,
        gap: 5
    }
})

export default ProfileSettingsModal