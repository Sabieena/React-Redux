const redux = require('redux')

const createStore = redux.createStore


const BUY_CAKE = 'BUY_CAKE'

function buyCake() {
    return {
        type: 'BUY_CAKE',
        info: 'first redux action'
    }
}

const initialState = {
    numberOfCakes: 10
}

//reducer is a function that takes the current state and action as arguments and return a new state
const reducer = (state = initialState, action) => {
    switch (action.type) {
        // Reducer donot allow to mutate the original so spread operator  is used to make copies of original and then mutate the copies
        case BUY_CAKE: return {
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        }
        default: return state
    }

}

//getState() returnd current state
//dispatch sends an action to reducer to update the state
// subscribe takes a listener callback thhat runs each time an action is dispatched

const store = createStore(reducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => console.log('Update state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()

