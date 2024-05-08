/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Ingredient` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Macros" DROP CONSTRAINT "Macros_ingredientId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_name_key" ON "Ingredient"("name");

-- AddForeignKey
ALTER TABLE "Macros" ADD CONSTRAINT "Macros_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;
