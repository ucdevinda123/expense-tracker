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
     let lists = state.data.filter((transitem) => {
        /*Filtering out result*/
        return transitem.id != payload;
      });
      return {
        ...state,
        data: lists,
      };

    default:
      return state;
  }
};
