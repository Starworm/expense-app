import React, {useContext} from "react";
import styles from './CategoryItem.module.scss'
import {categoryService} from "../../../service/categoryService.tsx";

const CategoryItem = (props) => {

    const {dispatch} = useContext(categoryService);

    const deleteCategory = () => {
        dispatch({
            type: 'DELETE_CATEGORY',
            payload: props.id
        })
    };

    return (
        <div className='d-flex align-items-center p-1'>
            <li className='list-group-item d-flex'>
                {props.label}
            </li>
            <span
                className={'btn btn-danger ' + styles.pl5}
            onClick={deleteCategory}>X</span>
        </div>
    );
};

export default CategoryItem;
