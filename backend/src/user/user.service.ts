import { UserModel, IUser } from './user.model';

export const createUser = async (userData: Partial<IUser>) => {
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
    // Optionally, you can throw an error if no users exist:
    // if (users.length === 0) throw new Error('No users found');
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