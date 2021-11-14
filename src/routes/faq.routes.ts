import { Router } from "express";

import { ListQuestionsController } from "../modules/faq/useCases/listQuestions";
import { CreateQuestionController } from "../modules/faq/useCases/createQuestion";
import { UpdateQuestionController } from "../modules/faq/useCases/updateQuestion";
import { DeleteQuestionController } from "../modules/faq/useCases/deleteQuestion";

const faqRoutes = Router();

const listQuestionsController = new ListQuestionsController();
const createQuestionController = new CreateQuestionController();
const updateQuestionController = new UpdateQuestionController();
const deleteQuestionController = new DeleteQuestionController();

faqRoutes.get("/", listQuestionsController.handle);
faqRoutes.post("/", createQuestionController.handle);
faqRoutes.put("/", updateQuestionController.handle);
faqRoutes.delete("/", deleteQuestionController.handle);

export { faqRoutes };
