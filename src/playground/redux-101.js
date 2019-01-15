import { createStore } from 'redux';

const add = ({ a, b }) => {
    return a + b;
}

console.log(add({ a: 1, b: 12}));

const incrementCount = ({incrementBy = 1} = {}) => ({ 
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count = 100} = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
};


const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(resetCount());

store.dispatch(setCount({ count: 131 }));

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 5 }));

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 5
// });

store.dispatch(resetCount());

// store.dispatch({
//     type: 'RESET'
// });