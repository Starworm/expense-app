import React, { useContext } from "react";
import CategoryItem from "./CategoryItem";
import { categoryService } from "../../../service/categoryService.tsx";

const CategoriesList = () => {

    const { categories } = useContext(categoryService);

    return (
        <ul className='list-group d-flex flex-wrap justify-content-start flex-row'>
            {categories.map((category) =>
                <CategoryItem
                    id={category.id}
                    label={category.label}
                    key={category.id}/>
            )}
        </ul>
    );
};

export default CategoriesList;
