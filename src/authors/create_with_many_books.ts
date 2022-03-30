import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: "Alura",
      books: {
        createMany: {
            data: [
                { name: "Flutter 2.0" },
                { name: "ReactJS" }, 
                { name: "CI/CD com GitLab e AWS" }, 
            ]
        }
      }
    },
  });

  console.log(result);
}

main();