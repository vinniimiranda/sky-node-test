"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    nome: String,
    email: String,
    senha: String,
    telefones: Array,
    data_criacao: {
        type: Date,
        default: Date.now
    },
    data_atualizacao: {
        type: Date,
        default: Date.now
    }
});
const UserModel = mongoose_1.model('User', UserSchema);
exports.default = UserModel;
