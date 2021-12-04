import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    TouchableOpacity,
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
  const [environments, setEnvironments] = useState([
    { 'key': 'rainforest', 'name': 'Rain Forest' },
    { 'key': 'coffeeshop', 'name': 'Coffee Shop' },
    { 'key': 'rainstorm', 'name' : 'Rain Storm' },
    { 'key': 'louvre', 'name': 'The Louvre' },
    { 'key': 'airplane', 'name': 'Airplane' },
    { 'key': 'concert', 'name': 'Concert' },
    { 'key': 'space', 'name': 'Space' },
    { 'key': 'park', 'name': 'Park'},
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={environments}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => ws.send(item.key)}>
            <Text style={styles.itemText}>{item.name}</Text> 
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    color: '#fff',
    backgroundColor: '#000',
    height: 140,
  },
  itemText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  }
});

export default HomePage;