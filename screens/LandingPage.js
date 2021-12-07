import React from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground
  } from 'react-native';
  import SVGImg from '../assets/logo.svg';
 import facebook from '../assets/icons/facebook.png';
 import apple from '../assets/icons/apple.png';
 import twitter from '../assets/icons/twitter.png';
 import google from '../assets/icons/google.png';


const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <ImageBackground style={styles.background} source={require('../assets/landing_background.png')}>
            <View style={styles.square}>
                <SVGImg style={styles.logo} />
            </View>
        </ImageBackground>
        <View style={styles.textContainer}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('SignupPage')}>
            <Text>Get Started</Text>
        </Pressable>
        <Text style={styles.text}>Already have an account? <Text style={styles.clickable}>Sign in</Text></Text>
        <View style={styles.iconContainer}>
            <Image source={facebook} />
            <Image source={google} />
            <Image source={twitter} />
            <Image source={apple} />
        </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({ 
    container: { 
        display: 'flex',
    },
    background: {
        height: '80%',
        alignItems: 'center',
        justiftyContent: 'center',
    },
    square: {
        marginTop: '10%',
        opacity: 0.75,
        backgroundColor: '#090A0A',
        borderRadius: 15,
        width: '95%',
        height: '65%',
        alignItems: 'center',
        justiftyContent: 'center',
    }, 
    logo: {
        bottom: 50,
    },
    textContainer: {
        justiftyContent: 'center',
        alignItems: 'center',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '50%',
        height: 48,
        backgroundColor: '#F2F4F5',
        borderRadius: 48
    },
    text: {
        marginTop: 10,
        fontSize: 12,
        lineHeight: 16,
        color: '#FFF'
    },
    clickable: {
        textDecorationLine: 'underline',
        color: '#E71D36'
    },
    iconContainer: {
        flexDirection:'row', 
        flexWrap:'wrap',
        marginTop: 10,
    },
})

export default LandingPage;