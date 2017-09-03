import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

export default class Palco extends Component {
    render() {
        if(this.props.escolha == 'pedra') {
            return (
                <View style={this.props.styles.iconeJogador}>
                    <Text style={this.props.styles.iconeJogador}>{this.props.jogador}</Text>
                    <Image source={require('../../img/palco/pedra.png')} />
                </View>
            );

        } else if(this.props.escolha == 'papel') {
            return (
                <View style={this.props.styles.iconeJogador}>
                    <Text style={this.props.styles.iconeJogador}>{this.props.jogador}</Text>
                    <Image source={require('../../img/palco/papel.png')} />
                </View>
            );

        } else if(this.props.escolha == 'tesoura') {
            return (
                <View style={this.props.styles.iconeJogador}>
                    <Text style={this.props.styles.iconeJogador}>{this.props.jogador}</Text>
                    <Image source={require('../../img/palco/tesoura.png')} />
                </View>
            );

        } else {
            return false;
        }
    }
}
