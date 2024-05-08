/*
  Warnings:

  - Added the required column `unit` to the `Ingredient` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `cookTime` on the `Recipe` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Unit" AS ENUM ('GRAMS', 'KILOGRAMS', 'MILLILITERS', 'LITERS', 'TEASPOONS', 'TABLESPOONS', 'CUPS', 'PIECES');

-- AlterTable
ALTER TABLE "Ingredient" ADD COLUMN     "unit" "Unit" NOT NULL;

-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "cookTime",
ADD COLUMN     "cookTime" INTEGER NOT NULL;
