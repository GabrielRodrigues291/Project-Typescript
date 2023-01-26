import { Router } from "express"

import controller from "../controller/controller"

const routers = Router()

routers.get("/users", controller.index())

export default routers
