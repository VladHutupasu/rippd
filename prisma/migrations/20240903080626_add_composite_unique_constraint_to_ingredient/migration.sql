/*
  Warnings:

  - A unique constraint covering the columns `[name,unit]` on the table `Ingredient` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Ingredient_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_name_unit_key" ON "Ingredient"("name", "unit");
