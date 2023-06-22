import { Link } from 'expo-router'
import {useState} from 'react'
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { CheckBox, Icon } from '@rneui/themed';
import { useTogglePasswordVisibility } from '../hooks/usepswdtoggle';

import  Sign_In  from './SignIn/signInSc'
import  Sign_Up  from './SignIn/signUpSc'

function login() {
  return (
    <Sign_In />
  )
  }
  
export default login

