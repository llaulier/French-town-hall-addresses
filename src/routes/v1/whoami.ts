import { Router } from 'express';
import {sendWhoAmI} from '../../controllers/getWhoAmI';

const router: Router = Router();

router.get('/whoaim', sendWhoAmI);

export default router;