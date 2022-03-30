import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    
    const result = await prisma.courses.findMany({
        where: {
            OR: [
                {
                    name: {
                        contains: "e",
                        mode: "insensitive",
                    }
                },
                {
                    name: {
                        contains: "j",
                        mode: "insensitive",
                    }
                }
            ],
            AND: {
                duration: 100,
            }
        },
    });

    console.log(result);
}

main();