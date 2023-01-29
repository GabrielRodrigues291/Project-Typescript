import { json, Request, Response } from "express"
import SchemaNews from "../Models/SchemaNews"

class controllerNews {
  async Cadastrar(req: Request, res: Response) {
    const { login, email, senha, id } = req.body

    try {
      const userExist = await SchemaNews.findOne({ email })

      if (userExist) {
        return res.status(400).json({
          error: "Ops Usuario Existente",
        })
      }

      const user = SchemaNews.create({
        email,
        senha,
        login,
        id,
      })

      return res.json({
        Message: "Usuario Cadastrado com Sucesso",
        user: { login: login, senha: senha, email: email },
      })
    } catch (error) {
      return res.status(500).send({
        error: "Erro de Cadastro de Usuario",
        message: error,
      })
    }
  }

  async getId(req: Request, res: Response) {
    const { id } = req.body

    console.log(id)
  }
}

export default new controllerNews()
