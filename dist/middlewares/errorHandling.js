"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandling = void 0;
var errors_1 = require("../shared/errors");
function errorHandling(error, request, response, next) {
    if (error instanceof errors_1.AppError) {
        return response.status(error.statusCode).json({ message: error.message });
    }
    return response.status(500).json({
        message: "Internal server error - " + error.message,
    });
}
exports.errorHandling = errorHandling;
