import { injectable, inject } from "tsyringe";

import { AppError } from "../../../../shared/errors";
import { Question } from "../../entities";
import { IQuestionsRepository } from "../../repositories";

interface IRequest {
  id: number;
  newTitle: string;
  newDescription: string;
}

@injectable()
class UpdateQuestionUseCase {
  constructor(
    @inject("QuestionsRepository")
    private questionsRepository: IQuestionsRepository
  ) {}

  async execute({ id, newDescription, newTitle }: IRequest): Promise<void> {
    const question = await this.questionsRepository.findById(id);

    if (!question) {
      throw new AppError("There is no question registered with the entered id!");
    }

    if (newDescription) {
      question.description = newDescription;
    }

    if (newTitle) {
      question.title = newTitle;
    }

    await this.questionsRepository.update(question);
  }
}

export { UpdateQuestionUseCase };
