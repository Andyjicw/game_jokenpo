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

import Topo from './src/components/Topo';
import Palco from './src/components/Palco';


export default class game_jokenpo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            escolhaUsuario: '',
            escolhaComputador: '',
            resultado: '',
            corResultado: 'white'
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
        let corResultado = '';

        if (escolhaComputador === 'pedra') {
            if(escolhaUsuario === 'pedra') {
                resultado = 'Empate';
                corResultado = 'blue';
            }

            if (escolhaUsuario === 'papel') {
                resultado = 'Você ganhou';
                corResultado = 'green';
            }

            if (escolhaUsuario === 'tesoura') {
                resultado = 'Você perdeu';
                corResultado = 'red';
            }
        }

        if (escolhaComputador === 'papel') {
            if (escolhaUsuario === 'papel') {
                resultado = 'Empate';
                corResultado = 'blue';
            }

            if (escolhaUsuario === 'tesoura') {
                resultado = 'Você ganhou';
                corResultado = 'green';
            }

            if (escolhaUsuario === 'pedra') {
                resultado = 'Você perdeu';
                corResultado = 'red';
            }
        }

        if (escolhaComputador == 'tesoura') {
            if (escolhaUsuario === 'tesoura') {
                resultado = 'Empate';
                corResultado = 'blue';
            }

            if (escolhaUsuario === 'pedra') {
                resultado = 'Você ganhou';
                corResultado = 'green';
            }

            if (escolhaUsuario === 'papel') {
                resultado = 'Você perdeu';
                corResultado = 'red';
            }
        }

        this.setState({
            escolhaUsuario,
            escolhaComputador,
            resultado,
            corResultado
        });

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


                <View style={styles.palco}>
                    <Text style={[styles.txtResultado, {'color': this.state.corResultado}]}>{this.state.resultado}</Text>

                    <Palco
                        styles={styles}
                        escolha={this.state.escolhaUsuario}
                        resultado={this.state.corResultado}
                        jogador='Você'
                    />

                    <Palco
                        styles={styles}
                        escolha={this.state.escolhaComputador}
                        resultado={this.state.corResultado}
                        jogador='Computador'
                    />
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
        marginHorizontal: 5,
        marginVertical: 10
    },
    palco: {
        alignItems: 'center'
    },
    txtResultado: {
        fontSize: 25,
        fontWeight: 'bold',
        height: 60
    },
    iconeJogador: {
        alignItems: 'center',
        marginBottom: 20
    },
    txtJogador: {
        fontSize: 18
    }
});


AppRegistry.registerComponent('game_jokenpo', () => game_jokenpo);
