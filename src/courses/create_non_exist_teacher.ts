import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 500,
            name: "3D Studio Max",
            description: "Curso 3D irado",
            teacher: {
                create: {
                    name: "Maria Joaquina"
                }
            }
        }
    });

    console.log(result);
}

main();