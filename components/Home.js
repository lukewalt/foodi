import React, { Component } from 'react';
import ReactNative, { Text, View, TouchableHighlight } from 'react-native';
import styles from '../styles/styles';


export default class Home extends Component {

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>FOODIE</Text>
        <Text style={styles.subTitle}>Recipe Count: {this.props.recipeCount}</Text>
        <TouchableHighlight underlayColor='pink' style={styles.button} onPress={() => { this._addRecipe() }}>
          <Text style={styles.colorTwo}>ADD RECIPE</Text>
        </TouchableHighlight>
      </View>
    )
  }

}
