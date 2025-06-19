import { UserModel } from '../models';
import mongoose from 'mongoose';

const seedSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    executed: { type: Boolean, default: false },
    executedAt: { type: Date }
});

const SeedModel = mongoose.model('Seed', seedSchema);

export const seedAdmin = async () => {
    try {
        const adminSeed = await SeedModel.findOne({ name: 'admin-seed' });
        if (adminSeed?.executed) {
            // console.log('Admin seed already executed');
            return;
        }

        const adminExists = await UserModel.exists({ isAdmin: true });
        
        if (!adminExists) {
            await UserModel.create({
                name: "Leah Stein",
                phone: "0583219757",
                isAdmin: true
            });
            console.log('✅ Admin user seeded successfully');
        }
        await SeedModel.findOneAndUpdate(
            { name: 'admin-seed' },
            { executed: true, executedAt: new Date() },
            { upsert: true }
        );

    } catch (error) {
        console.error('Error seeding admin:', error);
    }
};