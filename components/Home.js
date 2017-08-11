import React, { Component } from 'react';
import ReactNative, { Text, View, TouchableHighlight, ScrollView, TextInput, Image } from 'react-native';
import styles from '../styles/styles';
import { connect } from 'react-redux';
import { searchedRecipes } from '../reducers/index';

class Home extends Component {


  constructor(props){
    // calls the constructor on the component
    super(props);
    this.state = {
      ingredientsInput: ' '
    }
  }

  _recipes() {
    return Object.keys(this.props.searchedRecipes).map( key => this.props.searchedRecipes[key] )
  }

  _searchPressed(){
    this.props.fetchRecipes('bacon, cucumber, banana')
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>FOODi</Text>
        <View style={styles.searchCont}>
          <TextInput
            style={styles.searchInput}
            returnKeyType='search'
            placeholder="Find Recipe"
            onChangeText={ ingredientsInput => this.setState({ingredientsInput})}
            value={this.state.ingredientsInput}
          />
          <TouchableHighlight underlayColor='pink' style={styles.button} onPress={() =>  this._searchPressed()}>
            <Text style={styles.colorTwo}>SEARCH</Text>
          </TouchableHighlight>
        </View>

        <ScrollView style={styles.recList}>
          {
            this._recipes().map( recipe => {
              return <View key={recipe.id}>
                <Image source={ { uri: recipe.image }} style={styles.scrollViewImg} />
                <Text style={styles.recName}>{recipe.title}</Text>
              </View>
            })
          }
        </ScrollView>
      </View>
    )
  }

}

function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes
  }
}

export default connect(mapStateToProps)(Home)
