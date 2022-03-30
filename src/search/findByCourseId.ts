import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.findMany({
        where: {
            id: "ea44a2ec-8bd9-458b-8429-282a9409b69e"
        },
        include: {
            CoursesModules: true,
            teacher: true
        }
    });

    console.log(JSON.stringify(result));
}

main();