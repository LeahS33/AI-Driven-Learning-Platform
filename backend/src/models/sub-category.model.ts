import mongoose, { Document, Schema, Types } from 'mongoose';

export interface ISubCategory extends Document {
    _id: Types.ObjectId;
    name: string;
    category_id: Types.ObjectId;
}

const SubCategorySchema = new Schema<ISubCategory>({
    name: { type: String, required: true },
    category_id: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
});

export const SubCategoryModel = mongoose.model<ISubCategory>('SubCategory', SubCategorySchema);