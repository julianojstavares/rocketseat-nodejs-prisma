import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
        data: {
            name: "ReactJS espacial",
            author: {
                connect: {
                    name: "Rocketseat"
                }
            }
        }
   });

  console.log(result);
}

main();