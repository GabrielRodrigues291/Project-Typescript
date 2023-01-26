import noticias from "../Models/SchemaNews"
import { Request, Response } from "express"

class controller {
  public async index(req: Request, res: Response): Promise<Response> {
    const noticia = await noticias.find()

    return res.json(noticia)
  }
}

export default new controller()
