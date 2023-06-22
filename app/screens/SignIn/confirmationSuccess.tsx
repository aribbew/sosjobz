import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react';
import React from 'react'
import YellowCheckMark from "../../resources/yellowcheckmark";
import { Button } from "@rneui/themed";
import { useRouter } from "expo-router";
import {
    useFonts,
    Epilogue_700Bold,
    Epilogue_400Regular
  } from '@expo-google-fonts/epilogue';

  
  const confirmationSuccess = () => {
      const router = useRouter();
      const backProcess = () => {
       router.push('/')   
      }
    const [loading, setLoading] = useState(false);
    let [fontsLoaded] = useFonts({
        Epilogue_700Bold,
      Epilogue_400Regular
      });
    
      if (!fontsLoaded) {
        return 
      } else {
    return (
        <View style={styles.mainContainer}>
            <View>

                <YellowCheckMark />
            </View>
                <Text style={styles.text}>Email confirmation succesfully</Text>
    
            <View>
            <View style={styles.pblishBttnContainer}>
              <Button
                onPress={backProcess}
                title={loading ? "Loading..." : "Login"}
                buttonStyle={{
                  backgroundColor: "#FFED00",
                  borderRadius: 5,
                }}
              titleStyle={{ color: "#000", fontSize: 16 }}
              containerStyle={{
                width: 312,
                height: 48,
                marginHorizontal: 30,
                // marginVertical: 10,
              }}
              />
            </View>
            </View>
        </View>
          )
        }
}

export default confirmationSuccess

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    //Texto
    text: {
        marginTop: 25,
        marginBottom: 25,
        fontSize: 24,
        fontFamily: 'Epilogue_700Bold'
    },
    //Boton
    pblishBttnContainer: {
        flex: 0,
        justifyContent: "center",
        alignItems: "center",
      },
      pblishBttn: {},

})