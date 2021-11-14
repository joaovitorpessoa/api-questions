import { Router } from "express";

import { faqRoutes } from "./faq.routes";

const routes = Router();

routes.use("/faq", faqRoutes);

export { routes };
