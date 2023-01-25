import express, { json } from "express"
// import mongoose from "mongoose"
import cors from "cors"

class app {
  public express: express.Application

  constructor() {
    this.express = express()
    this.conectDatabase()
    this.middwares()
    this.router()
  }

  private conectDatabase(): void {
    // mongoose.connect("")
  }

  private middwares(): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private router() {
    this.express.get("", (req, res) => {
      return res.send(JSON.stringify({ message: "Hellow Hord" }))
    })
  }
}

export default new app().express
