import { getRepository, Repository } from "typeorm";

import { ICreateQuestionDTO } from "../../DTOs";
import { Question } from "../../entities";
import { IQuestionsRepository } from "../../repositories";

class QuestionsRepository implements IQuestionsRepository {
  private repository: Repository<Question> = getRepository(Question);

  async create({ title, description }: ICreateQuestionDTO): Promise<void> {
    const question = this.repository.create({ title, description });

    await this.repository.save(question);
  }

  async list(): Promise<Question[]> {
    return await this.repository.find();
  }

  async findByTitle(title: string): Promise<Question> {
    const question = await this.repository.findOne({ where: { title } });

    if (question) {
      return question;
    }
  }

  async findById(id: number): Promise<Question> {
    const question = await this.repository.findOne({ where: { id } });

    if (question) {
      return question;
    }
  }

  async update(question: Question): Promise<void> {
    question.updated_at = new Date();

    await this.repository.save(question);
  }

  async delete(question: Question): Promise<void> {
    await this.repository.remove(question);
  }
}

export { QuestionsRepository };
