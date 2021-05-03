import { FETCH_TODODS, NEW_TODO, UPDATE_TODO, DELETE_TODO, COMPLETE_TODO } from './Types';

export function fetchTodos(){
    return function(dispatch){
        var todos=[], keys = Object.keys(localStorage), i = keys.length;

        while ( i-- ) {
            todos.push(localStorage.getItem(keys[i]) );
        }
    }
}