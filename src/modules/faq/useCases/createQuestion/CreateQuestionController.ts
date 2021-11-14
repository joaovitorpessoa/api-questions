import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateQuestionUseCase } from "./CreateQuestionUseCase";

class CreateQuestionController {
  async handle(request: Request, response: Response) {
    const { title, description } = request.body;

    const createQuestionUseCase = container.resolve(CreateQuestionUseCase);

    await createQuestionUseCase.execute({ title, description });

    return response.status(201).send();
  }
}

export { CreateQuestionController };
