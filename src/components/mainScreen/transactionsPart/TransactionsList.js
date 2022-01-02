import React, {useContext} from "react";
import TransactionItem from "./TransactionItem";
import {transactionService} from "../../../service/transactionService.tsx";
import {categoryService} from "../../../service/categoryService.tsx";

const TransactionsList = () => {
    const obj = useContext(categoryService);

    return (
        <TransactionItem props={obj}/>
    );
};

export default TransactionsList;
