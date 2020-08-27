import React, { Component } from 'react';
import { StyleSheet, View, Button, Image, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Navigator from './homestack/homestack';
import { SocialIcon, Avatar, Badge, Icon, withBadge, Input } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './homestack/drawerhomestack'
export default class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changestate: false
    }
  }

  navigatorToHome() {
    this.setState({
      changestate: true
    })
  }
  render() {

    return (
      // <Navigator/>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>

    )


  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 300,
    height: 500,
    alignSelf: 'center',
    resizeMode: 'contain'
  },

  bgImageWrapper: {
    opacity: 0.6,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },

  bg: {
    flex: 1,
    width: null,
    height: null,

    resizeMode: "cover"
  },

  text: {
    alignSelf: 'center',
    marginTop: -170,
    fontSize: 25
  },

});

