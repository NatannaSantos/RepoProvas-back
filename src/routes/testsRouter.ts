import Router from "express";
import * as testController from '../controllers/testController.js';


const testsRouter = Router();

testsRouter.get("/tests/terms/", testController.getDisciplinesByTerms);
testsRouter.get("/tests/teacher", testController.getTestsByTeachers);
testsRouter.get("/tests/categories",testController.getCategories);
testsRouter.get("/tests/terms/term/",testController.getDisciplinesByTermsByParams);

export default testsRouter;



