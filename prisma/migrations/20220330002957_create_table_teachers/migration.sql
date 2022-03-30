/*
  Warnings:

  - You are about to drop the column `fk_id_teacher` on the `courses` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "courses" DROP CONSTRAINT "courses_fk_id_teacher_fkey";

-- DropIndex
DROP INDEX "courses_fk_id_teacher_key";

-- AlterTable
ALTER TABLE "courses" DROP COLUMN "fk_id_teacher";
