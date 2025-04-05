import { Router } from 'express';
import { usersController } from '../controllers';

const router = Router();

router.get('/', usersController.getUsers);

export default router;
