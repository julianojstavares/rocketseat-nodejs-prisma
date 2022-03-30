import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.coursesModules.create({
        data: {
          fk_id_course: "38c987ae-b140-4c28-a336-cf4d4c1be24f",
          fk_id_module: "fc7be2b2-339b-4f59-946d-0290d3fe75b0"
        }
    });

    console.log(result);
}

main();