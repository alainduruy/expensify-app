import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

console.log(store.getState());

const expenseOne = store.dispatch(addExpense({ description: 'Water Bill', amount: 1000, createdAt: 2200}));
const expenseTwo = store.dispatch(addExpense({ description: 'Gas Bill', amount: 300, createdAt: 3320}));
const expenseThree = store.dispatch(addExpense({ description: 'Water Bill', amount: 132234, createdAt: 1000}));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

const appRoot = document.getElementById('app');

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, appRoot);