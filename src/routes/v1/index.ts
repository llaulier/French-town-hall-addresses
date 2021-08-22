import express, { Router } from "express"
import cityRoutes from "./city"
import whoamiRoutes from "./whoami"
const router = Router()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.use(whoamiRoutes)
router.use(cityRoutes)

export default router
