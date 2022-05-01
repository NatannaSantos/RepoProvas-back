import { prisma } from "../database.js";
import { FilterParams } from "../services/testsService.js";


interface FindAllName {
    name: {
        in: string[];
    };
};
interface FindAllTerm{
    discipline?:{
        some:{
            name:{
                in:string[];
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


    // console.log("where", where.discipline.some.name);

    return await prisma.term.findMany({
        where,
        include: {
            discipline: {
                where: name,
                include:{
                    teacherDiscipline:{
                        include:{
                            teacher:true,
                            test:{
                                include:{
                                    category:true
                                }
                            }
                        }
                    }
                }
            }
        }
    })

    // return await prisma.term.findMany({
    //    where,
    //      select: {
    //         id:true,
    //         number: true,
    //         discipline: {
    //             select: {
    //                 id: true,
    //                 name: true,
    //                 teacherDiscipline: {
    //                     select: {
    //                         test: {
    //                             select: {
    //                                 name: true,
    //                                 pdfUrl: true,
    //                                 category: {
    //                                     select: {
    //                                         name: true
    //                                     }
    //                                 },
    //                                 teacherDiscipline: {
    //                                     select: {
    //                                         teacher: {
    //                                             select: {
    //                                                 name: true
    //                                             }
    //                                         }
    //                                     }
    //                                 }
    //                             }
    //                         },
    //                     }
    //                 }
    //             }
    //         },
    //     },
    // })


}
async function getDisciplinesByTerms() {

    return await prisma.term.findMany({
        include:{
            discipline:{
                include:{
                    teacherDiscipline:{
                        include:{
                            teacher:true,
                            test:{
                                include:{
                                    category:true
                                }
                            }
                        }
                    }
                }
            }
        }
    })

    // return await prisma.term.findMany({
    //     select: {
    //         id: true,
    //         number: true,
    //         discipline: {
    //             select: {
    //                 id: true,
    //                 name: true,
    //                 teacherDiscipline: {
    //                     select: {
    //                         test: {
    //                             select: {
    //                                 name: true,
    //                                 pdfUrl: true,
    //                                 category: {
    //                                     select: {
    //                                         name: true
    //                                     }
    //                                 },
    //                                 teacherDiscipline: {
    //                                     select: {
    //                                         teacher: {
    //                                             select: {
    //                                                 name: true
    //                                             }
    //                                         }
    //                                     }
    //                                 }
    //                             }
    //                         },
    //                     }
    //                 }
    //             }
    //         },
    //     },
    // })


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




    //     return await prisma.teacher.findMany({
    //     include:{
    //         teacherDisciplines:{
    //             include:{
    //                 test:{
    //                     include:{
    //                         category:{

    //                          select:{
    //                              name:true,
    //                              test:{
    //                                  select:{
    //                                      teacherDiscipline:{
    //                                          select:{
    //                                              discipline:{
    //                                                  select:{
    //                                                      name:true
    //                                                  }
    //                                              }
    //                                          }
    //                                      }
    //                                  }
    //                              }
    //                          }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // })
}

// interface FindAllWhere {
//     discipline?: {
//       some: {
//         name: {
//           in: string[];
//         };
//       };
//     };
//   }
//  async function getTestsByDisciplines(filter:FilterParams){
//     let where = {} as FindAllWhere;
//     console.log(where);
//     if (filter.discipline) {
//         where.discipline = { some: { name: { in: filter.discipline } } };
//       }
//       return await prisma.term.findMany({

//           select:{
//               id:true,
//               number:true,
//               discipline:true
//           }
//         }); 
//   return prisma.term.findMany({
//   where,
//   select:{
//       id:true,
//       number:true,
//       discipline:{              
//           select:{
//               teacherDiscipline:{
//                   select:{
//                       teacher:true,
//                       test:{
//                           select:{
//                               category:true
//                           }
//                       }
//                   }
//               }
//           }
//       }
//   }


//   });


//return prisma.discipline.findMany({

//include:{
//     term:true,
//     teacherDiscipline:{
//         include:{
//             teacher:true,
//             test:{
//                 include:{
//                     category:true
//                 }
//             }
//         }
//     }


// }

// });

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






export default {
    getDisciplinesByTerms,
    getTestsByTeachers,
    getCategories,
    getDisciplinesByTermsParams
}