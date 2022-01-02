import React from "react";

const TransactionItem = (props) => {

    const transactions = props.props.transactions;
    const categories = props.props.categories;

    transactions.forEach(el => {
        if(typeof el.category === 'number') {
            el.category = categories.filter(cat => {
                return cat.id === el.category;
            })[0]['label'];
        }
    });

    return (
        <table className='table'>
            <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
                <th scope="col">Category</th>
            </tr>
            </thead>
            <tbody>
            {transactions.map((el) => (
                <tr key={el.id}>
                    <th scope="row">{el.label}</th>
                    <td scope="row">{el.amount}</td>
                    <td scope="row">{el.date}</td>
                    <td scope="row">{el.category}</td>
                </tr>)
            )}
            </tbody>
        </table>
    );
};

export default TransactionItem;
