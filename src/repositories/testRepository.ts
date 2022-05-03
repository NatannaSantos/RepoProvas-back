import { prisma } from "../database.js";
import { FilterParams } from "../services/testsService.js";


interface FindAllName {
    name: {
        in: string[];
    };
};
interface FindAllTerm {
    discipline?: {
        some: {
            name: {
                in: string[];
            }
        }
    }
}
async function getDisciplinesByTermsParams(filter: FilterParams) {
    console.log(filter);
    let name = {} as FindAllName;
    let where = {} as FindAllTerm;

    if (filter.disciplines) {
        name = { name: { in: filter.disciplines } };
        where.discipline = { some: { name: { in: filter.disciplines } } };
    }

   
    return await prisma.term.findMany({
        where,
        include: {
            discipline: {
                where: name,
                include: {
                    teacherDiscipline: {
                        include: {
                            teacher: true,
                            test: {
                                include: {
                                    category: true
                                }
                            }
                        }
                    }
                }
            }
        }
    })
}
async function getDisciplinesByTerms() {

    return await prisma.term.findMany({
        include: {
            discipline: {
                include: {
                    teacherDiscipline: {
                        include: {
                            teacher: true,
                            test: {
                                include: {
                                    category: true
                                }
                            }
                        }
                    }
                }
            }
        }
    })
}

async function getTestsByTeachers() {
    return await prisma.teacher.findMany({
        include: {
            teacherDisciplines: {
                include: {
                    discipline: true,
                    test: {
                        include: {
                            category: true
                        }
                    }
                }
            }
        }
    })  
}


async function createTests() {

}

async function getCategories() {
    return await prisma.category.findMany({
        select: {
            id: true,
            name: true
        }
    })
}

async function getDisciplines() {
    return await prisma.discipline.findMany();
}

async function countViews(testId: number) {
    return await prisma.test.update({
        where: {
            id: testId
        },
        
            data: {viewsCount: {
                increment: 1
            
            }
        }

    })
}

async function findTestById(testId: number) {
    return await prisma.test.findUnique({
        where: {
            id: testId
        }
    });
}

export default {
    getDisciplinesByTerms,
    getTestsByTeachers,
    getCategories,
    getDisciplinesByTermsParams,
    getDisciplines,
    countViews,
    findTestById
}