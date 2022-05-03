import  testRepository from "../repositories/testRepository.js";

export interface FilterParams {
    disciplines: string[];
  }

async function getDisciplinesByDisciplinesbyParams(filter: FilterParams){
    const disciplinebyterms = await testRepository.getDisciplinesByTermsParams(filter); 

   return(disciplinebyterms);
}
async function getDisciplinesByDisciplines(){
    const disciplinebyterms = await testRepository.getDisciplinesByTerms(); 

   return(disciplinebyterms);
}

async function getTestsByTeachers(){
    const disciplinebyteacher=await testRepository.getTestsByTeachers();
    return(disciplinebyteacher);
}
// export interface FilterParams {
//     discipline: string[];
//   }

// async function getTestsByDisciplines(filter:FilterParams){
  
    
//     const test= await testRepository.getTestsByDisciplines(filter);
//     console.log("test",test);
//     return test;

// }

async function getCategories(){
    const category = await testRepository.getCategories();
    return category
}

async function getDisciplines(){
    const discipline = await testRepository.getDisciplines();
    return discipline;
}

async function countViews(testId:number) {
    const views = await testRepository.countViews(testId);
    return views;
}

async function findTestById(testId:number){
    const test = await testRepository.findTestById(testId);
    return test;
}
export default{
    getDisciplinesByDisciplines,
    getTestsByTeachers,
    getCategories,
    getDisciplinesByDisciplinesbyParams,
    getDisciplines,
    countViews,
    findTestById
    }