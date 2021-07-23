import React, { Component } from "react";
import { TouchableWithoutFeedback, Keyboard, SafeAreaView } from "react-native";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import firebase from "firebase";
import * as Google from 'expo-google-app-auth';

const DismissKeyboardHOC = (Comp) => {
    return ({ children, ...props }) => (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <Comp {...props}>{children}</Comp>
        </TouchableWithoutFeedback>
    );
};
const DismissKeyboardView = DismissKeyboardHOC(View);

const config = {
	iosClientId:
		"315261928107-99h2kbgbq48bt7gs3ic0iv2t4jj79pfo.apps.googleusercontent.com",
	scopes: ["profile", "email"],
};

export default class LoginScreen extends Component {
    isUserEqual = (googleUser, firebaseUser) => {
		if (firebaseUser) {
			var providerData = firebaseUser.providerData;
			for (var i = 0; i < providerData.length; i++) {
				if (providerData[i].providerId === 
					firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
					providerData[i].uid === 
					googleUser.uid
				) {
					// We don't need to reauth the Firebase connection.
					return true;
				}
			}
		}
		return false;
	};

	onSignIn = (googleUser) => {
		console.log("Google Auth Response");
		// We need to register an Observer on Firebase Auth to make sure auth is initialized.
		var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
			unsubscribe();
			// Check if we are already signed-in Firebase with the correct user.
			if (!this.isUserEqual(googleUser, firebaseUser)) {
				// Build Firebase credential with the Google ID token.
				var credential = firebase.auth.GoogleAuthProvider.credential(
					googleUser.idToken,
					googleUser.accessToken, 
				);
				// Sign in with credential from the Google user.
				firebase.auth().signInWithCredential(credential)
					.then((result) => {
						console.log("user signed in");
                        // navigate else where??
					})
					.catch(function (error) {
						console.log(error);
					});
			} else {
				console.log("User already signed-in Firebase.");
			}
		})
		.bind(this);
	};

	signInWithGoogleAsync = async () => {
		try {
			const result = await Google.logInAsync(config);
			if (result.type === "success") {
				this.onSignIn(result);
				return result.accessToken;
			} else {
				console.log("log in failed: " + result.type)
				return { cancelled: true };
			}
		} catch (e) {
			console.log(e)
			return { error: true };
		}
	};
    render() {
        return (
            <SafeAreaView style={styles.container}>
            <DismissKeyboardView style={styles.container}>
                <Text style={styles.header}>JioLeh</Text>
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('CreateAccount')}>
                    <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonInverted} onPress={() => {
                            console.log("pressed")
                            this.signInWithGoogleAsync()
                        }}>
                    <Text style={styles.invertedText}>SIGN IN</Text>
                </TouchableOpacity>
                </View>
            </DismissKeyboardView>
            </SafeAreaView>
        ) 
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a8c961',
      alignItems: 'center',
      //justifyContent: 'center',
    },
    header: {
      fontFamily: 'RopaSans',
      fontSize: 25,
      top: 150,
    },
    buttonContainer: {
        flexDirection: 'column',
        position: 'absolute',
        bottom: 100,
    },
    invertedText: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 16,
        fontFamily: 'RopaSans',
    },
    buttonText: {
        alignSelf: 'center',
        color: '#a8c961',
        fontSize: 16,
        fontFamily: 'RopaSans',
    },
    button: {
        paddingVertical: 15,
        //paddingHorizontal: 40,
        borderRadius: 25,
        backgroundColor: 'black',
        borderWidth: 2,
        marginBottom: 15,
        width: 320,
    },
    buttonInverted: {
        paddingVertical: 15,
        //paddingHorizontal: 40,
        borderRadius: 25,
        backgroundColor: '#a8c961',
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 15,
        width: 320,
    },
  });