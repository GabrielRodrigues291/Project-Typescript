import { Schema, model } from "mongoose"

const News = new Schema({
  titulo: String,
  datePublic: Date,
  description: String,
})

export default model("Noticias", News)
