import React from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    View,
    Image,
  } from 'react-native';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.background} source={require('../assets/landing_background.png')} />
        <View style={styles.header}>
            <View style={styles.square}></View>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
        </View>
        <Pressable style={styles.button}>
            <Text>Get Started</Text>
        </Pressable>
        <Text style={styles.text}>Already have an account? Sign in</Text>
    </View>
  );
};

const styles = StyleSheet.create({ 
    container: { 
        flex: 1,
        alignItems: 'center',
    },
    background: {
        position: 'relative',
        width: '100%',
        height: '66.66%'
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },

    square: {
        position: 'relative',
        opacity: 0.75,
        backgroundColor: '#090A0A',
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