import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IPrompt extends Document {
    _id: Types.ObjectId;
    user_id: Types.ObjectId;
    category_id: Types.ObjectId;
    sub_category_id: Types.ObjectId;
    prompt: string;
    response: string;
    created_at: Date;
}

const PromptSchema = new Schema<IPrompt>({
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    category_id: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    sub_category_id: { type: Schema.Types.ObjectId, ref: 'SubCategory', required: true },
    prompt: { type: String, required: true },
    response: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
});

export const PromptModel = mongoose.model<IPrompt>('Prompt', PromptSchema);