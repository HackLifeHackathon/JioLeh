import React, {useState} from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SelectGameScreen({ navigation }) {
    const [selectValorant, setSelectValorant]= useState(false)
    const [selectCsgo, setSelectCsgo] = useState(false)
    const [selectDota, setSelectDota] = useState(false)
    const [selectMincraft, setSelectMinecraft] = useState(false)
    const [selectMaplesea, setSelectMaplesea] = useState(false)
    const [selectAmongUs, setSelectAmongUs] = useState(false)
    const [selectLol, setSelectLol] = useState(false)
    return (
        <View style={styles.container}>
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
                <TouchableOpacity style={styles.buttonInverted} onPress={() => navigation.navigate('Welcome')}>
                    <Text style={styles.invertedText}>Continue</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
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
    content: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
    },
    header: {
        fontFamily: 'Monaco',
        fontSize: 25,
        top: 80,
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
    },
    buttonText: {
        alignSelf: 'center',
        color: '#a8c961',
        fontSize: 16,
    },
    button: {
        paddingVertical: 15,
        //paddingHorizontal: 40,
        width: 320,
        borderRadius: 25,
        backgroundColor: 'black',
        borderWidth: 2,
        marginBottom: 15,
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