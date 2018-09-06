const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//Reducer
const rootReducer = (state =  initialState,action) => {
    let updatedState = {};
    updatedState = state;
    if(action.type === 'INC_COUNTER'){
        updatedState.counter = updatedState.counter + 1;
    }

    if(action.type === 'ADD_COUNTER'){
        updatedState.counter = updatedState.counter + action.value;
    }

    return updatedState;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());


//Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

//Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER' , value: 10});
console.log(store.getState());
