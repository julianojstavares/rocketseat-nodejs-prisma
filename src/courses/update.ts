import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
    
    const teacherName = 'Paulo';

    const result = await prisma.courses.update({
        where: {
            name: "Prisma",
        },
        data: {
            teacher: {
                connectOrCreate: {
                    where: {
                        name: teacherName
                    },
                    create: {
                        name: teacherName
                    }
                }
            }
        }
    });

    console.log(result);
}

main();