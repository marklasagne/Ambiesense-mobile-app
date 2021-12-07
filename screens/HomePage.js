import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import airplane from '../assets/environments/coffeeshop.png';
import coffeeshop from '../assets/environments/coffeeshop.png';
import concert from '../assets/environments/concert.png';
import louvre from '../assets/environments/louvre.png';
import rainforest from '../assets/environments/rainforest.png';
import rainstorm from '../assets/environments/rainstorm.png';
import library from '../assets/environments/library.png';
import space from '../assets/environments/space.png';


// connecting to my server here
const ws = new WebSocket('ws://10.0.0.3:8082');
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
  console.log(e.code, e.reason);
}


const HomePage = () => {
  // test data
  const [environments, setEnvironments] = useState([
    { 'key': 'rainforest', 'name': 'Rain Forest', 'image': rainforest },
    { 'key': 'coffeeshop', 'name': 'Coffee Shop', 'image': coffeeshop },
    { 'key': 'space', 'name': 'Space', 'image': space },
    { 'key': 'rainstorm', 'name': 'Rain Storm', 'image': rainstorm },
    { 'key': 'louvre', 'name': 'The Louvre', 'image': louvre },
    { 'key': 'airplane', 'name': 'Airplane', 'image': airplane },
    { 'key': 'concert', 'name': 'Concert', 'image': concert },
    { 'key': 'library', 'name': 'Library', 'image': library },
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
            <ImageBackground source={item.image} resizeMode="cover" style={styles.image}>
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
    marginVertical: 2,
    marginHorizontal: 2,
    height: 140,
    borderRadius: 15,
  },
  itemText: {
    fontSize: 24,
    color: '#fff',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  header: {
    height: 60,
    margin: 0,
    paddingLeft: 10,
    backgroundColor: '#090A0A',
    justifyContent: "center",
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  }
});

export default HomePage;