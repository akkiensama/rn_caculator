import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
    render(){
        return(
            <View style = {style.container}>
                
            </View>   
        );
    }
}

const style = StyleSheet.create({
    container: {
        
    }
})

const mapStateToProps = state => {
    console.log(state);
}

export default LibraryList