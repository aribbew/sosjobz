import { useState, useEffect, useRef } from 'react';
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
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font';
import { Icon } from '@rneui/themed';
import { useRouter } from "expo-router";

function userentry() {

    const inputRef = useRef();

    const router = useRouter();

    const [workPlace, setWorkPlace] = useState(null)


    const [fontsLoaded] = useFonts({
        'Epilogue-Bold': require('../../resources/fonts/Epilogue-Bold.ttf'),
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
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View>
                    <View style={styles.searcherContainer}>
                        <GooglePlacesAutocomplete
                            enablePoweredByContainer={false}
                            ref={inputRef}
                            renderLeftButton={() => <Icon name='arrow-left'
                                type='feather' style={styles.icon} onPress={() => router.push('../stack')} />}
                            textInputProps={{
                                placeholderTextColor: '#000',
                                autoFocus: true,
                            }}
                            placeholder='Where do you need the service?'
                            onPress={(data, details = null) => {
                                setWorkPlace({ data, details });
                            }}

                            fetchDetails
                            styles={{
                                container: {
                                    width: '95%',
                                },
                                textInput: {
                                    borderRadius: 30,
                                    height: 48,
                                    fontSize: 13,
                                },
                                listView: {
                                },


                            }}
                            query={{
                                key: 'AIzaSyBtX37Tu7iOHRpOPOZ5s22Hl4Uc-O8nLMY',
                                language: 'en',
                            }}
                        />
                    </View>
                    <View style={styles.keyboardAvHelper}>
                    </View>
                </View>
            </TouchableWithoutFeedback >
        )
    }
}


const styles = StyleSheet.create({
    searcherContainer: {
        paddingTop: 35,
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    keyboardAvHelper: {
        height: "100%"
    },
    icon: {
        paddingTop: 13,
    },
})

export default userentry

