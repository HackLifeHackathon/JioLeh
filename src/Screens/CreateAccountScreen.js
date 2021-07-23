import React, {Component} from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import {
    StyleSheet, View, TextInput, TouchableOpacity, Text, Image
  } from 'react-native'
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

export default class CreateAccountScreen extends Component {
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
  
              if (result.additionalUserInfo.isNewUser) {
                console.log("new user")
                firebase
                    .database()
                    .ref("users/" + result.user.uid)
                    .set({
                    gmail: result.user.email,
                    profile_picture: result.additionalUserInfo.profile.picture,
                    username: result.user.displayName,
                    uid: result.user.uid,
                    }).catch(function(e) {
                      console.log("upload data to firebase failed: " + e);
                  })
                  } else {
                  console.log("old user")
                }
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

    render () {
        return (
            <DismissKeyboardView style={styles.container}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <FontAwesome5 name="chevron-left" size={25} style={styles.chevron}/>
                </TouchableOpacity>
                <View style={styles.header}>
                <Text style={styles.title}>Registration</Text>
                <View style={styles.form}>
                <Text style={styles.name}>Email Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder=" Enter Email"
                >
                </TextInput>
                <Text style={styles.name}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder=" Enter Password"
                    >
                </TextInput>
                <Text style={styles.name}>Confirm Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder=" Re-enter Password"
                    >
                </TextInput>
                </View>
                <TouchableOpacity style={styles.buttonInverted} onPress={() => this.props.navigation.navigate('SelectGame')}>
                    <Text style={styles.invertedText}>Continue</Text>
                </TouchableOpacity>
                    <View style={styles.googleBlock}>
                        {/* <Image 
                            style={styles.img}
                            source={require("../../assets/google.png")}></Image> */}
                        <TouchableOpacity 
                            onPress={() => {
                                console.log("pressed")
                                this.signInWithGoogleAsync()
                            }}
                        >
                            <Text style={styles.googleText}>Continue with Google</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </DismissKeyboardView>
        )  
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a8c961',
    },
    chevron: {
        top: 70,
        paddingLeft: 30,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 120,
    },
    title: {
        fontSize: 35,
      },
    input: {
        height: 45,
        width: 300,
        marginTop: 12,
        marginBottom: 20,
        backgroundColor: 'white',
        borderBottomColor: '#424242',
        borderBottomWidth: 2,
        fontSize: 18,
      },
    form: {
        marginTop: 30,
    },
    name: {
        fontSize: 20,
    },
    buttonInverted: {
        paddingVertical: 15,
        paddingHorizontal: 120,
        borderRadius: 25,
        backgroundColor: '#a8c961',
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 150,
    },
    invertedText: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 16,
    },
  });