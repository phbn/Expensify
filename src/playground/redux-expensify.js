import { createStore, combineReducers } from 'redux';


const expensesReducerDefaultState = 
const expensesReducer = (state = [], action) => {};



const demoState = {
  expenses: [
    {
      id: '1973rg231er',
      description: 'January rent',
      note: 'HELLOOOOOOOOOO',
      amount: 64100,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

const store = createStore();
