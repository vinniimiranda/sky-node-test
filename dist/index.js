"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const PORT = process.env.PORT || 3000;
const server = server_1.default;
try {
    server.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
}
catch (error) {
    console.log("Couldn't start the server, error:", error);
}
