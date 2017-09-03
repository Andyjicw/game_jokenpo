import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';


const imgPedra = require('../../img/palco/pedra.png');
const imgPapel = require('../../img/palco/papel.png');
const imgTesoura = require('../../img/palco/tesoura.png');

export default class Palco extends Component {
    render() {
        if (this.props.escolha === 'pedra') {
            return (
                <View style={this.props.styles.iconeJogador}>
                    <Text style={this.props.styles.iconeJogador}>{this.props.jogador}</Text>
                    <Image source={imgPedra} />
                </View>
            );

        } else if (this.props.escolha === 'papel') {
            return (
                <View style={this.props.styles.iconeJogador}>
                    <Text style={this.props.styles.iconeJogador}>{this.props.jogador}</Text>
                    <Image source={imgPapel} />
                </View>
            );

        } else if (this.props.escolha === 'tesoura') {
            return (
                <View style={this.props.styles.iconeJogador}>
                    <Text style={this.props.styles.iconeJogador}>{this.props.jogador}</Text>
                    <Image source={imgTesoura} />
                </View>
            );

        }

        return false;
    }
}
