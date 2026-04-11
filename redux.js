//reducer
const cartReducer = (state = {
    login: false,
    cart: [],
}, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        default:
            return state;
    }
};

//store
const store = Redux.createStore(cartReducer);


//subscribe
store.subscribe(() => {
    console.log(store.getState());
});

//dispatch
store.dispatch({
    type: 'ADD_TO_CART',
    payload: {
        id: 1,
        name: 'Product 1',
        price: 100
    }
});

const action = {
    type: 'ADD_TO_CART',
    payload: {
        id: 2,
        name: 'Product 2',
        price: 200
    }
};
store.dispatch(action);