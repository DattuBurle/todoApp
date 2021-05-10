import * as actions from '../actions/Types';

const initialState = {
    items: [], 
    item: {}
}

export default function(state = initialState, action){
    switch (action.type){
        case actions.FETCH_TODODS:
            return{
                ...state,
                items: action.payload
            }
        case actions.ADD_TODO:
            return{
                ...state,
                items: action.payload
            }
        case actions.UPDATE_TODO:
            return{
                ...state,
                items: action.payload
            }
        default:
            console.log(['action.payload'])
            return state;
    }
}