import { Response, NextFunction } from 'express';
import { IUser } from '../models';
import { Request } from '../types';
        
export const isAdmin = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const user = req.user as IUser;
        if (!user || !user.isAdmin) {
            res.status(403).json({ error: 'Access denied: Admin only' });
            return
        }
        next();
    } catch (error) {
        res.status(401).json({ error: 'Unauthorized' });
    }
};