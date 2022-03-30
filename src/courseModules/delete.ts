import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.coursesModules.delete({
        where: {
            id: "773c4a8b-4f9d-4c04-9e3b-dc201abca4d8"
        }
    });

    console.log(result);
}

main();