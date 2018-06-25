import React, { Component } from 'react';
import { StyleSheet, Text, Image, TextInput, StatusBar, View, Dimensions, TouchableHighlight } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import Input from '../components/Input';
import playersIcon from '../assets/players-icon.png';

const width = Dimensions.get('window').width;

export default class CreateGame extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      value: [0, 1],
      playerCount: 2
    };
  }

  addPlayer = () => {
    if(this.state.playerCount < 6) {
      this.setState({
        playerCount: this.state.playerCount + 1,
        value: [...this.state.value, this.state.playerCount]
      });
    }
  }

  deletePlayer = () => {
    if(this.state.playerCount > 2) {
      this.setState({playerCount: this.state.playerCount - 1});
      let updatedValue = this.state.value;
      updatedValue.pop();
      this.setState({value: updatedValue});
    }
  }

  setPlayerName = (index, text) => {
    switch(index) {
      case 0:
        this.setState({player1: text});
        break;
      case 1:
        this.setState({player2: text});
        break;
      case 2:
        this.setState({player3: text});
        break;
      case 3:
        this.setState({player4: text});
        break;
      case 4:
        this.setState({player5: text});
        break;
    }
  }

  render() {
    console.log(this.props.navigation);
    const self = this;
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="rgba(0, 0, 0, .5)"
          barStyle="light-content"
          translucent={true}
        />
        <View style={styles.playersIconContainer}>
          <Image source={playersIcon} style={styles.playersIcon}/>
          <Text style={styles.playersIconText}>Inscrivez le nom des joueurs</Text>
        </View>
        <View>
          <View style={styles.playerListContainer}>
            {this.state.value.map(function(name, index){
              return (
                <View key={index} style={styles.playerList}>
                  <Input
                    keyId={index}
                    setPlayerName={self.setPlayerName}
                  />
                </View>
              );
            })}
          </View>
          <View style={styles.listButtonContainer}>
            <TouchableHighlight underlayColor='#a51520' style={styles.playerAddButton} onPress={() => this.addPlayer()}>
              <Text style={styles.playerAddText}>Ajouter un joueur</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor='#a51520' style={styles.playerDeleteButton} onPress={() => this.deletePlayer()}>
              <Text style={styles.playerAddText}>Supprimer un joueur</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.setNumberContainer}>
          <TouchableHighlight
            underlayColor='#a51520'
            style={styles.submit}
            onPress={() => this.props.navigation.navigate('Roulette', {
              player1: this.state.player1,
              player2: this.state.player2,
              player3: this.state.player3,
              player4: this.state.player4,
              player5: this.state.player5,
              player6: this.state.player6,
              playerCount: this.state.playerCount
            })}
          >
            <Text style={styles.submitText} >Confirmer</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#2f3640',
    paddingTop: 22
  },
  playersIconContainer: {
    alignItems: 'center',
  },
  playersIcon: {
    width: 100,
    height: 100
  },
  playersIconText: {
    color: "#ffffff",
    fontSize: 20
  },
  text: {
    color: '#bf1924'
  },
  title: {
    fontSize: 25,
    textAlign: 'center'
  },
  playerList: {
    borderColor: 'red',
    borderWidth: 0,
    width: width * .9,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  playerAddButton: {
    width: width * .45,
    backgroundColor: '#bf1924',
    borderRadius: 10,
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  playerDeleteButton: {
    width: width * .45,
    backgroundColor: '#bf1924',
    borderRadius: 10,
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 15
  },
  playerAddText: {
    color: '#ffffff',
    flex: 1,
    textAlign: 'center',
    fontSize: 15
  },
  deletePlayerButton: {
    width: 30,
    height: 30,
    borderWidth: 0,
    borderColor: '#bf1924',
    alignItems: 'center',
    marginTop: 20
  },
  deletePlayerButtonChildOne: {
    height: 30,
    borderWidth: 1,
    borderColor: '#bf1924',
    position: 'absolute',
    transform: [{ rotate: '45deg'}]
  },
  deletePlayerButtonChildTwo: {
    height: 30,
    borderWidth: 1,
    borderColor: '#bf1924',
    position: 'absolute',
    transform: [{ rotate: '-45deg'}]
  },
  listButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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