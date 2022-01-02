import CategoryInterface from "../interface/category.interface";
import * as React from "react";
import {createContext, useReducer} from "react";

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            return {
                ...state,
                categories: [...state.categories, action.payload],
            };
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload],
            };
        case 'DELETE_CATEGORY':
            return {
                ...state,
                categories: state.categories.filter(el => {
                    return el.id !== action.payload;
                })
            };
        default:
            return state;
    }
};

/** list of initial categories of spends*/
const initStateCategory = {
    categories: [
        {id: 1, label: 'Salary'},
        {id: 2, label: 'Gifts'},
        {id: 3, label: 'Food'},
        {id: 4, label: 'Going out'},
        {id: 5, label: 'Travelling'}
        ],

    transactions: [
        {id: 1, label: 'Salary', category: 1, amount: 3000, date: '12.12.2001'},
        {id: 2, label: 'Bar', category: 4, amount: -100, date: '13.12.2001'},
        {id: 3, label: 'Bar', category: 4, amount: -200, date: '13.12.2001'},
        {id: 4, label: 'Bar', category: 4, amount: -300, date: '13.12.2001'},
        {id: 5, label: 'Go to store', category: 3, amount: -100, date: '14.12.2001'},
        {id: 6, label: 'Travel to Rome', category: 5, amount: -1000, date: '15.12.2001'},
        {id: 7, label: 'Travel to Rome', category: 5, amount: -2100, date: '15.12.2001'},
        {id: 8, label: 'Travel to Rome', category: 5, amount: -1010, date: '15.12.2001'},
        {id: 9, label: 'Present to mom', category: 2, amount: -1800, date: '16.12.2001'},
        {id: 10, label: 'Present to mom', category: 2, amount: -9100, date: '16.12.2001'},
    ],
};

export const categoryService = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initStateCategory);

    return (
        <categoryService.Provider value={{
            categories: state.categories,
            transactions: state.transactions,
            dispatch
        }}>
            {props.children}
        </categoryService.Provider>
    )
};
