import { StatusBar } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import React, { useEffect, useState } from 'react';
import { Icon, Button } from '@rneui/base';
import ProfileuserModal from '../../components/ProfileuserModal';
import ProfileSettingsModal from '../../components/ProfileSettingsModal';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { useRouter } from "expo-router";

function profile() {

  const [username, setUsername] = useState();

  const router = useRouter();
  StatusBar.setBarStyle('dark-content', true);
  //Font loading start this gets all the return
  const [fontsLoaded] = useFonts({
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
    const signOut = async () => {
      await Auth.signOut()
        .then(() => {
        })
        .catch(err => console.log('Error while signing out!', err))
    }
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.fill}></View>
          <Text style={styles.titleText}>Profile</Text>
          {/* <Button style={styles.buttonLogout} onPressIn={() => signOut()}> */}
          <Icon
            style={styles.titleIcon}
            name='log-out-outline'
            type='ionicon'
            color={'white'}
            onPress={() => {
              signOut(),
                router.push("../../screens/login")
            }}
          />
          {/* </Button> */}
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
  buttonLogout: {
    backgroundColor: '#27348B',
  }
})

export default profile