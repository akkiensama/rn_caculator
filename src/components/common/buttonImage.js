import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';

class ButtonImage extends Component {
    src(){
        switch(this.props.imageName){
            case 'backspace':
                return require('../../images/backspace.png');
                break;
            case 'square':
                return require('../../images/square.png');
                break;
            case 'squareroot':
                return require('../../images/squareroot.png');
                break;
            default:
                return require('../../images/pi.png');
                break;
        }
    }
    render(){
        return(
            <TouchableOpacity onPress = { this.props.onPress } style = {styles.button}>
                <Image
                    style = {styles.image}
                    source={this.src()}
                />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c8d6e5',
        borderWidth: 1,
        borderColor: '#576574',
        margin: 1
    },
    image: {
        flex: 1,
        width: 30,
        height: 30,
        resizeMode: 'contain'
    }
})

export { ButtonImage }