import { Router } from 'express';

const router = Router();

/**
 * @path: /
 * @method: GET
 * @params:
 * @return: Render - status(200 OK)
*/
router.get('/', async (req, res) => {
  res.json({ message: "API Init" });
});

export default router;