import { StatusBar, } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import React, { useEffect } from 'react';


function History() {
  StatusBar.setBarStyle('dark-content', true);


  //Font loading start this gets all the return
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
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            History
          </Text>
        </View>
        <View style={styles.historyContainer}>
          <Text style={styles.contentText}>No records</Text>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({

  historyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  titleContainer: {
    paddingTop: '10%',
    paddingLeft: '7%',
  },
  titleText: {
    fontSize: 29,
    fontFamily: 'Epilogue-Bold'

  },
  contentText: {
    fontSize: 30,
    fontFamily: 'Epilogue-Regular',
    color: '#ACACAC'
  },
})

export default History