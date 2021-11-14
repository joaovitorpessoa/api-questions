import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors";
import { IQuestionsRepository } from "../../repositories";

interface IRequest {
  title: string;
  description: string;
}

@injectable()
class CreateQuestionUseCase {
  constructor(
    @inject("QuestionsRepository")
    private questionsRepository: IQuestionsRepository
  ) {}

  async execute({ title, description }: IRequest): Promise<void> {
    const questionAlreadyExists = await this.questionsRepository.findByTitle(
      title
    );

    if (questionAlreadyExists) {
      throw new AppError("Question already exists!");
    }

    await this.questionsRepository.create({ title, description });
  }
}

export { CreateQuestionUseCase };
