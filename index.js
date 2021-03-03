const redux = require('redux')

const createStore = redux.createStore
const combineReducers = redux.combineReducers


const BUY_CAKE = 'BUY_CAKE'

function buyCake() {
    return {
        type: 'BUY_CAKE',
        info: 'first redux action'
    }
}

function buyIceCream() {
    return {
        type: 'BUY_ICECREAM',
        info: 'first redux action'
    }
}

const initialCakeState = {
    numberOfCakes: 10
}

//reducer is a function that takes the current state and action as arguments and return a new state
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        // Reducer donot allow to mutate the original so spread operator  is used to make copies of original and then mutate the copies
        case BUY_CAKE: return {
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        }
        default: return state
    }

}

const initialIcecreamState = {
    numOfIceCreams: 20
  }
  
  const iceCreamReducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
      case BUY_ICECREAM: return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1
      }
  
      default: return state
    }
  }

//getState() returnd current state
//dispatch sends an action to reducer to update the state
// subscribe takes a listener callback thhat runs each time an action is dispatched

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer

})
const store = createStore(rootReducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => console.log('Update state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()

