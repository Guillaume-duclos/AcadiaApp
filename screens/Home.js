import React, { Component } from 'react';
import { StyleSheet, Text, Image, StatusBar, View, Dimensions, TouchableHighlight } from 'react-native';
import logo from '../assets/logo.png';
import CreateGame from './CreateGame';

const width = Dimensions.get('window').width;

export default class Home extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      value: [1, 2],
      playerCount: 2
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="rgba(0, 0, 0, .5)"
          barStyle="light-content"
          translucent={true}
        />
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo}/>
        </View>
        <TouchableHighlight style={styles.submit} onPress={() => this.props.navigation.navigate('CreateGame')}>
          <Text style={styles.submitText}>Nouvelle partie</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2f3640',
    paddingTop: 22
  },
  logoContainer: {
    flexDirection: 'row'
  },
  logo: {
    flex: .8,
    resizeMode: 'contain'
  },
  submit: {
    width: width * .7,
    backgroundColor: '#bf1924',
    borderRadius: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  submitText: {
    color: '#ffffff',
    flex: 1,
    textAlign: 'center',
    fontSize: 20
  }
});