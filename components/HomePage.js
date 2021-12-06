import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    TouchableOpacity,
    ImageBackground
  } from 'react-native';
import airplane from '../assets/coffeeshop.png';
import coffeeshop from '../assets/coffeeshop.png';
import concert from '../assets/concert.png';
import louvre from '../assets/louvre.png';
import rainforest from '../assets/rainforest.png';
import rainstorm from '../assets/rainstorm.png';


// connecting to my server here
const ws = new WebSocket('ws://10.201.11.130:8082');
ws.onopen = () => { 
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
    { 'key': rainforest, 'name': 'Rain Forest' },
    { 'key': coffeeshop, 'name': 'Coffee Shop' },
    { 'key': rainstorm, 'name' : 'Rain Storm' },
    { 'key': louvre, 'name': 'The Louvre' },
    { 'key': airplane, 'name': 'Airplane' },
    { 'key': concert, 'name': 'Concert' },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Ambiances</Text>
      </View>
      <FlatList
        data={environments}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => ws.send(item.key)}>
            <ImageBackground source={item.key} resizeMode="cover" style={styles.image}>
              <Text style={styles.itemText}>{item.name}</Text>
            </ImageBackground> 
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 5,
    height: 140,
    borderRadius: 15,
  },
  itemText: {
    color: '#fff',
    fontSize: 24,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  header: {
    height: 60,
    backgroundColor: '#090A0A',
    margin: 0,
    justifyContent: "center",
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#fff',
  }
});

export default HomePage;