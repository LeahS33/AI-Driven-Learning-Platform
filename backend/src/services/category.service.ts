import { ICategory, CategoryModel } from "../models";
import { BaseService } from "./generic-base-service";

class CategoryService extends BaseService<ICategory> {

    async createCategory(categoryData: Partial<ICategory>) {
        if (!categoryData.name) {
            throw new Error('Category name is required');
        }
        const existingCategory = await this.model.exists({ name: categoryData.name });
        if (existingCategory) {
            throw new Error('Category with this name already exists');
        }
        return super.create(categoryData);
    }

    async getAllCategories() {
        const categories = await this.model.find({});
        if (!categories || categories.length === 0) {
            throw new Error('No categories found');
        }
        return categories;
    }

}
export const categoryService = new CategoryService(CategoryModel);