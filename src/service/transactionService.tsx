import TransactionInterface from "../interface/transaction.interface";
import * as React from "react";
import {createContext, useReducer} from "react";

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            return {
                ...state,
                categories: [...state.categories, action.payload],
            };
        default:
            return state;
    }
};

/** list of initial transactions */
const initStateTransaction = {
    transactions: [
        {id: 1, label: 'Salary', category: 1, amount: 3000, date: '12.12.2001'},
        {id: 2, label: 'Bar', category: 4, amount: -30, date: '13.12.2001'},
        {id: 3, label: 'Go to store', category: 3, amount: -50, date: '14.12.2001'},
        {id: 4, label: 'Travel to Rome', category: 5, amount: -300, date: '15.12.2001'},
        {id: 5, label: 'Present to mom', category: 2, amount: -40, date: '16.12.2001'},
    ],

};

export const transactionService = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initStateTransaction);

    return (
        <transactionService.Provider value={{
            transactions: state.transactions,
            dispatch
        }}>
            {props.children}
        </transactionService.Provider>
    )
};
