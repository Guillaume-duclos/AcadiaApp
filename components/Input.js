import React, { Component } from 'react';
import { StyleSheet, TextInput, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default class Input extends Component {

  state = {
    value: [1, 2],
    playerCount: 2
  };

  setPlayerName = (value, index) => {
    this.props.setPlayerName(index, value);
  }

  render() {
    return (
      <TextInput
        key={this.props.keyId}
        style={styles.userInput}
        placeholderTextColor="rgba(255, 255, 255, .5)"
        placeholder={`Nom du joueur ${this.props.keyId + 1}`}
        underlineColorAndroid='transparent'
        onChangeText={(text) => this.setPlayerName(text, this.props.keyId)}
      />
    );
  }
}

const styles = StyleSheet.create({
  userInput: {
    borderBottomWidth: 1,
    flex: 1,
    borderColor: '#bf1924',
    marginTop: 10,
    paddingLeft: 10,
    color: '#ffffff'
  }
});