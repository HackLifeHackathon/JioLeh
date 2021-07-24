import React, {useState} from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function GameDetailScreen({ navigation, route }) {

    const { selectedGame } = route.params;
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{zIndex: 2}} onPress={() => navigation.goBack()}>
                <FontAwesome5 name="chevron-left" size={25} style={styles.chevron}/>
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.header}>{selectedGame}</Text>
                <View style={styles.hostBox}>  
                    <View style={styles.hostContainer}>
                        <Text style={styles.hostText}>Host: Leon</Text>
                    </View>
                    <View style={styles.hostCircle}>
                            <Text style={styles.circleText}>+2</Text>
                    </View>
                </View>

                <View style={styles.hostBox}>  
                    <View style={styles.hostContainer}>
                        <Text style={styles.hostText}>Host: Bea</Text>
                    </View>
                    <View style={styles.hostCircle}>
                            <Text style={styles.circleText}>+1</Text>
                    </View>
                </View>

                <View style={styles.hostBox}>  
                    <View style={styles.hostContainer}>
                        <Text style={styles.hostText}>Host: Piper</Text>
                    </View>
                    <View style={styles.hostCircle}>
                            <Text style={styles.circleText}>0</Text>
                    </View>
                </View>

                <View style={styles.hostBox}>  
                    <View style={styles.hostContainer}>
                        <Text style={styles.hostText}>Host: Sandy</Text>
                    </View>
                    <View style={styles.hostCircle}>
                            <Text style={styles.circleText}>+5</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b6a2db',
    },
    chevron: {
        top: 70,
        paddingLeft: 30,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        fontFamily: 'RopaSans',
        fontSize: 35,
        marginTop: 80,
        marginBottom: 20
    },
    hostBox: {
        height: '10%',
        width: '80%',
        margin: 18
    },
    
    hostContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    hostText: {
        fontSize: 25,
        fontFamily: 'RopaSans'
    },
    hostCircle: {
        position: 'absolute',
        right: -10,
        top: -15,
        backgroundColor: 'white',
        borderColor: '#ffaa2b',
        borderRadius: 50,
        borderWidth: 5,
        borderStyle: 'solid',
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleText: {
        margin: 4,
        fontFamily: 'RopaSans',
        fontSize: 18
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
        paddingHorizontal: 40,
        borderRadius: 25,
        backgroundColor: 'black',
        borderWidth: 2,
        marginBottom: 15,
    },
    buttonInverted: {
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
        backgroundColor: '#a8c961',
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 15,
    },
  });