import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateQuestionUseCase } from "./UpdateQuestionUseCase";

class UpdateQuestionController {
  async handle(request: Request, response: Response) {
    const { id, newTitle, newDescription } = request.body;

    const updateQuestionUseCase = container.resolve(UpdateQuestionUseCase);

    await updateQuestionUseCase.execute({ id, newTitle, newDescription });

    return response.status(204).send();
  }
}

export { UpdateQuestionController };
