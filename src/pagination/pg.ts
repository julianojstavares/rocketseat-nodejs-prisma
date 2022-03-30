import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    let page = 1;
    let skip = 0;
    let exist = true;

    while (exist) {
        const result = await prisma.courses.findMany({
            skip,
            take: 2,
        });

        if (result.length <= 1) {
            exist = false;
        }

        console.log(result);
        console.log(`page: ${page}`);

        skip += 2;
        page++;
    }
 
}

main();