import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: 'file///assets/img/pepe.jpg'}} style={{width:193,height:110}}/>
        <Text style={{color: 'red'}}>Espèce de pauvre type, tu fais du React au lieu de bosser ton JavaScript !</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',  
    alignItems: 'center',
    justifyContent: 'center',
  },
});