console.log('Component App');
import React, { Component } from 'react';
import { Text,Image, View } from 'react-native';
import Navbar from './Component/Navbar';

export default class App extends Component {
    componentDidMount(){
        console.log('componentDidMonut');
    }
    componentWillMount(){
        console.log('componentWillMount');
    }
  render() {
    console.log('Render');
    return (
        <View>
            <Navbar/>
        </View>
    );
  }
}
