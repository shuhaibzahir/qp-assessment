import { Request, Response } from 'express';

export interface AuthenticatedRequest extends Request {
    user?: {
        userId: string; 
        username: string;
        isAdmin: boolean;
    }
}

export interface cartItem {
    userId: string;
    items?: any[];
}

export interface User {
    id: string;
    username: string;
    password: number;
    isAdmin?: boolean;
  }
  

export interface UserPayload {
    username: string;
    userId: string;
    isAdmin: boolean;
  }