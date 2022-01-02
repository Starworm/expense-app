import React, {useContext, useState} from "react";
import Select from "react-select/";
import {categoryService} from "../../../service/categoryService.tsx";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './AddTransactionItem.module.scss';

const AddTransactionItem = () => {

    const {dispatch} = useContext(categoryService);

    const [label, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');

    const {categories} = useContext(categoryService);

    const options = categories;

    const onSubmit = (event) => {
        event.preventDefault();
        const transaction = {
            id: Math.ceil(Math.random() * 1000),
            label: label,
            category: category.id,
            amount: Number(amount),
            date: new Date(date).toLocaleDateString()
        };

        console.log(transaction);
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });

        setName('');
        setAmount('');
        setDate('');
        setCategory({});
    };

    return (
        <form onSubmit={onSubmit}>
            <div className='row d-flex flex-row align-items-center'>
                <div className='d-flex'>
                    <div className='w-100'>
                        <label htmlFor='transName'>Transaction's name</label>
                        <div className='col-11'>
                            <input
                                type="text"
                                className='form-control'
                                id='transName'
                                value={label}
                                onChange={(event) => setName(event.target.value)}/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='amount'>Amount</label>
                        <div className='col-sm'>
                            <input
                                type="number"
                                className='form-control'
                                id='amount'
                                value={amount}
                                onChange={(event) => setAmount(event.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className='d-flex align-items-end'>
                    <div className='w-50'>
                        <label htmlFor='date'>Date</label>
                        <div className='col-7'>
                            <DatePicker className={styles.dateField}
                                selected={date}
                                        onChange={(date) => setDate(date)}/>
                        </div>
                    </div>
                    <div className='w-50'>
                        <label htmlFor='category'>Category</label>
                        <div className='col-11'>
                            <Select
                                options={options}
                                id='category'
                                onChange={setCategory}/>
                        </div>
                    </div>
                    <div className='col-sm'>
                        <button type='submit' className='btn btn-primary'>Add</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddTransactionItem;
