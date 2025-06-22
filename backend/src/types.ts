import { IUser } from './models/user.model';
import { Request as ExpressRequest } from 'express';
import { Types } from 'mongoose';

export interface RequestWithUser extends ExpressRequest {
    user?: IUser;
}

export interface IPopulatedPrompt {
    _id: Types.ObjectId;
    prompt: string;
    response: string;
    created_at: Date;
    user_id: {
        _id: Types.ObjectId;
        name: string;
    };
    category_id: {
        _id: Types.ObjectId;
        name: string;
    };
    sub_category_id: {
        _id: Types.ObjectId;
        name: string;
    };
    __v: number;
}

export interface TransformedPrompt {
    _id: Types.ObjectId | string;
    prompt: string;
    response: string;
    created_at: Date;
    user_name?: string;
    category_name: string;
    sub_category_name: string;
}

export type Request = RequestWithUser;