import { injectable, inject } from "tsyringe";

import { Question } from "../../entities";
import { IQuestionsRepository } from "../../repositories";

@injectable()
class ListQuestionsUseCase {
  constructor(
    @inject("QuestionsRepository")
    private questionsRepository: IQuestionsRepository
  ) {}

  async execute(): Promise<Question[]> {
    const allQuestions = await this.questionsRepository.list();
    
    return allQuestions;
  }
}

export { ListQuestionsUseCase };