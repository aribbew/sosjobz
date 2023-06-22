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
import { enableLatestRenderer, PROVIDER_GOOGLE } from 'react-native-maps';
import MapView from 'react-native-maps';

const MapUser = () => {
    enableLatestRenderer();

    return (
        <View style={styles.mapContainer}>
            <MapView style={styles.map} />
        </View>
    )
}


const styles = StyleSheet.create({

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

})



export default MapUser