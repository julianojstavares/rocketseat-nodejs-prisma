import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.teachers.create({
        data: {
            name: "Maria Joana",
        }
    });

    console.log(result);
}

main();