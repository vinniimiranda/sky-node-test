"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Routes {
    constructor() {
        this.router = express_1.Router();
        this.router.get('/', (req, res) => res.status(200).json({
            root: 'Api root routes !!!'
        }));
    }
}
exports.default = new Routes().router;
