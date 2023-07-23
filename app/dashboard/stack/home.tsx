import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Platform,
} from 'react-native';
import { StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import { Icon } from '@rneui/themed';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { useRouter } from
  "expo-router";
import ListHomeCat from '../../components/ListCategoryHome'
import BigListHomeCat from '../../components/BigListCategory'
import LogoNb from '../../resources/logobb';
import LoadingDots from '../../components/LoadingDotsAnimation';

const home = () => {

  const [isLoading, setIsLoading] = useState(true);

  const { control, handleSubmit, formState: { errors }, } = useForm();
  StatusBar.setBarStyle('dark-content', true);

  const router = useRouter();

  //Font loading start this gets all the return
  const [fontsLoaded] = useFonts({
    'Epilogue-Bold': require('../../resources/fonts/Epilogue-Bold.ttf'),
    'Epilogue-Black': require('../../resources/fonts/Epilogue-Black.ttf'),
  });


  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync
      setIsLoading(false);
    }
    prepare();
  }, []);

  if (!fontsLoaded || isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <LogoNb style={styles.logoSvg} />
        <View style={styles.loadingDotsContainer}>
          <LoadingDots />
        </View>
      </View>
    );

  } else {
    return (
      <View>
        {Platform.OS == "android" &&
          <View style={styles.homeContainer}>
            <View style={styles.emailInput}>
              <Icon name='search' type='feather' style={styles.iconAndroid} />
              <Pressable style={styles.containerDirectEmailInput} onPress={() => {
                router.push("../userresults")
              }}>
                <Text style={styles.titleSearchInput}>Where do you need the service?</Text>
              </Pressable>
            </View>
          </View>
        }
        {Platform.OS == "ios" &&
          <View style={styles.homeContainerIos}>
            <View style={styles.emailInputIos}>
              <Icon name='search' type='feather' style={styles.iconIos} />
              <Pressable style={styles.containerDirectEmailInput} onPress={() => {
                router.push("../userresults")
              }}>
                <Text style={styles.titleSearchInput}>Where do you need the service?</Text>
              </Pressable>
            </View>
          </View>
        }
        <View style={styles.firstTitleContainer}>
          <Text style={styles.firstTitle}>Find local professionals</Text>
          <Text style={styles.firstTitle}>in your area</Text>
        </View>
        <View>
          <ListHomeCat />
        </View>
        <View style={styles.firstTitleContainer}>
          <Text style={styles.firstTitle}>Trending</Text>
        </View>
        <View>
          <BigListHomeCat />
        </View>
      </View>
    )
  }

  //Fonts finish

}

const styles = StyleSheet.create({
  loadingDotsContainer: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoSvg: {
    // marginTop: 70,
    width: 150,
    height: 150,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //Android Title Search Input
  titleSearchInput: {
    paddingTop: 7,
    margin: 5
  },
  //Icon Android Style
  iconAndroid: {
    paddingTop: 10,
    paddingLeft: 10,
  },
  //First Title
  firstTitleContainer: {
    paddingTop: 10,
    paddingLeft: 10,
  },
  firstTitle: {
    fontSize: 29,
    fontFamily: 'Epilogue-Bold',
  },
  //Mini Horizontal Scroll
  horizontalScrollCards: {
    backgroundColor: 'red',
    height: 98,
    width: 102,
    borderRadius: 10,
    margin: 5,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3
  },
  //Input Container Android
  homeContainer: {
    paddingTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //Input Android
  emailInput: {
    backgroundColor: "white",
    height: 48,
    width: '95%',
    borderRadius: 30,
    flexDirection: "row",
    borderWidth: 1.5,
    borderColor: "transparent",
  },
  containerDirectEmailInput: {
    width: 343,
  },
  emailInputField: {
    padding: 14,
    fontSize: 13,
    width: "100%",
  },
  //Input Container Ios
  homeContainerIos: {
    flex: 0,
    paddingTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //Icon Ios Style 
  iconIos: {
    paddingTop: 10,
    paddingLeft: 10,
  },
  //Input Ios
  emailInputIos: {
    backgroundColor: "white",
    height: 48,
    width: '95%',
    borderRadius: 30,
    flexDirection: "row",
    borderWidth: 1.5,
    borderColor: "transparent",
  },
  containerDirectEmailInputIos: {
    width: 343,
  },
  emailInputFieldIos: {
    padding: 14,
    fontSize: 13,
    width: "100%",
  },
})

export default home