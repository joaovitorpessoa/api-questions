import { ICreateQuestionDTO } from "../DTOs";
import { Question } from "../entities";

interface IQuestionsRepository {
  create({ title, description }: ICreateQuestionDTO): Promise<void>;
  list(): Promise<Question[]>;
  findByTitle(title: string): Promise<Question>;
  findById(id: number): Promise<Question>;
  update(question: Question): Promise<void>;
  delete(question: Question): Promise<void>;
}

export { IQuestionsRepository };
