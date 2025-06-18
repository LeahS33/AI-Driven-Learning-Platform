import { CategoryModel, ISubCategory, SubCategoryModel } from "../models";
import { BaseService } from "./generic-base-service";

class SubCategoryService extends BaseService<ISubCategory> {

    async getSubCategoriesByCategoryId(categoryId: string) {
        const subCategories = await this.model.find({ category_id: categoryId });
        if (!subCategories || subCategories.length === 0) {
            throw new Error('No sub-categories found for this category');
        }
        return subCategories;
    }

    async createSubCategory(subCategoryData: Partial<ISubCategory>) {
        if (!subCategoryData.name || !subCategoryData.category_id) {
            throw new Error('Sub-category name and category ID are required');
        }
        const categoryExists = await CategoryModel.exists({_id: subCategoryData.category_id });
        if (!categoryExists) {
            throw new Error('Category with this ID does not exist');
        }
        const existingSubCategory = await this.model.exists({ name: subCategoryData.name, category_id: subCategoryData.category_id });
        if (existingSubCategory) {
            throw new Error('Sub-category with this name already exists in the specified category');
        }
        return super.create(subCategoryData);
    }

}

export const subCategoryService = new SubCategoryService(SubCategoryModel);