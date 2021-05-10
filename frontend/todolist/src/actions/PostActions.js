import * as actions from './Types';

export const fetchTodos = () => dispatch => {
    let todoss=[], keys = Object.keys(localStorage), i = keys.length;

    while ( i-- ) {
        let valuee = localStorage.getItem(keys[i]).split(', ');
        let textt = valuee[0];
        let completedd;
        if(valuee[1] === 'false'){
          completedd = false;
        }else{
          completedd = true;
        }
        todoss.push({id : parseInt(keys[i]), text: textt, completed: completedd});
    }
    dispatch({
        type: actions.FETCH_TODODS,
        payload: todoss
    })
    
};


export const addTodoo = (todo) => {
  return {
    type: actions.ADD_TODO, 
    payload: todo
  }
};

export const updatedTodoo = (todo) => {
  return {
    type: actions.UPDATE_TODO, 
    payload: todo
  }
};

