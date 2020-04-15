import React from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import {
	Dimensions,
	Image,
	ActivityIndicator,
	Clipboard,
	Share,
	StatusBar,
	View,
	StyleSheet,
	TouchableOpacity,
	Text,
} from "react-native";
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
var screenWidth = Math.round(Dimensions.get("window").width) / 100;
var screenHeight = Math.round(Dimensions.get("window").height) / 100;
async function uploadImageAsync(uri) {
	const blob = await new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.onload = function () {
			resolve(xhr.response);
		};
		xhr.onerror = function (e) {
			console.log(e);
			reject(new TypeError("Network request failed"));
		};
		xhr.responseType = "blob";
		xhr.open("GET", uri, true);
		xhr.send(null);
	});

	const ref = firebase.storage().ref().child("ksjdnf");
	const snapshot = await ref.put(blob);
	blob.close();
	return await snapshot.ref.getDownloadURL();
}

export default class Pic extends React.Component {
	componentDidMount() {
		console.log("hi");
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
		console.log(this.props.gender);
		if (!firebase.apps.length) {
			firebase.initializeApp(firebaseConfig);
		}
	}
	handleimage = async () => {
		var em = this.props.navigation.getParam("email");
		var email = em.match(/^([^@]*)@/)[1];

		if (this.props.navigation.getParam("gender") == "Female")
			var photo =
				"https://iwgdfguidance.org/wp-content/uploads/2017/12/default_user_female.png";
		else
			var photo =
				"https://iwgdfguidance.org/wp-content/uploads/2017/12/default_user_female.png";
		await firebase
			.database()
			.ref("user/" + id)
			.update({
				photo: photo,
			});
		this.props.navigation.navigate("Main", {
			id: this.props.navigation.getParam("id"),
			email: email,
		});
	};
	mainpage = () => {
		var em = this.props.navigation.getParam("email");
		var email = em.match(/^([^@]*)@/)[1];

		if (this.state.image == null) this.handleimage();
		else
			this.props.navigation.navigate("Main", {
				id: this.props.navigation.getParam("id"),
				email: email,
			});
	};
	state = {
		image: null,
		uploading: false,
	};

	async componentDidMount() {
		await Permissions.askAsync(Permissions.CAMERA_ROLL);
		await Permissions.askAsync(Permissions.CAMERA);
	}

	render() {
		return (
			<View
				style={{
					flex: 1,
					alignItems: "center",
					backgroundColor: "#6bd1e9",
				}}
			>
				<TouchableOpacity
					onPress={this._takePhoto}
					style={{
						width: "42%",
						borderRadius: 9,
						margin: "5%",
						backgroundColor: "#6bd1e9",
						top: screenHeight * 8,
						left: screenWidth,
						height: screenHeight * 7,
					}}
				>
					<Text
						style={{
							color: "black",
							textAlign: "center",
							fontSize: 28,
							textAlignVertical: "center",
						}}
					>
						Take a photo
					</Text>
				</TouchableOpacity>
				<Text style={{ color: "black", fontSize: 19 }}>
					{" "}
					{"\n"}
					{"\n"}OR
				</Text>

				<TouchableOpacity
					onPress={this._pickImage}
					style={{
						width: "40%",
						margin: "5%",
						borderRadius: 9,
						backgroundColor: "#6bd1e9",
						top: screenHeight,
						left: screenWidth,
						height: screenHeight * 6.5,
					}}
				>
					<Text
						style={{
							color: "black",
							fontWeight: "bold",
							textAlign: "center",
							fontSize: 21,
							textAlignVertical: "center",
						}}
					>
						Upload from file
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={this.handleimage}
					style={{
						width: "60%",
						margin: "5%",
						top: screenHeight * 50,
						borderRadius: 9,
						backgroundColor: "#6bd1e9",
					}}
				>
					<Text
						style={{
							color: "black",
							fontWeight: "bold",
							textAlign: "center",
							fontSize: 24,
							textAlignVertical: "center",
						}}
					>
						I will upload later
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={this.mainpage}
					style={{
						width: "60%",
						margin: "5%",
						top: screenHeight * -10,
						borderRadius: 9,
						backgroundColor: "#6bd1e9",
					}}
				>
					<Text
						style={{
							color: "black",
							fontWeight: "bold",
							textAlign: "center",
							fontSize: 24,
							textAlignVertical: "center",
						}}
					>
						Go to main page
					</Text>
				</TouchableOpacity>

				{this._maybeRenderImage()}
				{this._maybeRenderUploadingOverlay()}

				<StatusBar barStyle="default" />
			</View>
		);
	}

	_maybeRenderUploadingOverlay = () => {
		if (this.state.uploading) {
			return (
				<View
					style={[
						StyleSheet.absoluteFill,
						{
							alignItems: "center",
							justifyContent: "center",
						},
					]}
				>
					<ActivityIndicator color="#fff" animating size="large" />
				</View>
			);
		}
	};

	_maybeRenderImage = () => {
		let { image } = this.state;
		if (!image) {
			return;
		}

		return (
			<View
				style={{
					marginTop: 30,
					width: 250,
					borderRadius: 3,
					elevation: 2,
				}}
			>
				<View
					style={{
						backgroundColor: "#6bd1e9",
						flex: 2,
						justifyContent: "center",
						alignItems: "center",
						margin: 5,
						paddingTop: Platform.OS === "ios" ? 20 : 0,
					}}
				>
					<Image
						backgroundColor="#6bd1e9"
						source={{ uri: image }}
						style={{
							left: screenWidth,
							top: screenHeight * 5,
							width: screenWidth * 60,
							height: screenHeight * 35,
							borderRadius: 150,
							backgroundColor: "#6bd1e9",
						}}
					/>
				</View>
			</View>
		);
	};

	_share = () => {
		Share.share({
			message: this.state.image,
			title: "Check out this photo",
			url: this.state.image,
		});
	};

	_copyToClipboard = () => {
		Clipboard.setString(this.state.image);
		alert("Copied image URL to clipboard");
	};

	_takePhoto = async () => {
		let pickerResult = await ImagePicker.launchCameraAsync({
			allowsEditing: true,
			aspect: [4, 3],
		});

		await this._handleImagePicked(pickerResult);
		await this._handleImagePicked(pickerResult);
		firebase
			.database()
			.ref("user/" + id)
			.update({
				photo: this.state.image,
			});
	};

	_pickImage = async () => {
		let pickerResult = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			aspect: [4, 3],
		});

		await this._handleImagePicked(pickerResult);
		firebase
			.database()
			.ref("user/" + id)
			.update({
				photo: this.state.image,
			});
	};

	_handleImagePicked = async (pickerResult) => {
		try {
			this.setState({ uploading: true });

			if (!pickerResult.cancelled) {
				uploadUrl = await uploadImageAsync(pickerResult.uri);
				this.setState({ image: uploadUrl });
			}
		} catch (e) {
			console.log(e);
			alert("Upload failed, sorry :(");
		} finally {
			this.setState({ uploading: false });
		}
	};
}
