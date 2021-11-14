import { injectable, inject } from "tsyringe";

import { AppError } from "../../../../shared/errors";
import { IQuestionsRepository } from "../../repositories";

@injectable()
class DeleteQuestionUseCase {
  constructor(
    @inject("QuestionsRepository")
    private questionsRepository: IQuestionsRepository
  ) {}

  async execute(id: number): Promise<void> {
    const question = await this.questionsRepository.findById(id);

    if (!question) {
      throw new AppError("There is no question registered with the entered id!");
    }

    await this.questionsRepository.delete(question);
  }
}

export { DeleteQuestionUseCase };
