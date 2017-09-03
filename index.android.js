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
  Button,
  Image
} from 'react-native';

class Topo extends Component {
    render() {
        return (
            <View>
                <Image source={require('./img/jokenpo.png')}/>
            </View>
        );
    }
}

export default class game_jokenpo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            escolhaUsuario: '',
            escolhaComputador: '',
            resultado: ''
        };
    }

    jokenpo(escolhaUsuario) {
        // gera número aleatório (0, 1, 2)
        let numAleatorio = Math.floor(Math.random() * 3);

        let escolhaComputador = '';

        switch(numAleatorio) {
            case 0:
                escolhaComputador = 'pedra';
                break;
            case 1:
                escolhaComputador = 'papel';
                break;
            case 2:
                escolhaComputador = 'tesoura';
                break;
        }

        let resultado = '';

        if (escolhaComputador == 'pedra') {
            if(escolhaUsuario == 'pedra') {
                resultado = 'Empate';
            }

            if (escolhaUsuario == 'papel') {
                resultado = 'Usuário ganhou';
            }

            if (escolhaUsuario == 'tesoura') {
                resultado = 'Computador ganhou';
            }
        }

        if (escolhaComputador == 'papel') {
            if(escolhaUsuario == 'papel') {
                resultado = 'Empate';
            }

            if (escolhaUsuario == 'tesoura') {
                resultado = 'Usuário ganhou';
            }

            if (escolhaUsuario == 'pedra') {
                resultado = 'Computador ganhou';
            }
        }

        if (escolhaComputador == 'tesoura') {
            if(escolhaUsuario == 'tesoura') {
                resultado = 'Empate';
            }

            if (escolhaUsuario == 'pedra') {
                resultado = 'Usuário ganhou';
            }

            if (escolhaUsuario == 'papel') {
                resultado = 'Computador ganhou';
            }
        }

        this.setState({ escolhaUsuario, escolhaComputador, resultado });

    }

    render() {
        return (
            <View>
                <Topo />

                <View style={styles.painelAcoes}>
                    <View style={styles.btnEscolha}>
                        <Button title='pedra' onPress={ () => this.jokenpo('pedra') } />
                    </View>

                    <View style={styles.btnEscolha}>
                        <Button title='papel' onPress={ () => this.jokenpo('papel') } />
                    </View>

                    <View style={styles.btnEscolha}>
                        <Button title='tesoura' onPress={ () => this.jokenpo('tesoura') } />
                    </View>
                </View>

                <View>
                    <Text>Escolha do Computador {this.state.escolhaComputador}</Text>
                    <Text>Escolha do Usuário {this.state.escolhaUsuario}</Text>
                    <Text>Resultado {this.state.resultado}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btnEscolha: {
        width: 90
    },
    painelAcoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    }
});


AppRegistry.registerComponent('game_jokenpo', () => game_jokenpo);
