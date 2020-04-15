import React from "react";
import {
  BackHandler,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import firebase from "firebase";
import { Provider } from "react-redux";
import Myform from "./ourform";
import store from "./store";
import styles from "./style/styles";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default class Login extends React.Component {
  componentDidMount() {
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
    this.setState({ fname: "", flag: 1 });

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  state = {
    email: "",
    password: "",
  };
  showError = () => {
    Alert.alert(
      "Login Error",
      "Incorrect username/password",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };
  navi = () => {
    var ids;
    for (let t = 1; t <= 99; t++) {
      firebase
        .database()
        .ref("user/" + t)
        .on("value", (snapshot) => {
          var fetch_email = snapshot.val().email;
          if (fetch_email == this.state.email) {
            ids = t;
            console.log("id is" + ids);
          }
        });
    }
    var em = this.state.email.match(/^([^@]*)@/)[1];
    console.log("id is " + ids);
    this.props.navigation.navigate("Main", { email: em, id: ids + 1 });
  };
  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.navi())
      .catch((error) => this.showError());
  };
  //  handleSignup = () => {
  //     this.props.navigation.navigate("DrawerOpen");
  //   };
  forget = () => {
    console.log(this.props);
  };
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <Myform navigation={this.props.navigation} />
        </Provider>
      </View>
    );
  }
}
