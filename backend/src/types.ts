import { IUser } from './models/user.model';
import { Request as ExpressRequest } from 'express';

export interface RequestWithUser extends ExpressRequest {
    user?: IUser;
}

export type Request = RequestWithUser;