import React, {useState} from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Alert } from 'react-native';

var games = [];

export default function SelectGameScreen({ route, navigation }) {
    const { userid } = route.params;
    const [selectValorant, setSelectValorant]= useState(false)
    const [selectCsgo, setSelectCsgo] = useState(false)
    const [selectDota, setSelectDota] = useState(false)
    const [selectMincraft, setSelectMinecraft] = useState(false)
    const [selectMaplesea, setSelectMaplesea] = useState(false)
    const [selectAmongUs, setSelectAmongUs] = useState(false)
    const [selectLol, setSelectLol] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{zIndex: 2}} onPress={() => navigation.goBack()}>
                <FontAwesome5 name="chevron-left" size={25} style={styles.chevron}/>
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.header}>Games I Play</Text>

                <View style={styles.buttonContainer}>
                <TouchableOpacity 
                style={selectValorant ? styles.button : styles.buttonInverted}
                onPress={() => setSelectValorant(!selectValorant)}
                >
                    <Text style={selectValorant ? styles.buttonText : styles.invertedText}>Valorant</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={selectCsgo ? styles.button : styles.buttonInverted}
                onPress={() => setSelectCsgo(!selectCsgo)}>
                    <Text style={selectCsgo ? styles.buttonText : styles.invertedText}>Csgo</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={selectDota ? styles.button : styles.buttonInverted}
                onPress={() => setSelectDota(!selectDota)}>
                    <Text style={selectDota ? styles.buttonText : styles.invertedText}>Dota 2</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={selectMincraft ? styles.button : styles.buttonInverted}
                onPress={() => setSelectMinecraft(!selectMincraft)}>
                    <Text style={selectMincraft ? styles.buttonText : styles.invertedText}>Minecraft</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={selectMaplesea ? styles.button : styles.buttonInverted}
                onPress={() => setSelectMaplesea(!selectMaplesea)}>
                    <Text style={selectMaplesea ? styles.buttonText : styles.invertedText}>Maplesea</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={selectAmongUs ? styles.button : styles.buttonInverted}
                onPress={() => setSelectAmongUs(!selectAmongUs)}>
                    <Text style={selectAmongUs ? styles.buttonText : styles.invertedText}>Among Us</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={selectLol ? styles.button : styles.buttonInverted}
                onPress={() => setSelectLol(!selectLol)}>
                    <Text style={selectLol ? styles.buttonText : styles.invertedText}>League of Legends</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonInverted} onPress={() => addGamesAndGo(selectValorant, selectCsgo, selectDota, selectMincraft, selectMaplesea, selectAmongUs, selectLol, userid, navigation)}>
                    <Text style={styles.invertedText}>Continue</Text>
                </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

function addGamesAndGo (isValo, isCsgo, isDota, isMinecraft, isMaple, isAmongUs, isLol, userid, navigation) {
    if (isValo){
        games.push('Valo');
    }
    if (isCsgo){
        games.push('Csgo');
    }
    if (isDota){
        games.push('Dota');
    }
    if (isMinecraft){
        games.push('Minecraft');
    }
    if (isMaple){
        games.push('Maple');
    }
    if (isAmongUs){
        games.push('AmongUs');
    }
    if (isLol){
        games.push('Lol');
    }
    console.log(games);
    if (games.length == 0) {
        Alert.alert("Don't Be!", "Cool Kids Play Games!", {Text: 'Ok'});
    } else {
        navigation.navigate('Username', {userid: userid, games: games});
    }
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
        //justifyContent: 'center',
    },
    header: {
        fontFamily: 'RopaSans',
        fontSize: 35,
        top: '10%',

    },
    buttonContainer: {
        flexDirection: 'column',
        position: 'absolute',
        bottom: '10%',
    },
    invertedText: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 16,
    },
    buttonText: {
        alignSelf: 'center',
        color: '#b6a2db',
        fontSize: 16,
    },
    button: {
        paddingVertical: 15,
<<<<<<< HEAD
        paddingHorizontal: 40,
=======
        width: 320,
>>>>>>> main
        borderRadius: 25,
        backgroundColor: 'black',
        borderWidth: 2,
        marginBottom: 15,
    },
    buttonInverted: {
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
        backgroundColor: '#b6a2db',
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 15,
    },
    continueButton: {
        marginTop: '10%',
        paddingVertical: 15,
        width: 320,
        borderRadius: 25,
        backgroundColor: '#ffaa2b',
        borderColor: '#ffaa2b',
        borderWidth: 2,
        marginBottom: 15,
        width: 320,
    },
  });