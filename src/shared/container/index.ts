import { container } from "tsyringe";

import {
  IQuestionsRepository,
  QuestionsRepository
} from "../../modules/faq/repositories";

container.registerSingleton<IQuestionsRepository>(
  "QuestionsRepository",
  QuestionsRepository
);