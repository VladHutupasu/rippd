/*
  Warnings:

  - You are about to drop the column `recipeId` on the `Macros` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ingredientId]` on the table `Macros` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ingredientId` to the `Macros` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Macros" DROP CONSTRAINT "Macros_recipeId_fkey";

-- DropIndex
DROP INDEX "Macros_recipeId_key";

-- AlterTable
ALTER TABLE "Macros" DROP COLUMN "recipeId",
ADD COLUMN     "ingredientId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Macros_ingredientId_key" ON "Macros"("ingredientId");

-- AddForeignKey
ALTER TABLE "Macros" ADD CONSTRAINT "Macros_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
