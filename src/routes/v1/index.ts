import express, { Router } from "express"
import addCity from "./addCity"
import whoamiRoutes from "./whoami"
const router = Router()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.use(whoamiRoutes)
router.use(addCity)

export default router