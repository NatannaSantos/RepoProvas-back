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
    await prisma.teacher.findMany({
        select: {
            name:true,
            teacherDisciplines:{
                include:{
                    test:{
                        include:{
                            category:{
                                
                            }
                        }
                    }
                }
            }
        }

    }

    )
}





export default {
    getDisciplinesByTerms,
    getTestsByTeachers,

}