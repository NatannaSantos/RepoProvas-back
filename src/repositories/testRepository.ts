import { prisma } from "../database.js";

async function getDisciplinesByTerms() {


    return await prisma.term.findMany({
        select: {
            number: true,
            discipline: {
                select: {
                    id: true,
                    name: true,
                    teacherDiscipline: {
                        select: {
                            test: {
                                select: {
                                    name: true,
                                    pdfUrl: true,
                                    category: {
                                        select: {
                                            name: true
                                        }
                                    },
                                    teacherDiscipline: {
                                        select: {
                                            teacher: {
                                                select: {
                                                    name: true
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        }
                    }
                }
            },
        },
    })


}

export async function getTestsByTeachers() {
    return await prisma.teacher.findMany({
    include:{
        teacherDisciplines:{
            include:{
                test:{
                    include:{
                        category:{
                            
                         select:{
                             name:true,
                             test:{
                                 select:{
                                     teacherDiscipline:{
                                         select:{
                                             discipline:{
                                                 select:{
                                                     name:true
                                                 }
                                             }
                                         }
                                     }
                                 }
                             }
                         }
                        }
                    }
                }
            }
        }
    }
})
}





export default {
    getDisciplinesByTerms,
    getTestsByTeachers,

}