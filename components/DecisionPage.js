import React from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    View,
    Image
  } from 'react-native';
import QuizIcon from '../assets/quiz.png';
import SettingsIcon from '../assets/settings.png';
import DeviceIcon from '../assets/device.png';
import AmbienceIcon from '../assets/ambience.png';


const DecisionPage = ({ route, navigation }) => {

  const { name } = route.params;
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Hi {JSON.stringify(name)}! What do you want to do first?</Text>
        <View style={styles.buttonContainer}>
            <Pressable style={[{backgroundColor: '#F2F4F5'}, styles.button]}>
                <Image styles={styles.icon} source={QuizIcon}/> 
                <Text styles={styles.buttonText}>   Take the quiz</Text>
            </Pressable>
            <Pressable style={[{backgroundColor: '#FF9F1C'}, styles.button]}>
                <Image styles={styles.icon} source={SettingsIcon}/> 
                <Text styles={styles.buttonText}>   Set preferences</Text>
            </Pressable>
            <Pressable style={[{backgroundColor: '#2EC4B6'}, styles.button]}>
                <Image styles={styles.icon} source={AmbienceIcon}/> 
                <Text styles={styles.buttonText}>   Find an ambience</Text>
            </Pressable>
            <Pressable style={[{backgroundColor: '#E71D36'}, styles.button]}>
                <Image styles={styles.icon} source={DeviceIcon}/> 
                <Text styles={styles.buttonText}>   Set up a devices</Text>
            </Pressable>
            <Text style={styles.text}>No thanks, go<Text style={styles.clickable} onPress={() => navigation.navigate('HomePage',)}> home</Text></Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({ 
    container: { 
        display: 'flex',
        justifyContent: 'center',
        top: '15%',
    },
    header: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 15,
        marginLeft: '5%',
    },  
    buttonContainer: {
        alignItems: 'center',
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        width: '90%',
        margin: 10,
        borderRadius: 8,
        padding: 15
    },
    buttonText: {
      
    },
    text: {
        fontSize: 12,
        lineHeight: 16,
        color: '#FFF'
    },
    clickable: {
        textDecorationLine: 'underline',
        color: '#E71D36'
    },


})

export default DecisionPage;