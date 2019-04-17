import uuid from 'uuid';

const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const sortByDate = () => ({ type: 'SORT_BY_DATE' });

const sortByAmount = () => ({ type: 'SORT_BY_AMOUNT' });

const setStartDate = timestamp => ({
  type: 'SET_START_DATE',
  timestamp
});
const setEndDate = timestamp => ({
  type: 'SET_END_DATE',
  timestamp
});

store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
