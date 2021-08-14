import CartActionTypes from './cartActionType'
export const toggleHidden = () =>({
    type: CartActionTypes.TOGGLE_HIDDEN_STATE,
})


export const addItem = (item) =>({
    type: CartActionTypes.ADD_ITEM,
    payload: item  
})