import express, { Router } from 'express';
import {
    addCity,
    getCity
} from '../../controllers/Cities/index';

const router: Router = Router();

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.post('/cities/new', addCity);
router.get('/cities/:cityId', getCity);

export default router;
