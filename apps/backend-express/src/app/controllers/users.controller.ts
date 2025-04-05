import { Request } from 'express';
import { Response } from 'express';
import { BaseController } from './base.controller';
import { userService } from '../services';

export class UsersController extends BaseController {
  public getUsers = async (req: Request, res: Response) => {
    try {
      const users = await userService.getUsers();
      this.success(res, { data: users });
    } catch {
      this.error(res, 'Failed to fetch users');
    }
  };
}
