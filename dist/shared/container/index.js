"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var repositories_1 = require("../../modules/faq/repositories");
tsyringe_1.container.registerSingleton("QuestionsRepository", repositories_1.QuestionsRepository);
