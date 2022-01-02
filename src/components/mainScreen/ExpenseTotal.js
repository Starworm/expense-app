import React, {useContext} from "react";
import {categoryService} from "../../service/categoryService.tsx";

const ExpenseTotal = () => {

    const {transactions} = useContext(categoryService);

    const total = transactions.reduce((total, item) => {
        return total += item.amount;
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Current balance: ${total}</span>
        </div>
    );
};

export default ExpenseTotal;
