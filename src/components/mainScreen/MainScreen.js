import React from "react";
import ExpenseTotal from "./ExpenseTotal";
import CategoriesList from "./categoriesPart/CategoriesList";
import AddCategoryElement from "./categoriesPart/AddCategoryElement";
import TransactionsList from "./transactionsPart/TransactionsList";
import AddTransactionItem from "./transactionsPart/AddTransactionItem";

const MainScreen = () => {
    return (
        <div>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <ExpenseTotal />
                </div>
            </div>
            <div>
                <div className='row mt-2'>
                    <div className='col-sm'>
                        <h3>Transactions</h3>
                        <div>
                            <TransactionsList/>
                        </div>
                        <hr/>
                        <h5>Add transaction</h5>
                        <div className='mt-3'>
                            <div className='col-sm mb-5'>
                                <AddTransactionItem />
                            </div>
                        </div>
                    </div>
                    <div className='col-sm'>
                        <h3>Categories</h3>
                        <div>
                            <CategoriesList/>
                        </div>
                        <hr/>
                        <h5>Add category</h5>
                        <div className='mt-3'>
                            <div className='col-sm'>
                                <AddCategoryElement />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainScreen;
