import { Router } from 'express';
import { userController } from '../controllers';

const router = Router();

router.get('/', (req, res) => {
    userController.getUsers(req, res);
});

export default router;