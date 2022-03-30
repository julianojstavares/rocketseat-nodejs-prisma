import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.modules.create({
        data: {
            name: "Aprendendo Prisma",
            description: "Aprendendo como usar o Prisma",
            CoursesModules: {
                create: {
                    course: {
                        connect: {
                           name: "NodeJS" 
                        }
                    }
                }
            }
        }
    });

    console.log(result);
}

main();