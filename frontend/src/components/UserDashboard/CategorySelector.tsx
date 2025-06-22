import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchCategories, fetchSubCategoriesForCategory } from "../../store/thunks/categoryThunk";
import type { ICategory, ISubCategory } from "../../types";
import { setCurrentCategory, setCurrentSubCategory } from "../../store/categorySlice";
import '../../styles/CaregorySelector.css';

const CategorySelector = () => {

    const dispatch = useAppDispatch();
    const categories = useAppSelector(state => state.category.categories);
    const subCategories = useAppSelector(state => state.category.currentSubCategories);
    const category = useAppSelector(state => state.category.currentCategory)
    const subCategory = useAppSelector(state => state.category.currentSubCategory)

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    useEffect(() => {
        if (category) {
            dispatch(fetchSubCategoriesForCategory(category));
        }
    }, [category, dispatch]);

    return (
        <div className="category-selector">
            <div className="form-group">
                <select
                    value={category ?? ""}
                    onChange={e => {
                        dispatch(setCurrentCategory(e.target.value));
                        dispatch(setCurrentSubCategory(""));
                    }}
                    required
                >
                    <option value="" disabled hidden>Select category</option>
                    {categories.map((cat: ICategory) => (
                        <option key={cat._id} value={cat._id}>{cat.name}</option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <select
                    value={subCategory ?? ""}
                    onChange={e => dispatch(setCurrentSubCategory(e.target.value))}
                    required
                    disabled={!category}
                >
                    <option value="" disabled hidden>Select sub category</option>
                    {subCategories
                        .filter((sub: ISubCategory) => sub.category_id === category)
                        .map((sub: ISubCategory) => (
                            <option key={sub._id} value={sub._id}>{sub.name}</option>
                        ))}
                </select>
            </div>
        </div>
    );
};

export default CategorySelector;