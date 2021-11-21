import React from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground
  } from 'react-native';


const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <ImageBackground style={styles.background} source={require('../assets/landing_background.png')}>
            <View style={styles.square}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View>
        </ImageBackground>
        <View style={styles.textContainer}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('SignupPage')}>
            <Text>Get Started</Text>
        </Pressable>
        <Text style={styles.text}>Already have an account? <Text style={styles.clickable}>Sign in</Text></Text>
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
        position: 'relative',
        alignItems: 'center',
        justiftyContent: 'center',
    },
    square: {
        marginTop: '10%',
        opacity: 0.75,
        backgroundColor: '#090A0A',
        borderRadius: 25,
        width: '95%',
        height: '65%',
    }, 
    logo: {
       width: '100%',
       height: '100%',
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
    }
})

export default LandingPage;