import React from "react";
import Signup from "./screens/signup/Signup";
import Login from "./screens/login/Login";
import ForgetPassword from "./screens/forgetpassword/ForgetPassword";
import Main from "./screens/mainpage/main";
import Pic from "./screens/pic/Pic";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { YellowBox, TouchableWithoutFeedback, Keyboard } from "react-native";
import firebase from "firebase";
import _ from "lodash";
import { Text, View, Image } from "react-native";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
YellowBox.ignoreWarnings(["Setting a timer"]);
const _console = _.clone(console);
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
console.warn = (message) => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};
var firebaseConfig = {
  apiKey: "AIzaSyAfGN94rWhA55dceve-ab5R5nEL6o4xXeg",
  authDomain: "new1-930be.firebaseapp.com",
  databaseURL: "https://new1-930be.firebaseio.com",
  projectId: "new1-930be",
  storageBucket: "new1-930be.appspot.com",
  messagingSenderId: "332990256430",
  appId: "1:332990256430:web:640a6413492c34bf2a96bf",
  measurementId: "G-SBPS6449GM",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: Login,
      Signup: Signup,
      ForgetPassword: ForgetPassword,
      Main: Main,
      Pic: Pic,
    },
    {
      initialRouteName: "Login",
    }
  )
);
