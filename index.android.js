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

class Palco extends Component {
    render() {
        let escolha = '';

        if(this.props.escolha == 'pedra') {
            return (
                <View style={styles.iconeJogador}>
                    <Text style={styles.iconeJogador}>{this.props.jogador}</Text>
                    <Image source={require('./img/palco/pedra.png')} />
                </View>
            );

        } else if(this.props.escolha == 'papel') {
            return (
                <View style={styles.iconeJogador}>
                    <Text style={styles.iconeJogador}>{this.props.jogador}</Text>
                    <Image source={require('./img/palco/papel.png')} />
                </View>
            );

        } else if(this.props.escolha == 'tesoura') {
            return (
                <View style={styles.iconeJogador}>
                    <Text style={styles.iconeJogador}>{this.props.jogador}</Text>
                    <Image source={require('./img/palco/tesoura.png')} />
                </View>
            );

        } else {
            return false;
        }


        return (
            <View>
                <Text>Escolha do {this.props.jogador} {this.props.escolha}</Text>
                <Image source={require(escolha)} />
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
                resultado = 'Você ganhou';
            }

            if (escolhaUsuario == 'tesoura') {
                resultado = 'Você perdeu';
            }
        }

        if (escolhaComputador == 'papel') {
            if(escolhaUsuario == 'papel') {
                resultado = 'Empate';
            }

            if (escolhaUsuario == 'tesoura') {
                resultado = 'Você ganhou';
            }

            if (escolhaUsuario == 'pedra') {
                resultado = 'Você perdeu';
            }
        }

        if (escolhaComputador == 'tesoura') {
            if(escolhaUsuario == 'tesoura') {
                resultado = 'Empate';
            }

            if (escolhaUsuario == 'pedra') {
                resultado = 'Você ganhou';
            }

            if (escolhaUsuario == 'papel') {
                resultado = 'Você perdeu';
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


                <View style={styles.palco}>
                    <Text style={styles.txtResultado}>{this.state.resultado}</Text>

                    <Palco escolha={this.state.escolhaComputador} jogador='Computador'></Palco>
                    <Palco escolha={this.state.escolhaUsuario} jogador='Você'></Palco>

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
    },
    palco: {
        alignItems: 'center'
    },
    txtResultado: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
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
