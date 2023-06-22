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

import WorkTypesRow from './WorkTypesRow'


const WorkTypes = () => {
    return (
        <View style={styles.workTypesContainer}>
            <WorkTypesRow />
        </View>
    )
}

const styles = StyleSheet.create({
    workTypesContainer: {

    },
})


export default WorkTypes