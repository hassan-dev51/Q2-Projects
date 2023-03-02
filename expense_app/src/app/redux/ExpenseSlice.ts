import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExpenseState {
  balance: number;
  incomes: number;
  expense: number;
  expenseHistory: {
    text: string;
    amount: number;
    time: string;
  }[];
}
export interface Exp {
  text: string;
  amount: number;
  time: string;
}
const initialState: ExpenseState = {
  balance: 0,
  incomes: 0,
  expense: 0,
  expenseHistory: [],
};

export const ExpenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    //this function will get the transaction and amount and will save into the array
    addTransaction: (state, action: PayloadAction<Exp>) => {
      state.expenseHistory.push({
        text: action.payload.text,
        amount: Number(action.payload.amount),
        time: action.payload.time,
      });
    },
    //this function will sum the amount
    calculateBalance: (state) => {
      state.balance = state.expenseHistory.reduce(
        (acc, item) => acc + item.amount,
        0
      );
    },
    //this function will get the expense
    calculateExpense: (state) => {
      state.expense = state.expenseHistory.reduce((acc, item) => {
        if (item.amount < 0) {
          return Math.abs(acc - item.amount);
        }
        return acc;
      }, 0);
    },
    //this function will get the income
    calculateIncome: (state) => {
      state.incomes = state.expenseHistory.reduce((acc, item) => {
        if (item.amount > 0) {
          return Math.abs(acc + item.amount);
        }
        return acc;
      }, 0);
    },
    //this functio will delete the item
    deleteItem: (state, action) => {
      state.expenseHistory = state.expenseHistory.filter(
        (ex) => ex.time != action.payload
      );
    },
  },
});

export const {
  calculateBalance,
  addTransaction,
  calculateExpense,
  calculateIncome,
  deleteItem,
} = ExpenseSlice.actions;

export default ExpenseSlice.reducer;
