import express, { json } from "express"
import mongoose from "mongoose"
import cors from "cors"
import routers from "../src/routes"
class app {
  public express: express.Application

  constructor() {
    this.express = express()
    this.conectDatabase()
    this.middwares()
    this.router()
  }

  private conectDatabase(): void {
    mongoose
      .connect("mongodb://localhost:27017/noticias")
      .then(() => {
        console.log("Conection Sucessfull")
      })
      .catch(e => console.log("Erro Connect: " + e))
  }

  private middwares(): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private router() {
    this.express.use(routers)
  }
}

export default new app().express
