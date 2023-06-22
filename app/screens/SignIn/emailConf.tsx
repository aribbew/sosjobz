import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { useState } from 'react';
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import { Auth } from 'aws-amplify';
import { Button } from "@rneui/themed";
import { useRouter } from "expo-router";
import {
  useFonts,
  Epilogue_700Bold,
  Epilogue_400Regular
} from '@expo-google-fonts/epilogue';

function emailConf() {

  const confirmSignUp = async (data) => {
    try {
      await Auth.confirmSignUp(data.username, data.code);
      router.push('./confirmationSuccess')
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  }
  const resendConfirmation = async (data) => {
    try {
      await Auth.resendSignUp(username);
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  }
  const { control, handleSubmit, watch } = useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const username = watch('username');
  let [fontsLoaded] = useFonts({
    Epilogue_700Bold,
    Epilogue_400Regular
  });

  if (!fontsLoaded) {
    return
  } else {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

        <View style={styles.emailConfContainer}>
          <View style={styles.TextContainer}>
            <Text style={styles.titleText}>Confirm your email</Text>
            <Text>We have sent you an email with a verification code, to complete the process please enter the code</Text>
          </View>
          <View style={styles.InputContainer}>
            <View style={styles.emailInput}>
              <View style={styles.containerDirectEmailInput}>
                <Controller
                  control={control}
                  name='username'
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextInput
                      style={styles.emailInputField}
                      placeholder="Enter username"
                      autoCapitalize="none"
                      autoCorrect={false}
                      textContentType="username"
                      value={value}
                      enablesReturnKeyAutomatically
                      onChangeText={onChange}
                      onBlur={onBlur}
                      placeholderTextColor="#A1A3A7"
                    />
                  )}
                />
              </View>
            </View>
          </View>
          <View style={styles.InputContainer}>
            <View style={styles.emailInput}>
              <View style={styles.containerDirectEmailInput}>
                <Controller
                  control={control}
                  name='code'
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextInput
                      style={styles.emailInputField}
                      placeholder="Enter confirmation code"
                      autoCapitalize="none"
                      autoCorrect={false}
                      textContentType="emailAddress"
                      value={value}
                      enablesReturnKeyAutomatically
                      onChangeText={onChange}
                      onBlur={onBlur}
                      placeholderTextColor="#A1A3A7"
                    />
                  )}
                />
              </View>
            </View>
          </View>
          <View>
            <View style={styles.pblishBttnContainer}>
              <Button
                onPress={handleSubmit(confirmSignUp)}
                title={loading ? "Loading..." : "Confirm"}
                buttonStyle={{
                  backgroundColor: "#FFED00",
                  borderRadius: 5,
                  borderWidth: 1.5,
                  borderColor: "#FFED00"
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
            <View style={styles.pblishBttnContainer}>
              <Button
                onPress={resendConfirmation}
                title={loading ? "Loading..." : "Resend code"}
                buttonStyle={{
                  backgroundColor: "transparent",
                  borderRadius: 5,
                  borderWidth: 1.5,
                  borderColor: "black"
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
      </TouchableWithoutFeedback>
    )
  }
}

export default emailConf

const styles = StyleSheet.create({
  InputContainer: {
    margin: 5
  },
  emailConfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 30,
    fontFamily: 'Epilogue_700Bold'
  },
  //Input
  emailInput: {
    backgroundColor: "white",
    height: 48,
    width: 315,
    borderRadius: 4,
    flexDirection: "row",
    borderWidth: 1.5,
    borderColor: "#CBD5E1",
  },
  containerDirectEmailInput: {
    width: 343,
  },
  emailInputField: {
    padding: 14,
    fontSize: 13,
    width: "100%",
  },
  //Boton
  pblishBttnContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  pblishBttn: {},
  //Text
  TextContainer: {
    width: 315
  }
})