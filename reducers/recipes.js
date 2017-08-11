import createReducer from '../lib/createReducer';
import * as types from '../actions/types';


export const searchedRecipes = createReducer({}, {
  [types.SET_SEARCHED_RECIPES](state, action) {
    // create new state
    let newState = {};
    // loop through the action payload that was dispatched and creates a key with rec unique id and value with recipe info as object
    action.recipes.forEach( recipe => {
      newState[recipe.id] = recipe;
    })
    return newState

  }
})

export const recipeCount = createReducer(0, {
  // listen for state transform
  [types.ADD_RECIPE](state, action) {
    return state + 1
  }
})
