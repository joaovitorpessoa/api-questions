"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var faq_routes_1 = require("./faq.routes");
var routes = (0, express_1.Router)();
exports.routes = routes;
routes.use("/faq", faq_routes_1.faqRoutes);
