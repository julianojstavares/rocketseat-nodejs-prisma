import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.coursesModules.create({
        data: {
            course: {
                create: {
                    name: "Maya",
                    duration: 1800,
                    description: "Do zero ao curta-metragem",
                },
            },
            module: {
                create: {
                    name: "Aprendendo Maya",
                    description: "Primeiros passos com o Maya",
                }
            }
        }
    });

    console.log(result);
}

main();