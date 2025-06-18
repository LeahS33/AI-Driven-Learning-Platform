import { UserModel, IUser } from '../models/user.model';

const isValidPhone = (phone: string) => {
    //Israeli phone number (10 digits, starts with 05)
    return /^05\d{8}$/.test(phone);
};

export const createUser = async (userData: Partial<IUser>) => {
    if (!userData.phone || !isValidPhone(userData.phone)) {
        throw new Error('Invalid phone number');
    }
    const existingUser = await UserModel.exists({ phone: userData.phone });
    if (existingUser) {
        throw new Error('User with this phone already exists');
    }
    return UserModel.create(userData);
};

export const getUserById = async (id: string) => {
    const user = await UserModel.findById(id);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

export const getAllUsers = async () => {
    const users = await UserModel.find();
    return users;
};

export const updateUser = async (id: string, update: Partial<IUser>) => {
    const user = await UserModel.findByIdAndUpdate(id, update, { new: true });
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

export const deleteUser = async (id: string) => {
    const user = await UserModel.findByIdAndDelete(id);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

