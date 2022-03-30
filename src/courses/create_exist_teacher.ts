import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 500,
            name: "Elixir",
            description: "Curso mágico de Elixir",
            teacher: {
                connect: {
                    name: "Maria Joana"
                }
            }
        }
    });

    console.log(result);
}

main();