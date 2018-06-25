import React, { Component } from 'react';
import { StyleSheet, Text, Image, TextInput, StatusBar, View, Dimensions, TouchableHighlight, Button } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Home from './screens/Home';
import Roulette from './screens/Roulette';
import CreateGame from './screens/CreateGame';

const width = Dimensions.get('window').width;

export default class App extends Component {

  render() {
    return(
      <StackNavigator/>
    );
  }
}

const StackNavigator = createStackNavigator({
  initialRouteName: CreateGame,
  Home: Home,
  CreateGame: CreateGame,
  Roulette: Roulette
});