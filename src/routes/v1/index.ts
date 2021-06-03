import express, { Router } from "express"
import whoamiRoutes from "./whoami"
const router = Router()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.use(whoamiRoutes)

export default router