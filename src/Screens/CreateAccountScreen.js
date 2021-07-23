import React, {Component, useState} from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { TouchableWithoutFeedback, Keyboard, SafeAreaView } from "react-native";
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

var isRegistered = false;

export default class CreateAccountScreen extends Component {

    isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
            var providerData = firebaseUser.providerData;
            for (var i = 0; i < providerData.length; i++) {
            if (providerData[i].providerId === 
                firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                providerData[i].uid === 
                googleUser.user.id
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
                // firebase
                //     .database()
                //     .ref("users/" + result.user.uid)
                //     .set({
                //     gmail: result.user.email,
                //     profile_picture: result.additionalUserInfo.profile.picture,
                //     username: result.user.displayName,
                //     uid: result.user.uid,
                //     }).catch(function(e) {
                //       console.log("upload data to firebase failed: " + e);
                //   })
                  } else {
                  console.log("old user");
                }
            })
            .catch(function (error) {
              console.log(error);
            });
        } else {
            isRegistered = true;
            console.log("User already registered  -Firebase.");
        }
      })
      .bind(this);
    };

    signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync(config);
            if (result.type === "success") {
                this.onSignIn(result);
                return result;
            } else {
                console.log("log in failed: " + result.type)
                return { cancelled: true };
            }
        } catch (e) {
            console.log(e)
            return { error: true };
        }
   };

   confirmLogin = async(navigation) => {
      const result = await this.signInWithGoogleAsync()
      console.log(result.user.id)
       if (result.type == "success") {
           // if registered before, directly skip registration
           if (isRegistered) {
               this.props.navigation.navigate('HomeScreen');   // might need userid to identify the person
           } else {
               this.props.navigation.navigate('Welcome_0', { userid: result.user.id });
           }
      } else {
        Alert.alert('Account Registered', 'Please Log In', {text: 'Ok'})    // wont really come here
        this.props.navigation.navigate('FirstScreen')
      }
   };

    render () {
        // const [email, setEmail] = useState('')
        // const [password, setPassword] = useState('')

        return (
            <SafeAreaView style={styles.container}>
            <DismissKeyboardView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <FontAwesome5 name="chevron-left" size={25} style={styles.chevron}/>
                </TouchableOpacity>
                <View style={styles.header}>
                <Text style={styles.title}>Registration</Text>
                <View style={styles.form}>
                <Text style={styles.name}>Email Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder=" Enter Email"
                    // value={email}
                >
                </TextInput>
                <Text style={styles.name}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder=" Enter Password"
                    // value={password}
                    >
                </TextInput>
                <Text style={styles.name}>Confirm Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder=" Re-enter Password"
                    // value={password}
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
                                this.confirmLogin(this.props.navigation)
                                } 
                            }
                        >
                            <Text style={styles.googleText}>Continue with Google</Text>
                        </TouchableOpacity>
                    </View>
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
  fontFamily: 'RopaSans',
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
  paddingLeft: 15,
  fontFamily: 'RopaSans',
},
form: {
  marginTop: 30,
},
name: {
  fontSize: 20,
  fontFamily: 'RopaSans',
},
buttonInverted: {
  paddingVertical: 15,
  //paddingHorizontal: 120,
  width: 320,
  borderRadius: 25,
  backgroundColor: '#a8c961',
  borderColor: 'black',
  borderWidth: 2,
  marginTop: 250,
},
invertedText: {
  alignSelf: 'center',
  color: 'black',
  fontSize: 16,
  fontFamily: 'RopaSans',
},
});
