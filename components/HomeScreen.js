import { CurrentRenderContext } from '@react-navigation/core';
import React from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground
  } from 'react-native';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <ImageBackground style={styles.background} source={require('../assets/landing_background.png')}>
        <View style={styles.logoContainer}>
            <View style={styles.square}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View>
        </View>
        <Pressable style={styles.button}>
            <Text>Get Started</Text>
        </Pressable>
        <Text style={styles.text}>Already have an account? Sign in</Text>
        </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({ 
    container: { 
        flex: 1,
    },

    background: {
        flex: 1,
        justifyContent: "center",
        height: '66.66%',
    },
    logoContainer: {
        display: 'flex',
        justiftyContent: 'center',
        alignItems: 'center',
    },

    square: {
        position: 'relative',
        opacity: 0.75,
        backgroundColor: '#090A0A',
        width: '90%',
        marginTop: 15
    }, 
    logo: {
        width: '100%',
        height: '75%',
        marginTop: 30
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginTop: 60,
        marginBottom: 15,
        width: 150,
        height: 48,
        backgroundColor: '#F2F4F5',
        borderRadius: 48
    },
    text: {
        fontSize: 12,
        lineHeight: 16,
        color: '#FFF'
    }
})

export default HomeScreen;