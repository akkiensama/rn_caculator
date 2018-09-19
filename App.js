import React, { Component } from 'react';
import {
  
  StyleSheet,  
  Text,
  View
} from 'react-native';
import { Header, Card, Button, ButtonImage } from './src/components/common';


export default class App extends Component{
  state = {
    inputArr: [],
    result: ''
  }

  addInput(value){
    let { inputArr } = this.state;

    inputArr.push(value);
    this.setState({ inputArr });
  }

  back(){
    let { inputArr } = this.state;

    inputArr.splice(-1, 1);
    this.setState({ inputArr });
  }

  clearInput(){
    this.setState({ inputArr: [] })
  }
  
  caculate(){
    let { inputArr } = this.state;

    let result = eval(inputArr.join(''));
    this.setState({ result });
  }

  render() {
    return (
        <View style = {styles.container}>

            <Header headerText="Caculator" />

            <View style = {styles.textInputView}>
              <Text style={styles.text}> {this.state.inputArr.join('')} </Text>
            </View>

            <View style = {styles.textResultView}>
              <Text style = {styles.text}> {this.state.result} </Text>
            </View>

            <View style = {styles.buttonContainer}>
              <Card>
                <ButtonImage imageName = 'squareroot' val = 'squareroot(' />
                <ButtonImage imageName = 'square' val = 'square(' />
                <Button val = '^' >^</Button>
                <Button onPress = {this.clearInput.bind(this)}> Clear </Button>
              </Card>
              <Card>
                <Button val = '(' onPress = {this.addInput.bind(this, '(')}>(</Button>
                <Button val = ')' onPress = {this.addInput.bind(this, ')')}>)</Button>
                <ButtonImage imageName = 'backspace' onPress = {this.back.bind(this)}/>
                <Button val = '+' onPress = {this.addInput.bind(this, '+')}>+</Button>
              </Card>
              <Card>
                <Button val = '7' onPress = {this.addInput.bind(this, '7')}>7</Button>
                <Button val = '8' onPress = {this.addInput.bind(this, '8')}>8</Button>
                <Button val = '9' onPress = {this.addInput.bind(this, '9')}>9</Button>
                <Button val = ' - ' onPress = {this.addInput.bind(this, ' - ')}>-</Button>
              </Card>
              <Card>
                <Button val = '4' onPress = {this.addInput.bind(this, '4')}>4</Button>
                <Button val = '5' onPress = {this.addInput.bind(this, '5')}>5</Button>
                <Button val = '6' onPress = {this.addInput.bind(this, '6')}>6</Button>
                <Button val = '*' onPress = {this.addInput.bind(this, '*')}>x</Button>
              </Card>
              <Card>
                <Button val = '1' onPress = {this.addInput.bind(this, '1')}>1</Button>
                <Button val = '2' onPress = {this.addInput.bind(this, '2')}>2</Button>
                <Button val = '3' onPress = {this.addInput.bind(this, '3')}>3</Button>
                <Button val = '/' onPress = {this.addInput.bind(this, '/')}>/</Button>
              </Card>
              <Card>
                <Button val = '0' onPress = {this.addInput.bind(this, '0')}>0</Button>
                <Button val = '.' onPress = {this.addInput.bind(this, '.')}>.</Button>
                <ButtonImage imageName = 'pi' val = 'Pi' onPress = {this.addInput.bind(this, Math.PI.toString())}/>
                <Button onPress = {this.caculate.bind(this)}>=</Button>
              </Card>
            </View>
        </View>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#f5fcff',
  },
  textInputView: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 5
  },
  textResultView: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 5
  },
  text: {
    fontSize: 30,
    color: '#0000ff'
  },
  buttonContainer: {
    flex: 6,
    backgroundColor: '#222f3e',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 2
  }
});
