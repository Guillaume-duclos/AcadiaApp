import React, { Component } from 'react';
import { StyleSheet, Text, Image, Easing, StatusBar, View, Dimensions, TouchableHighlight, Animated } from 'react-native';
import roulette from '../assets/roulette.png';
import Datas from '../Datas/Datas';
import arrowIcon from '../assets/arrow-icon.png';

const width = Dimensions.get('window').width;

export default class Roulette extends Component {

  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.spinValue = new Animated.Value(0);
    this.state = {
      player1: null,
      player2: null,
      player3: null,
      player4: null,
      player5: null,
      player6: null,
      gages: [],
      activePlayer: false
    }
  }

  componentDidMount() {
    if(this.props.navigation.state.params.player1 !== undefined) {
      this.setState({player1: this.props.navigation.state.params.player1});
    }
    if(this.props.navigation.state.params.player2 !== undefined) {
      this.setState({player2: this.props.navigation.state.params.player2});
    }
    if(this.props.navigation.state.params.player3 !== undefined) {
      this.setState({player3: this.props.navigation.state.params.player3});
    }
    if(this.props.navigation.state.params.player4 !== undefined) {
      this.setState({player4: this.props.navigation.state.params.player4});
    }
    if(this.props.navigation.state.params.player5 !== undefined) {
      this.setState({player5: this.props.navigation.state.params.player5});
    }
    if(this.props.navigation.state.params.player6 !== undefined) {
      this.setState({player6: this.props.navigation.state.params.player6});
    }

    for(let i = 0; i < this.props.navigation.state.params.playerCount; i++) {
      let randomValue = - Math.floor(Math.random() * (0 - 10) + 0);
      this.state.gages.push(Datas.gages[randomValue]);
    }
  }

  spin() {
    Animated.timing(
      this.spinValue,
      {
        toValue: 2000,
        duration: 2000,
        easing: Easing.easeInOut,
        useNativeDriver: true
      }
    ).start(this.activeShowPlayer);
  }

  activeShowPlayer = () => {
    this.setState({activePlayer: true});
  }

  showPlayer = () => {
    if(this.state.activePlayer === true) {
      return(
        <View style={styles.playerList}>
          <Text style={styles.playerName}>{this.state.player1}</Text>
          <Text style={styles.playerGage}>{this.state.gages[0]}</Text>
          <Text style={styles.playerName}>{this.state.player2}</Text>
          <Text style={styles.playerGage}>{this.state.gages[1]}</Text>
          <Text style={styles.playerName}>{this.state.player3}</Text>
          <Text style={styles.playerGage}>{this.state.gages[2]}</Text>
          <Text style={styles.playerName}>{this.state.player4}</Text>
          <Text style={styles.playerGage}>{this.state.gages[3]}</Text>
          <Text style={styles.playerName}>{this.state.player5}</Text>
          <Text style={styles.playerGage}>{this.state.gages[4]}</Text>
          <Text style={styles.playerName}>{this.state.player6}</Text>
          <Text style={styles.playerGage}>{this.state.gages[5]}</Text>
        </View>
      );
    }
  }

  render() {

    const spin = this.spinValue.interpolate({
      inputRange: [0, 2000],
      outputRange: ['0deg', '2000deg']
    });

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="rgba(0, 0, 0, .5)"
          barStyle="light-content"
          translucent={true}
        />
        <View style={styles.arrowIconContainer}>
          <Text style={styles.arrowIconText}>Tournez la roue</Text>
          <Image source={arrowIcon} style={styles.arrowIcon}/>
        </View>
        <TouchableHighlight onPress={() => this.spin()} underlayColor='transparent' style={styles.rouletteContainer}>
          <Animated.Image
            source={roulette}
            style={{
              flex: 1,
              resizeMode: 'contain',
              transform: [{rotate: spin}]
            }}
          />
        </TouchableHighlight>
        {this.showPlayer()}
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
  arrowIconContainer: {
    marginBottom: 15,
    alignItems: 'center'
  },
  arrowIconText: {
    color: '#ffffff',
    fontSize: 20,
    marginBottom: 10,
  },
  arrowIcon: {
    width: 50,
    height: 50,
  },
  rouletteContainer: {
    flexDirection: 'row',
    borderWidth: 0,
    borderColor: 'red',
    width: width * .8,
    height: width * .8,
    alignItems: 'center',
    borderRadius: (width * .8) / 2
  },
  playerList: {
    marginTop: 10
  },
  playerName: {
    fontSize: 25,
    color: '#bf1924',
    textAlign: 'center',
  },
  playerGage: {
    fontSize: 15,
    color: '#ffffff',
    textAlign: 'center',
  }
});