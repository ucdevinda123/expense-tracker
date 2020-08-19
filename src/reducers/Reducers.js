import {
  ADD_TRANSACTION,
  REMOVE_TRANSACTION,
} from "../actions/ExpenseTrackerActionTypes";

const initialState = {
  data: [],
};

export const ExpenseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        data: [...state.data, payload],
      };

    case REMOVE_TRANSACTION:
      return {
        /*Filtering out result*/
        ...state,
        data: state.data.filter((transaction) => {
          transaction.id != payload;
          console.log(payload);
        }),
      };

    default:
      return state;
  }
};
