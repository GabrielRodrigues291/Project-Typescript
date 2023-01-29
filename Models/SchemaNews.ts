import { Schema, model } from "mongoose"

const Usuarios = new Schema({
  email: {
    type: String,
  },
  senha: {
    type: String,
  },
  login: {
    type: String,
  },
  id: {
    type: Number,
  },
})

export default model("usuarios", Usuarios)
