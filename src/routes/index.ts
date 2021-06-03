
import express, { Router } from 'express';
import routerV1 from "./v1";

const router = Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use('/v1', routerV1);

export default router;