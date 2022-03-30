import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 200,
            name: "Java",
            description: "Curso de ReactJS da Rocketseat",
            teacher: {
                connectOrCreate : {
                    where: {
                        name: "Joaquim Pereira"
                    },
                    create: {
                        name: "Joaquim Pereira"
                    }
                }
            }
        }
    });

    console.log(result);
}

main();