import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.teachers.findUnique({
        where: {
            name: "Daniele",
        },
        include: {
            course: true,
        }
    });

    console.log(result);
}

main();