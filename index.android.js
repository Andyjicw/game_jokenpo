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
  View,
  Button
} from 'react-native';



export default class game_jokenpo extends Component {

    constructor(props) {
        super(props);

        this.state = { escolhaUsuario: '' };
    }

    jokenpo(escolhaUsuario) {
        this.setState({escolhaUsuario});
    }

    render() {
        return (
            <View>
                <Text>Escolha do Computador</Text>
                <Text>Escolha do Usuário {this.state.escolhaUsuario}</Text>
                <Text>Resultado</Text>
                <Button title='pedra' onPress={ () => this.jokenpo('pedra') } />
                <Button title='papel' onPress={ () => this.jokenpo('papel') } />
                <Button title='tesoura' onPress={ () => this.jokenpo('tesoura') } />
            </View>
        );
    }
}


AppRegistry.registerComponent('game_jokenpo', () => game_jokenpo);
