import { useEffect, useState, Component } from "react";
import { StyleSheet, Text, View, TextInput, PermissionsAndroid, Platform } from "react-native";
import { Link, Redirect, Stack } from "expo-router";
import { Amplify, Auth, Hub } from "aws-amplify";
import awsmobile from "../src/aws-exports";

Amplify.configure({...awsmobile,  
  Analytics: {
  disabled: true,
},
});

class Page extends Component {
  state = { isLoggedIn: false,
          isNotLoggedIn: false}
  async componentDidMount() {
    try {
       authed = await Auth.currentAuthenticatedUser();
        this.setState({ isLoggedIn: true });
    } catch(err) {
      this.setState({ isNotLoggedIn: true });
    }
  }
  
    render() {
      if(this.state.isLoggedIn) {
        return <Redirect href={'./dashboard/stack'}/>// or whatever your entry component is
      }
      if(this.state.isNotLoggedIn) {
        return <Redirect href={'./screens/login'}/>
      }
    }
  }

export default Page;

