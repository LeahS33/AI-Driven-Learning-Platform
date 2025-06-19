import { UserModel, IUser } from '../models/user.model';
import { BaseService } from './generic-base-service';

class UserService extends BaseService<IUser> {

    private isValidPhone = (phone: string) => {
        //Israeli phone number (10 digits, starts with 05) 
        return /^05\d{8}$/.test(phone);
    };

    async createUser(userData: Partial<IUser>) {
        if (!userData.phone || !this.isValidPhone(userData.phone)) {
            throw new Error('Invalid phone number');
        }
        const existingUser = await this.model.exists({ phone: userData.phone });
        if (existingUser) {
            throw new Error('User with this phone already exists');
        }
        return super.create(userData);
    };

    async loginUser(phone: string, name: string) {
        const user = await this.model.findOne({ phone });
        if (!user) {
            throw new Error('User not found');
        }
        if (user.name !== name) {
            throw new Error('Invalid credentials');
        }
        return user;
    };

    async giveAdminAccess(userId: string) {
        const user = await this.model.findByIdAndUpdate(
            userId,
            { isAdmin: true },
            { new: true }
        );
        if (!user) throw new Error('User not found');
        return user;
    }

}
export const userService = new UserService(UserModel);




