import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send(JSON.stringify({ message: 'Hello this is user route' }));
});

export default router;