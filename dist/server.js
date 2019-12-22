"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const mongoose_1 = __importDefault(require("mongoose"));
class AppServer {
    constructor() {
        this.server = express_1.default();
        this.database();
        this.middlewares();
        this.routes();
        this.excpetionHandling();
    }
    routes() {
        this.server.use(routes_1.default);
    }
    middlewares() {
        this.server.use(express_1.default.json());
    }
    database() {
        mongoose_1.default.connect('mongodb://localhost:27017/sky-node-test', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
    excpetionHandling() {
        this.server.use((err, req, res, next) => res.status(err.status).json({
            mensagem: 'mensagem de erro'
        }));
    }
}
exports.default = new AppServer().server;
