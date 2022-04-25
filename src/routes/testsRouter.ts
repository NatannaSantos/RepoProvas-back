import Router from "express";
import { getDisciplinesByTerms, getTestsByTeachers } from "../controllers/testController.js";


const testsRouter = Router();

testsRouter.get("/tests/terms",getDisciplinesByTerms);
testsRouter.get("/tests/teacher",getTestsByTeachers);

export default testsRouter;



