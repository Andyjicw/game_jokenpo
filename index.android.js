/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MeuComponente extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.fruta1} Parâmetro</Text>
                <Text>{this.props.fruta2} Parâmetro</Text>
            </View>
        );
    }
}

export default class game_jokenpo extends Component {
  render() {
    return (
        <MeuComponente
            fruta1='Banana'
            fruta2='Mamão'
        />
    );
  }
}


AppRegistry.registerComponent('game_jokenpo', () => game_jokenpo);
