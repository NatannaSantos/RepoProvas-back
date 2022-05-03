import { Request,Response } from "express";
import testsService from "../services/testsService.js";

export async function getDisciplinesByTerms(req:Request, res:Response){
  
  
   const discipline = await testsService.getDisciplinesByDisciplines();
   res.status(200).send(discipline);
}

export async function getDisciplinesByTermsByParams(req:Request, res:Response){     
   const {disciplines} = req.query as {disciplines:string};
   console.log(disciplines);
   const disciplineByParams = await testsService.getDisciplinesByDisciplinesbyParams({disciplines: disciplines.split(",")});
   res.status(200).send(disciplineByParams);
}
export async function getTestsByTeachers(req:Request, res:Response){
   const discipline = await testsService.getTestsByTeachers();
   res.status(200).send(discipline);
}
// export async function getTestsByDisciplines(req:Request , res:Response){
//    const {discipline} = req.query as {discipline:string};
//    console.log(discipline);
   
//    const test= await testsService.getTestsByDisciplines({discipline: discipline.split(",")});
//    res.send(test);
// }

export async function getCategories(req:Request, res:Response){
   const category = await testsService.getCategories();
   res.status(200).send(category);
}

export async function getDiscipline(req:Request, res:Response){
   const discipline = await testsService.getDisciplines();
   res.status(200).send(discipline);
}
export async function countViews(req:Request, res:Response) {
   const {id} = req.params;
   const test = await testsService.findTestById(+id);
   if(!test){
      throw { type: "not_found" };
   }

   await testsService.countViews(+id);
   res.sendStatus(200);   
}