import React from "react";
import {
  Dimensions,
  BackHandler,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import RadioForm from "react-native-simple-radio-button";
import { Picker } from "react-native-picker-dropdown";
import styles1 from "./styles1/styles1";
import firebase from "firebase";
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
import _ from "lodash";
const screenWidth = Math.round(Dimensions.get("window").width) / 100;
const screenHeight = Math.round(Dimensions.get("window").height) / 100;
var cid = 1;
var radio_props = [
  { label: "Male    ", value: "Male" },
  { label: "Female", value: "Female" },
];
export default class Signup extends React.Component {
  getCities = () => {
    if (this.state.state == "Gujarat")
      return [
        "Enter City",
        "Ahmedabad",
        "Anand",
        "Bhavnagar",
        "Gandhinagar",
        "Jamnagar",
        "Rajkot",
        "Surat",
        "Vadodara",
      ].map((citi) => <Picker.Item label={citi} value={citi} />);
    if (this.state.state == "Maharashtra")
      return [
        "Enter City",
        "Akola",
        "Kalyan",
        "Mumbai",
        "Navi Mumbai",
        "Panvel",
        "Pune",
      ].map((citi) => <Picker.Item label={citi} value={citi} />);
    if (this.state.state == "Chhattisgarh")
      return [
        "Enter City",
        "Raipur",
        "Bilaspur",
        "Bastar",
        "Jashpur",
        "Durg",
        "Koriya",
      ].map((citi) => <Picker.Item label={citi} value={citi} />);
    if (this.state.state === "Jharkhand")
      return [
        "Enter City",
        "Ranchi",
        "Bokaro",
        "Deoghar",
        "Dhanbad",
        "Dumka",
        "Ghatshila",
        "Hazaribagh",
        "Jamshedpur",
      ].map((citi) => <Picker.Item label={citi} value={citi} />);
    if (this.state.state == "Kerala")
      return ["Enter City", "Kochi"].map((citi) => (
        <Picker.Item label={citi} value={citi} />
      ));
    if (this.state.state == "Madhya Pradesh")
      return [
        "Enter City",
        "Bhopal",
        "Indore",
        "Gwalior",
        "Jabalpur",
        "Sagar",
        "Ujjain ",
      ].map((citi) => <Picker.Item label={citi} value={citi} />);
    if (this.state.state == "Karnataka")
      return [
        "Enter City",
        "Mangalore",
        "Bangalore",
        "Mysore",
        "Bijapur",
      ].map((citi) => <Picker.Item label={citi} value={citi} />);
    if (this.state.state == "Rajasthan")
      return [
        "Enter City",
        "Kota",
        "Udaipur",
        "Jaipur",
        "Jodhpur",
        "Sikar",
        "Ajmer",
      ].map((citi) => <Picker.Item label={citi} value={citi} />);
    if (this.state.state == "Tamil Nadu")
      return [
        "Enter City",
        "Coimbatore",
        "Salem",
        "Madurai",
        "Tiruchirapalli",
      ].map((citi) => <Picker.Item label={citi} value={citi} />);
    if (this.state.state == "Uttar Pradesh")
      return [
        "Enter City",
        "Kanpur",
        "Lucknow",
        "Ghaziabad",
        "Agra",
        "Varanasi",
        "Prayagraj",
      ].map((citi) => <Picker.Item label={citi} value={citi} />);
    if (this.state.state == "Delhi")
      return ["Enter City", "Delhi NCR"].map((citi) => (
        <Picker.Item label={citi} value={citi} />
      ));
    if (this.state.state == "")
      return <Picker.Item label="Enter City" value="" />;
  };
  submit = async () => {
    console.log("Error is " + this.state.Error);
    var count = 0;
    if (this.state.fname == "")
      this.setState({ Error: "Please enter your name" }, () => count++);

    if (this.state.email == "") {
      this.setState({ Error: "Please enter your Email" }, () => count++);
    }
    if (this.state.password == "") {
      this.setState({ Error: "Please enter your Password" }, () => count++);
    }
    if (
      this.state.cpassword == "" ||
      (this.state.password == "" && this.state.cpassword != "")
    ) {
      this.setState({ Error: "please fill the password" }), () => count++;
    }
    if (this.state.password !== this.state.cpassword) {
      this.setState({ Error: "Password does not match" }, () => count++);
    }
    if (this.state.password.length < 5) {
      this.setState({ Error: "Password  must be more than 5" }, () => count++);
    }
    if (this.state.gender == "") {
      this.setState({ Error: "Please enter your gender" }, () => count++);
    }
    if (this.state.state == "") {
      this.setState({ Error: "Please enter your state" }, () => count++);
    }
    if (this.state.citi == "") {
      this.setState({ Error: "Please enter your city" }, () => count++);
    }
    if (
      this.state.citi !== "" &&
      this.state.state != "" &&
      this.state.fname != "" &&
      this.state.password != "" &&
      this.state.enail != "" &&
      this.state.cpassword != ""
    ) {
      var k = 0;
      console.log("entered conditional iff");
      this.setState({ Error: "Success" });
    }

    temp = async () => {
      if (this.state.Error == "Success") {
        for (let k = 65; k <= id - 1; k++) {
          console.log("id is " + id);
          console.log("entered for loop");
          await firebase
            .database()
            .ref("user/" + k)
            .on("value", (snapshot) => {
              fetch_name = snapshot.val().name;
              console.log(fetch_name);
              if (fetch_name == this.state.fname) {
                console.log("locho avyo");
                this.setState({ seen: 1 });
                this.setState({
                  Error: "firebase:Email id /username already exists",
                });
              }
            });
        }
        if (this.state.Error == "Success") {
          console.log("not fuckeed up");
          var em = this.state.email;
          var ps = this.state.password;
          firebase
            .auth()
            .createUserWithEmailAndPassword(em, ps)
            .then(() => console.log("success"))
            .catch((error) => console.log(error));

          firebase
            .database()
            .ref("user/" + id)
            .set({
              number: this.state.number,
              name: this.state.fname,
              email: this.state.email,
              password: this.state.password,
              state: this.state.state,
              city: this.state.citi,
              gender: this.state.gender,
            });
          this.setState({ flag: 0 });
          firebase
            .database()
            .ref("id")
            .set({
              number: id + 1,
            });
          this.setState({ Error: "Form Submitted succesfully" });
          console.log("about to exit");
        }

        console.log("exited finally");
      }
      if (this.state.Error == "Form Submitted succesfully")
        this.props.navigation.navigate("Pic", {
          name: this.state.fname,
          gender: this.state.gender,
          id: id + 1,
          email: this.state.email,
        });
    };

    setTimeout(temp, 1000);
  };

  componentDidMount() {
    console.log("entered here kjasdnfkjasnd");
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
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
    firebase
      .database()
      .ref("id/number")
      .on("value", (snapshot) => {
        id = snapshot.val();
        console.log("fetch number is " + id);
      });
  }

  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      gender: "",
      seen: 0,
      email: "",
      cpassword: "",
      password: "",
      state: "",
      citi: "",
      flag: 0,
      Error: "",
      number: 0,
    };
  }
  handleValueChange = (state) => {
    this.setState({ state });
    this.setState({ citi: "" });
    console.log(this.state.state);
  };
  handleCityChange = (state) => {
    this.setState({ citi });
    console.log(this.state.citi);
  };
  updateciti = (value) => {
    console.log("enters");
    this.setState({ citi: value });
  };
  handleBackButton = () => {
    this.props.navigation.navigate("Login");
    return true;
  };

  render() {
    return (
      <View style={styles1.container}>
        <Text>
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 33,
            fontWeight: "bold",
            width: screenWidth * 100,
            left: screenWidth * 27,
            top: screenHeight * -2,
          }}
        >
          Get Started
        </Text>
        <Text style={{ color: "yellow", fontSize: 22, textAlign: "center" }}>
          {this.state.Error}
        </Text>
        <TextInput
          placeholder="Name"
          placeholderTextColor="white"
          style={styles1.myText}
          onChangeText={(fname) => this.setState({ fname })}
        />
        <TextInput
          placeholder="Email Id"
          placeholderTextColor="white"
          style={styles1.myText}
          onChangeText={(email) => this.setState({ email })}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="white"
          style={styles1.myText}
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        />
        <TextInput
          placeholder="Re-enter Password"
          placeholderTextColor="white"
          style={styles1.myText}
          secureTextEntry={true}
          onChangeText={(value) => {
            this.setState({ cpassword: value });
          }}
        />
        <Text></Text>

        <RadioForm
          style={styles1.button}
          buttonSize={15}
          formHorizontal={true}
          labelHorizontal={true}
          radio_props={radio_props}
          labelStyle={{ fontSize: 20, color: "white" }}
          initial={-1}
          onPress={(value) => {
            this.setState({ gender: value });
          }}
        ></RadioForm>
        <Picker
          key={cid + 1}
          selectedValue={this.state.state}
          onValueChange={this.handleValueChange}
          mode="dialog"
          textStyle={styles1.pickerText}
        >
          <Picker.Item label="Enter State" value="" />
          <Picker.Item label="Delhi" value="Delhi" />
          <Picker.Item label="Chhattisgarh" value="Chhattisgarh" />
          <Picker.Item label="Goa" value="Goa" />
          <Picker.Item label="Gujarat" value="Gujarat" />
          <Picker.Item label="Haryana" value="Haryana" />
          <Picker.Item label="Jharkhand" value="Jharkhand" />
          <Picker.Item label="Karnataka" value="Karnataka" />
          <Picker.Item label="Kerala" value="Kerala" />
          <Picker.Item label="Madhya Pradesh" value="Madhya Pradesh" />
          <Picker.Item label="Maharashtra" value="Maharashtra" />
          <Picker.Item label="Punjab" value="Punjab" />
          <Picker.Item label="Rajasthan" value="Rajasthan" />
          <Picker.Item label="Tamil Nadu" value="Tamil Nadu" />
          <Picker.Item label="Uttar Pradesh" value="Uttar Pradesh" />
        </Picker>

        <Picker
          key={cid}
          onValueChange={(itemValue) => this.updateciti(itemValue)}
          selectedValue={this.state.citi}
          mode="dialog"
          textStyle={styles1.pickerText}
        >
          {this.getCities()}
        </Picker>

        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <TouchableOpacity
          onPress={() => this.submit()}
          style={{
            width: "40%",
            borderRadius: 9,
            backgroundColor: "#2A94E2",
            left: screenWidth / 49,
            top: screenHeight * -18,
            height: "8%",
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 34,
              textAlignVertical: "center",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
