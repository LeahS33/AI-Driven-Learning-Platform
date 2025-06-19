// import { Response, NextFunction } from 'express';
// import { UserModel,IUser } from '../models/user.model';
// import { Request } from '../types'

// export const authenticateUser = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
//     try {
//         const userId = req.headers['user-id'];
//         if (!userId) {
//             res.status(401).json({ message: 'No authentication credentials' });
//             return;
//         }

//         const user = await UserModel.findById(userId);
//         if (!user) {
//             res.status(401).json({ message: 'User not found' });
//             return 
//         }
//         req.user = user;
//         next();
//     } catch (error) {
//         console.error('Authentication error:', error);
//         res.status(401).json({ message: 'Authentication failed' });
//         return;
//     }
// };