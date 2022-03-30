import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: "Flutterando",
      books: {
        create: {
          name: "Flutter na prática",
        }
      }
      
    },
  });

  console.log(result);
}

main();