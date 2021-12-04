import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
  } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';

// connecting to my desktop here
const ws = new WebSocket('ws://10.0.0.3:8082');
ws.onopen = () => {git 
  // open connection 
  console.log('phone connected')
};
ws.onmessage = (e) => {
  console.log(e.data);
};
ws.onerror = (e) => {
  console.log(e.message);
};

ws.onclose = (e) => {
  console.log(e.code,e.reason);
}


const HomePage = () => {
  return (
    <View>
      <Text>HELLO HOWDY!</Text>
      <View style={styles.space}/>
      <Button
        style={styles.button}
        title="RED"
        onPress={() => ws.send(JSON.stringify({'name': 'rainforest'}))}
      />
      <View style={styles.space}/>
      <Button
        style={styles.button}
        title="BLUE"
        onPress={() => ws.send(JSON.stringify({'name': 'rain'}))}
      />
      <View style={styles.space}/>
      <Button
        style={styles.button}
        title="YELLOW"
        onPress={() => ws.send(JSON.stringify({'name': 'off'}))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBotton: 20,
    padding: 30
  },
  space: {
    width: 20,
    height: 20
  }
});

export default HomePage;