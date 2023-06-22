import { StatusBar } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import React, { useEffect } from 'react';
import { Icon } from '@rneui/base';
import ProfileuserModal from '../../components/ProfileuserModal';
import ProfileSettingsModal from '../../components/ProfileSettingsModal';
import { Auth } from 'aws-amplify';

const signout = Auth.signOut();

function profile() {
  StatusBar.setBarStyle('dark-content', true);
  //Font loading start this gets all the return
  const [fontsLoaded] = useFonts({
    'Epilogue-Bold': require('../../resources/fonts/Epilogue-Bold.ttf'),
    'Epilogue-Regular': require('../../resources/fonts/Epilogue-Regular.ttf'),
    'Epilogue-Semibold': require('../../resources/fonts/Epilogue-SemiBold.ttf'),
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
          <View style={styles.fill}></View>
          <Text style={styles.titleText}>Profile</Text>
          <Icon
            style={styles.titleIcon}
            name='log-out-outline'
            type='ionicon'
            color={'white'}
            onPressIn={() => { signout }}
          />
        </View>
        <ProfileuserModal />
        <ProfileSettingsModal />
      </View>
    )
  }
}

const styles = StyleSheet.create({

  titleIcon: {
    paddingRight: 20,
  },
  titleText: {
    fontFamily: 'Epilogue-Semibold',
    color: 'white',
    paddingLeft: 30,
  },
  fill: {

  },
  container: {
    paddingTop: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#27348B',
    flexDirection: 'row',
  },
  mainContainer: {
    backgroundColor: '#27348B',
    height: '25%'
  },
})

export default profile