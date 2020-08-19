import {
  ADD_TRANSACTION,
  REMOVE_TRANSACTION,
} from "./ExpenseTrackerActionTypes";

export const saveTransaction = ({ id, title, type, isExpense, amount }) => (
  dispatch
) => {
  const newTransaction = {
    id,
    title,
    type,
    isExpense,
    amount,
  };

  dispatch({ type: ADD_TRANSACTION, payload: newTransaction });
};

export const removeTransaction = ({ id }) => (dispatch) => {
  console.log(id);
  dispatch({ type: REMOVE_TRANSACTION, payload: id });
};
