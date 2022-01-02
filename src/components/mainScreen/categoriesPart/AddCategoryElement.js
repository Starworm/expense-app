import React, {useContext, useState} from "react";
import { categoryService } from "../../../service/categoryService.tsx";

const AddCategoryElement = () => {

    const { dispatch } = useContext(categoryService);

    const [label, setName] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        const category = {
            id: Math.ceil(Math.random() * 1000),
            label: label,
        };

        dispatch({
            type: 'ADD_CATEGORY',
            payload: category
        });

        setName('');
    };

    return (
        <form onSubmit={onSubmit}>
            <div className='row d-flex flex-row align-items-center'>
                <label htmlFor='catName'>Category's name</label>
                <div className='col-sm'>
                    <input
                        type="text"
                        className='form-control'
                        id='catName'
                        value={label}
                        onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary'>Add</button>
                </div>
            </div>
        </form>
    );
};

export default AddCategoryElement;
