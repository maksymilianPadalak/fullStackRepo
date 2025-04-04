import { Request, Response } from "express";
import { BaseController } from "./base.controller";

export class UserController extends BaseController {
    public getUsers = (req: Request, res: Response): void => {
        try {
            this.success(res, { message: 'Users fetched successfully' });
        } catch {
            this.error(res, 'Failed to fetch users');
        }
    }
}