import React from "react";
import { BackHandler } from "react-native";
import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import firebase from "firebase";
import { Dimensions } from "react-native";
var screenWidth = Math.round(Dimensions.get("window").width) / 100;
var screenHeight = Math.round(Dimensions.get("window").height) / 100;
import styles4 from "./styles4/styles4";
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
var fetch_photo;
export default class Main extends React.Component {
	componentDidMount() {
		BackHandler.addEventListener(
			"hardwareBackPress",
			this.handleBackButtonForget
		);
	}
	handleBackButtonForget = () => {
		this.props.navigation.navigate("Login");
		return true;
	};
	renderImage = () => {
		id = this.props.navigation.getParam("id") - 1;
		console.log("fucking id is " + id);

		setTimeout(
			() =>
				firebase
					.database()
					.ref("user/" + 99)
					.on("value", (snapshot) => {
						fetch_photo = snapshot.val().photo;
					}),
			2000
		);

		setTimeout(() => this.setState({ fetch_photo }), 2000);
	};
	state = {
		fetch_photo:
			"https://iwgdfguidance.org/wp-content/uploads/2017/12/default_user_female.png",
	};

	render() {
		return (
			<View style={styles4.container}>
				<Text>{"\n"}</Text>
				<TextInput
					style={styles4.inputBox}
					onChangeText={console.log("hi")}
					placeholder="Search by name or skills"
					placeholderTextColor="white"
					autoCapitalize="none"
				/>
				{this.renderImage()}

				<Image
					style={{
						height: screenHeight * 15,
						borderRadius: 100,
						width: screenWidth * 25,
						position: "absolute",
						left: screenWidth * 37,
						top: screenHeight * 18,
					}}
					source={{
						uri: this.state.fetch_photo,
					}}
				/>
				<Text
					style={{
						position: "absolute",
						color: "white",
						left: screenWidth * 42,
						top: screenHeight * 35,
						fontSize: 18,
						textAlign: "center",
						fontWeight: "bold",
					}}
				>
					{"\n"} {this.props.navigation.getParam("email")}
				</Text>
				<Text>
					{"\n"}
					{"\n"}
					{"\n"}
					{"\n"}
					{"\n"}
					{"\n"}
					{"\n"}
					{"\n"}
				</Text>
				<View
					style={{
						flex: 2,
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						top: screenHeight * 9,
					}}
				>
					<TouchableOpacity
						onPress={() => console.log("hi")}
						style={{
							width: screenWidth * 35,
							borderRadius: 35,
							backgroundColor: "#035BA2",
							height: screenHeight * 20,
							left: screenWidth * -4,
						}}
					>
						<Text
							style={{
								color: "white",
								textAlign: "center",
								fontWeight: "bold",
								fontSize: 22,
							}}
						>
							{"\n"}
							{"\n"}Requests
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => console.log("hi")}
						style={{
							width: screenWidth * 35,
							borderRadius: 35,
							backgroundColor: "#035BA2",
							height: screenHeight * 20,
							left: screenWidth * 6,
						}}
					>
						<Text
							style={{
								color: "white",
								fontWeight: "bold",
								textAlign: "center",
								fontSize: 22,
							}}
						>
							{"\n"}
							{"\n"}Message
						</Text>
					</TouchableOpacity>
				</View>

				<View
					style={{
						flex: 2,
						flexDirection: "row",
						alignItems: "center",
						top: screenHeight * 3,
					}}
				>
					<TouchableOpacity
						onPress={() => console.log("hi")}
						style={{
							width: screenWidth * 35,
							borderRadius: 35,
							backgroundColor: "#035BA2",
							height: screenHeight * 20,
							top: screenHeight * -4,
							left: screenWidth * 8,
							marginTop: screenHeight * 5,
						}}
					>
						<Text
							style={{
								color: "white",
								fontWeight: "bold",
								textAlign: "center",
								fontSize: 20,
							}}
						>
							{"\n"}
							{"\n"} Transaction
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => console.log("hi")}
						style={{
							width: screenWidth * 35,
							borderRadius: 35,
							backgroundColor: "#035BA2",
							height: screenHeight * 20,
							top: screenHeight * -4,
							left: screenWidth * 18,
							marginTop: screenHeight * 5,
						}}
					>
						<Text
							style={{
								color: "white",
								fontWeight: "bold",
								textAlign: "center",
								fontSize: 20,
							}}
						>
							{"\n"}
							{"\n"} Account
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
