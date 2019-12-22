import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  nome: String,
  email: String,
  senha: String,
  telefones: Array,
  ultimo_login: Date,
  data_criacao: {
    type: Date,
    default: Date.now
  },
  data_atualizacao: {
    type: Date,
    default: Date.now
  }
})

const UserModel = model('User', UserSchema)

export default UserModel
