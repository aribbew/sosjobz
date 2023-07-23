import {
    StyleSheet,
    View,
    TextInput,
    Text,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import MapUser from '../../components/MapUser'
import WorkTypes from '../../components/WorkTypes'
import { Button } from '@rneui/base';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import React, { useEffect, useState } from 'react';
import { Icon } from '@rneui/base';
import { useRouter } from 'expo-router';
import { useRoute } from '@react-navigation/native';

function useroutput(props) {

    const geoState = useState()


    const router = useRouter();
    const [fontsLoaded] = useFonts({
        'Epilogue-Bold': require('../../resources/fonts/Epilogue-Bold.ttf'),
        'Epilogue-Regular': require('../../resources/fonts/Epilogue-Regular.ttf'),
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
            <>
                <View style={styles.iconMap}>
                    <Icon
                        reverse
                        name='chevron-back-outline'
                        type='ionicon'
                        color='transparent'
                        onPress={() => router.push('../stack/home')}
                    />
                </View>
                <MapUser />
                {/* <View style={styles.buttonContainer}>
                    <Button children={'Confirm the job'}
                        buttonStyle={{ borderRadius: 14, backgroundColor: '#27348B', height: 44, width: 345, alignItems: 'center', justifyContent: 'center' }}
                        titleStyle={{ fontSize: 12, fontFamily: 'Epilogue-Regular' }}
                        onPress={() => {
                            console.log()
                        }}
                    />
                </View> */}
            </>
        )

    }
}

const styles = StyleSheet.create({

    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    iconMap: {
        zIndex: 3,
        elevation: 3,
        position: 'absolute',
        paddingTop: 30,
    },

})



export default useroutput