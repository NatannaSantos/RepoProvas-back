import testRepository from "../repositories/testRepository.js";

async function getDisciplinesByDisciplines(){
    const disciplinebyterms = await testRepository.getDisciplinesByTerms(); 

   return(disciplinebyterms);
}

async function getTestsByTeachers(){
    const disciplinebyteacher=await testRepository.getTestsByTeachers();
    return(disciplinebyteacher);
}

export default{
    getDisciplinesByDisciplines,
    getTestsByTeachers
}