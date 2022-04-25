import { Request,Response } from "express";
import testsService from "../services/testsService.js";

export async function getDisciplinesByTerms(req:Request, res:Response){
   const discipline = await testsService.getDisciplinesByDisciplines();
   res.status(200).send(discipline);
}

export async function getTestsByTeachers(req:Request, res:Response){
   const discipline = await testsService.getTestsByTeachers();
   res.status(200).send(discipline);
}