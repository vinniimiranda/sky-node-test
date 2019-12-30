import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
  telefones: Array,
  token: String,
  ultimo_login: {
    type: Date,
    default: Date.now
  },
  data_criacao: {
    type: Date,
    default: Date.now
  },
  data_atualizacao: {
    type: Date,
    default: Date.now
  }
})

const UserModel = mongoose.model('User', UserSchema)

export default UserModel
