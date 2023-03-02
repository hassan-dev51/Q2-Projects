"use client";
import React, { MouseEventHandler } from "react";

import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import moment from "moment";
import { useFormik } from "formik";

import { Inter } from "next/font/google";
import {
  TransactionSchema,
  useAppDispatch,
  useAppSelector,
} from "../utils/contants";
import {
  addTransaction,
  calculateBalance,
  calculateExpense,
  calculateIncome,
  deleteItem,
} from "../redux/ExpenseSlice";

const inter = Inter({ subsets: ["latin"] });

interface MyFormValue {
  text: string;
  amount: number;
  time: string;
}

const initialValues: MyFormValue = {
  text: "",
  amount: 0,
  time: moment().format("MMMM Do YYYY, h : mm : ss a"),
};

const Home: React.FC = () => {
  const { balance, expense, incomes, expenseHistory } = useAppSelector(
    (state) => state.expense
  );
  //this line will send data to the addtransaction function
  const dispatch = useAppDispatch();

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: TransactionSchema,
      onSubmit: (values, { resetForm }) => {
        const newEntry = {
          text: values.text,
          amount: values.amount,
          time: moment().format("MMMM Do YYYY, h : mm : ss a"),
        };
        dispatch(addTransaction(newEntry));
        dispatch(calculateBalance());
        dispatch(calculateExpense());
        dispatch(calculateIncome());
        resetForm();
        console.log(expenseHistory);
      },
    });

  const deleteEntry = (time: string) => {
    dispatch(deleteItem(time));
    dispatch(calculateBalance());
    dispatch(calculateExpense());
    dispatch(calculateIncome());
  };
  const data = {
    labels: ["Total Balance", "Expense", "Income"],
    datasets: [
      {
        data: [balance, expense, incomes],
        backgroundColor: ["blue", "red", "green"],
      },
    ],
  };

  return (
    <div className="px-6 flex justify-evenly items-center md:flex-row flex-col">
      <div>
        <h1
          className={`text-2xl md:text-4xl ${inter.className} font-bold py-5 text-center uppercase text-gray-400`}
        >
          Expense Tracker App
        </h1>
        <div className="px-3 text-xl font-semibold text-blue-600">
          <h2>Total Balance</h2>
          <span>${balance}</span>
        </div>
        <section className="py-6 grid grid-cols-2">
          <div className="border-r-4 border-gray-400 text-center text-xl font-semibold text-green-600">
            <h2>Income</h2>
            <span>${incomes}</span>
          </div>
          <div className="text-center text-xl font-semibold text-red-600">
            <h2>Expense</h2>
            <span>${expense}</span>
          </div>
        </section>
        <section>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                name="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 outline-none block w-full p-3"
                placeholder="Add Transaction"
                autoComplete="off"
                value={values.text}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.text && touched.text ? (
                <p className="text-sm text-red-600 font-semibold">
                  {" "}
                  {errors.text}
                </p>
              ) : null}
              <input
                type="number"
                name="amount"
                id="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 outline-none block w-full p-3"
                placeholder="Add Amount"
                value={values.amount}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.amount && touched.amount ? (
                <p className="text-sm text-red-600 font-semibold">
                  {errors.amount}
                </p>
              ) : null}
            </div>
            <div className="py-6 text-center text-3xl">
              <h3>Use (-) sign for Expense</h3>
            </div>
            <div>
              <button
                type="submit"
                className=" text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-6 outline-none"
              >
                Add Transaction
              </button>
            </div>
          </form>
        </section>
      </div>
      <div className="py-6">
        <section className="w-[350px] m-auto">
          <Doughnut data={data} />
        </section>
        <section className="h-[300px] overflow-y-scroll">
          {expenseHistory.length == 0
            ? "No Transaction"
            : expenseHistory.map((transaction, index) => (
                <div key={index}>
                  <li
                    className={`list-none bg-[#FCFCFC] p-2 border-l-4 ${
                      transaction.amount < 0
                        ? "border-red-700"
                        : "border-green-700"
                    }  m-4 cursor-pointer`}
                    title="Delete"
                    onDoubleClick={() => deleteEntry(transaction.time)}
                  >
                    <div>
                      <div className="flex justify-between">
                        <span>{transaction.text}</span>
                        <span>{`$ ${transaction.amount}`}</span>
                      </div>
                      <div className="text-end mt-3">
                        <span>{transaction.time}</span>
                      </div>
                    </div>
                  </li>
                </div>
              ))}
          <h3 className="text-xl font-semibold text-red-600 text-center">
            Double Click to Delete the Entry
          </h3>
        </section>
      </div>
    </div>
  );
};

export default Home;
