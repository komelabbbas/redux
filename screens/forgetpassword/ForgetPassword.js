import React from "react";
import { BackHandler } from "react-native";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import firebase from "firebase";
import styles3 from "./styles3/styles3";
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
export default class ForgetPassword extends React.Component {
	handleBackButtonForget = () => {
		this.props.navigation.navigate("Login");
		return true;
	};

	componentDidMount() {
		BackHandler.addEventListener(
			"hardwareBackPress",
			this.handleBackButtonForget
		);
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
	}
	state = {
		email: "",
		error: "",
	};

	handleForget = async () => {
		var auth = firebase.auth();
		var emailAddress = this.state.email;
		var flag = "";
		await auth
			.sendPasswordResetEmail(emailAddress)
			.then(function () {
				console.log("email sent");
				flag = 0;
				console.log(flag);
			})
			.catch(function (error) {
				console.log(error);
				flag = 1;
				console.log(flag);
			});
		if (flag == 1) this.setState({ error: "Email does not exist in database" });
		if (flag == 0) this.setState({ error: "Email Sent! Check your inbox" });
	};
	render() {
		return (
			<View style={styles3.container}>
				<Text>
					{"\n"}
					{"\n"}
					{"\n"}
					{"\n"}
				</Text>
				<Text style={styles3.forgetText}>{this.state.error}</Text>
				<TextInput
					style={styles3.inputBox}
					value={this.state.email}
					onChangeText={(email) => this.setState({ email })}
					placeholder="Email"
					placeholderTextColor="white"
					autoCapitalize="none"
				/>
				<Text>{"\n"}</Text>

				<TouchableOpacity onPress={this.handleForget}>
					<Text style={styles3.signupText}>Forgot Password</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
