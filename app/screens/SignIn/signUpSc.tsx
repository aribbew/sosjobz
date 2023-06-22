import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Modal, StatusBar } from 'react-native';
// import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
// import { initializeApp } from 'firebase/app'
// import {firebaseConfig} from '../../../firebase-config'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import { CheckBox, Icon, Button } from "@rneui/themed";
import { useTogglePasswordVisibility, useToggleConfirmPasswordVisibility } from "../../hooks/usepswdtoggle";
import LogoNb from "../../resources/logobb";
import GradientLineRight from "../../resources/decortnliner";
import GradientLineLeft from "../../resources/decortnlinel";
import { Auth } from "aws-amplify";
import { useForm, Controller } from 'react-hook-form'

function Sign_Up() {
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  const [checked, setChecked] = React.useState(true);
  const [checkedConfirm, setCheckedConfirm] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const toggleCheckboxConfirm = () => setCheckedConfirm(!checkedConfirm);
  const { passwordVisibility, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const { confirmPasswordVisibility, handleConfirmPasswordVisibility } =
    useToggleConfirmPasswordVisibility();

  const { control, handleSubmit } = useForm();
  const onSignUpPressed = async (data) => {
    const { email, password, name, address, phone_number, username } = data;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { name, address, phone_number, email }
      });
      router.push('./emailConf')
    } catch (e) {
      Alert.alert('Oops', e.message)
    }

  }

  function EyePressVisibility() {
    toggleCheckbox();
    handlePasswordVisibility();
  }

  function EyePressConfirmVisibility() {
    toggleCheckboxConfirm();
    handleConfirmPasswordVisibility();
  }
  StatusBar.setBarStyle('dark-content', true);
  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.scrollviewContainer}>
          <ScrollView>

            <View
              style={{ flex: 0, alignItems: "center", justifyContent: "center" }}
            >
              {/* Svg View IOS*/}
              {Platform.OS == "ios" &&
                < LogoNb style={styles.LogoSvg} />
              }
            </View>
            <View
              style={{ flex: 0, alignItems: "center", justifyContent: "center" }}
            >
              {/* Svg View ANDROID*/}
              {Platform.OS == "android" &&
                <LogoNb style={styles.LogoSvgAndroid} />
              }
            </View>
            <View style={styles.containerInput}>
              {/* Login/Password Container input (ROOT)*/}
              <View style={styles.containerTextLogin}>
                {/* TextLogin Container */}
                <Text style={styles.loginText}>Sign Up</Text>
                <View style={styles.InputsContainers}>
                  <View style={styles.EmailInputLabelContainer}>
                    <Text style={styles.EmailInputLabel}>Name</Text>
                  </View>
                  <View style={styles.emailInput}>
                    <View style={styles.containerDirectEmailInput}>
                      <Controller
                        control={control}
                        name='name'
                        render={({ field: { value, onChange, onBlur } }) => (
                          <TextInput
                            style={styles.emailInputField}
                            placeholder="Enter your name"
                            autoCapitalize="none"
                            autoCorrect={false}
                            textContentType="name"
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
                  <View style={styles.EmailInputLabelContainer}>
                    <Text style={styles.EmailInputLabel}>Username</Text>
                  </View>
                  <View style={styles.emailInput}>
                    <View style={styles.containerDirectEmailInput}>
                      <Controller
                        control={control}
                        name='username'
                        render={({ field: { value, onChange, onBlur } }) => (
                          <TextInput
                            style={styles.emailInputField}
                            placeholder="Username Exp: jobzmaster"
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
                  <View style={styles.EmailInputLabelContainer}>
                    <Text style={styles.EmailInputLabel}>Address</Text>
                  </View>
                  <View style={styles.emailInput}>
                    <View style={styles.containerDirectEmailInput}>
                      <Controller
                        control={control}
                        name='address'
                        render={({ field: { value, onChange, onBlur } }) => (
                          <TextInput
                            style={styles.emailInputField}
                            placeholder="Av.Example, St.Example, 100100"
                            autoCapitalize="none"
                            autoCorrect={false}
                            textContentType="fullStreetAddress"
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
                  <View style={styles.EmailInputLabelContainer}>
                    <Text style={styles.EmailInputLabel}>Email Address</Text>
                  </View>
                  <View style={styles.emailInput}>
                    <View style={styles.containerDirectEmailInput}>
                      <Controller
                        control={control}
                        name='email'
                        render={({ field: { value, onChange, onBlur } }) => (
                          <TextInput
                            style={styles.emailInputField}
                            placeholder="Example@example.com"
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

                  <View style={styles.PasswordInputLabelContainer}>
                    <Text style={styles.PasswordInputLabel}>Password</Text>
                  </View>
                  <View style={styles.inputContainer}>
                    <View style={styles.containerDirectInput}>
                      <View style={styles.fixerInputpswd}>
                        <Controller
                          control={control}
                          name='password'
                          render={({ field: { value, onChange, onBlur } }) => (
                            <TextInput
                              style={styles.inputField}
                              // name="password"
                              placeholder="Enter password"
                              autoCapitalize="none"
                              autoCorrect={false}
                              textContentType="newPassword"
                              secureTextEntry={passwordVisibility}
                              value={value}
                              enablesReturnKeyAutomatically
                              onChangeText={onChange}
                              onBlur={onBlur}
                              placeholderTextColor="#A1A3A7"
                            />
                          )}
                        />
                        <CheckBox
                          checked={checked}
                          onPress={EyePressVisibility}
                          iconType="material-community"
                          checkedIcon="eye-outline"
                          uncheckedIcon={"eye-off-outline"}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.PasswordInputLabelContainer}>
                    <Text style={styles.PasswordInputLabel}>Confirm Password</Text>
                  </View>
                  <View style={styles.inputContainer}>
                    <View style={styles.containerDirectInput}>
                      <View style={styles.fixerInputpswd}>
                        <Controller
                          control={control}
                          name='confirmpassword'
                          render={({ field: { value, onChange, onBlur } }) => (
                            <TextInput
                              style={styles.inputField}
                              // name="password"
                              placeholder="Enter password"
                              autoCapitalize="none"
                              autoCorrect={false}
                              textContentType="password"
                              secureTextEntry={confirmPasswordVisibility}
                              value={value}
                              enablesReturnKeyAutomatically
                              onChangeText={onChange}
                              onBlur={onBlur}
                              placeholderTextColor="#A1A3A7"
                            />
                          )}
                        />
                        <CheckBox
                          checked={checkedConfirm}
                          onPress={EyePressConfirmVisibility}
                          iconType="material-community"
                          checkedIcon="eye-outline"
                          uncheckedIcon={"eye-off-outline"}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.fgtpswdContainer}>
                  {/* <Text style={styles.fgtpswdText}>Forgot Password?</Text> */}
                </View>
                <View style={styles.pblishBttnContainer}>
                  <Button
                    onPress={handleSubmit(onSignUpPressed)}
                    title={loading ? "Loading..." : "Sign Up"}
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
                <View style={styles.sgnupTxtContainer}>
                  <GradientLineLeft style={styles.linearGradientL} />
                  <Text>Or Sign Up With</Text>
                  <GradientLineRight style={styles.linearGradientR} />
                </View>
              </View>

              <View style={styles.socialMediaBttnContainer}>
                <Button
                  onPress={() => {
                    router.push("./emailConf")
                  }}
                  icon={{
                    name: 'envelope',
                    type: 'font-awesome',
                    size: 15,
                    color: 'black',
                  }}
                  title={"thinks"}
                  buttonStyle={{
                    backgroundColor: "#F8FAFC",
                    borderRadius: 5,
                  }}
                  titleStyle={{ color: "#000", fontSize: 16 }}
                  containerStyle={{
                    width: 343,
                    height: 44,
                    marginHorizontal: 50,
                  }}
                />
                <Button
                  icon={{
                    name: 'facebook',
                    type: 'font-awesome',
                    size: 15,
                    color: 'black',
                  }}
                  title={"Sign Up With Facebook"}
                  buttonStyle={{
                    backgroundColor: "#F8FAFC",
                    borderRadius: 5,
                  }}
                  titleStyle={{ color: "#000", fontSize: 16 }}
                  containerStyle={{
                    width: 343,
                    height: 44,
                    marginHorizontal: 50,
                  }}
                />
                <Button
                  icon={{
                    name: 'google',
                    type: 'font-awesome',
                    size: 15,
                    color: 'black',
                  }}
                  title={"Sign Up With Google"}
                  buttonStyle={{
                    backgroundColor: "#F8FAFC",
                    borderRadius: 5,
                  }}
                  titleStyle={{ color: "#000", fontSize: 16 }}
                  containerStyle={{
                    width: 343,
                    height: 44,
                    marginHorizontal: 50,
                  }}
                />
                <View>
                  {Platform.OS == "ios" &&
                    <Button
                      icon={{
                        name: 'apple',
                        type: 'font-awesome',
                        size: 15,
                        color: 'black',
                      }}
                      title={"Sign Up With Apple"}
                      buttonStyle={{
                        backgroundColor: "#F8FAFC",
                        borderRadius: 5,
                      }}
                      titleStyle={{ color: "#000", fontSize: 16 }}
                      containerStyle={{
                        width: 343,
                        height: 44,
                        marginHorizontal: 50,
                        marginBottom: 50,
                      }}
                    />
                  }
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default Sign_Up;

const styles = StyleSheet.create({
  scrollviewContainer: {
    height: '100%'
  },
  InputsContainers: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInput: {
    // flex: 0,
    rowGap: 10,

  },
  inputField: {
    flex: 1,
    fontSize: 13,
    width: "100%",
    padding: 14,
  },
  fixerInputpswd: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  inputContainer: {
    backgroundColor: "white",
    width: 343,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: "#CBD5E1",
    height: 48,
  },
  eyeContainer: {},
  containerDirectInput: {
    flexDirection: "row",
    alignItems: "flex-end",
    width: "100%",
  },
  emailInput: {
    backgroundColor: "white",
    height: 48,
    width: 343,
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
  containerTextLogin: {},
  loginText: {
    fontSize: 24,
    paddingHorizontal: 50,
    paddingBottom: 22,
    paddingTop: 20,
  },
  fgtpswdContainer: {
    flex: 0,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: 40,
    paddingBottom: 35,
  },
  fgtpswdText: {
    textAlign: "right",
    fontSize: 16,
    paddingTop: 9
  },
  pblishBttnContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  pblishBttn: {},
  LogoSvg: {
    marginTop: 70,
    width: 150,
    height: 150,
  },
  LogoSvgAndroid: {
    marginTop: 30,
    width: 150,
    height: 150,
  },
  sgnupTxtContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  linearGradientL: {
    marginRight: 9
  },
  linearGradientR: {
    marginLeft: 9
  },
  PasswordInputLabel: {
    // paddingTop: 20
    paddingTop: 5,
    paddingBottom: 5
  },
  EmailInputLabel: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  EmailInputLabelContainer: {
    alignSelf: 'flex-start',
    paddingHorizontal: 40
  },
  PasswordInputLabelContainer: {
    alignSelf: 'flex-start',
    paddingHorizontal: 40
  },
  socialMediaBttnContainer: {
    flex: 0,
    gap: 9,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
