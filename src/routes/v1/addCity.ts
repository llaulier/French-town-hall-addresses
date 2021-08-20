import { Router } from 'express';
import {addCity} from '../../controllers/Cities/addCity';

const router: Router = Router();

router.post('/newCity', addCity);

export default router;