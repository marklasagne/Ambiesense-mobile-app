import React, { useState } from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    View,
    TextInput,
  } from 'react-native';


const LandingPage = ({ navigation }) => {
  const [username, onChangeText] = useState('');
  
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Set up your account</Text>
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={username}
                placeholder="Username"
                placeholderTextColor="#6C7072"
                keyboard="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboard="numeric"
                placeholderTextColor="#6C7072"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                keyboard="numeric"
                placeholderTextColor="#6C7072"
            />
            <TextInput
                style={styles.input}
                placeholder="Re-enter password"
                keyboard="numeric"
                placeholderTextColor="#6C7072"
            />
            <Pressable style={styles.button} onPress={() => navigation.navigate('DecisionPage', {
                name: username
            })}>
                <Text>Done</Text>
            </Pressable>
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
        textAlign: 'left'
    }, 
    formContainer: {
        alignItems: 'center',
    },

    input: {
        height: 48,
        width: '90%',
        borderRadius: 8,
        backgroundColor: '#202324',
        margin: 10,
        color: '#FFF',
        padding: 8
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '50%',
        height: 48,
        marginTop: 15,
        backgroundColor: '#2EC4B6',
        borderRadius: 48
    },
    
})

export default LandingPage;