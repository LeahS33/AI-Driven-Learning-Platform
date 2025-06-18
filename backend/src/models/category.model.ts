import mongoose, { Document, Schema, Types } from 'mongoose';

export interface ICategory extends Document {
    _id: Types.ObjectId;
    name: string;
}

const CategorySchema = new Schema<ICategory>({
    name: { type: String, required: true, unique: true },
});

export const CategoryModel = mongoose.model<ICategory>('Category', CategorySchema);