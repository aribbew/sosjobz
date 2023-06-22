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

const WorkTypesRow = () => {
    return (
        <View style={styles.containerWholeRow}>
            <View style={styles.imageContainer}>
                {/* Image */}
            </View>
            <View style={styles.titleContainer}>

                <Text style={styles.categorySize}>$WorkCategory$</Text>
                <Text style={styles.categorySize}>$TimeOfArrive$</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text> $PrcTag</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    categorySize: {
        fontSize: 11,
        paddingLeft: 10
    },
    containerWholeRow: {
        width: '100%',
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'center'
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    imageContainer: {
        backgroundColor: '#FFDE00',
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    priceContainer: {
        justifyContent: 'center'
    }
})


export default WorkTypesRow