import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IUser extends Document {
    _id: Types.ObjectId;
    name: string;
    phone: string;
}

const UserSchema = new Schema<IUser>({
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
});

export const UserModel = mongoose.model<IUser>('User', UserSchema);