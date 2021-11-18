// connecting to my desktop here
const ws = new WebSocket('ws://10.0.0.4:8082');
ws.onopen = () => {
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


const EnvironmentList = () => {
  return (
    
    <View>
      <Text>HELLO HOWDY!</Text>
      <View style={styles.space}/>
      <Button
        style={styles.button}
        title="RED"
        onPress={() => ws.send('red')}
      />
      <View style={styles.space}/>
      <Button
        style={styles.button}
        title="BLUE"
        onPress={() => ws.send('blue')}
      />
      <View style={styles.space}/>
      <Button
        style={styles.button}
        title="YELLOW"
        onPress={() => ws.send('yellow')}
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

export default EnvironmentList;