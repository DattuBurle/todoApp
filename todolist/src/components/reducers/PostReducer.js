import { FETCH_TODODS, NEW_TODO, UPDATE_TODO, DELETE_TODO, COMPLETE_TODO } from '../actions/Types';

const initialState = {
    items: [], 
    item: {}
}

export default function(state = initialState, action){
    switch (action.type){
        default:
            return state;
    }
}