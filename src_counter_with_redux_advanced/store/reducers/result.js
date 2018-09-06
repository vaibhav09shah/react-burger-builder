import * as actionTypes from  '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    results:[]
}

const deleteResult = (state , action) => {
    const newArray = state.results.filter( results => results.id !== action.resultElId);
    return updateObject(state , { results: newArray})
}


const reducer = (state = initialState,action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT:  return updateObject(state , { results: state.results.concat({id: new Date() , value:action.result}) } )
        case actionTypes.DELETE_RESULTS: return deleteResult(state,action);
    }

    return state;
};

export default reducer;

//const id = 2;
// const newArray = [...state.results];
// newArray.splice  (id,1);

// return {
//     ...state,
//     results: newArray
// }
// break;
          