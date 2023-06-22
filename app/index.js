import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, PermissionsAndroid, Platform } from "react-native";
import { Link, Redirect, Stack } from "expo-router";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "../src/aws-exports";
import config from "./config";

Amplify.configure(awsconfig);



// async (componentDidMount) => {
//   this.loadFacebookSDK();
//   try {
//     await Auth.currentAuthenticatedUser();
//     this.userHasAuthenticated(true);
//   } catch (e) {
//     if (e !== "not authenticated") {
//       alert(e);
//     }
//   }
//   this.setState({ isAuthenticating: false });
// };

// (loadFacebookSDK) => {
//   window.fbAsyncInit = function () {
//     window.FB.init({
//       appId: config.social.FB,
//       autoLogAppEvents: true,
//       xfbml: true,
//       version: "v3.1",
//     });
//   };
  
//   (function (d, s, id) {
//     var js,
//     fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) {
//       return;
//     }
//     js = d.createElement(s);
//     js.id = id;
//     js.src = "https://connect.facebook.net/en_US/sdk.js";
//     fjs.parentNode.insertBefore(js, fjs);
//   })(document, "script", "facebook-jssdk");
// };



function Page() {
  return <Redirect href={"./screens/login"} />;
}

export default Page;
