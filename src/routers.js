import { Router } from "express"

import controller from "../controller/controllerNews"

const routers = Router()

routers.get("/Cadastrar", controller.Cadastrar)
routers.get("/alterar/:id", controller.getId)

export default routers
