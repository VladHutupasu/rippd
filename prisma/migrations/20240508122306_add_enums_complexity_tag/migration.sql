/*
  Warnings:

  - The values [GRAMS,MILLILITERS] on the enum `Unit` will be removed. If these variants are still used in the database, this will fail.
  - The `tags` column on the `Recipe` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `complexity` on the `Recipe` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Complexity" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- CreateEnum
CREATE TYPE "Tag" AS ENUM ('BREAKFAST', 'LUNCH', 'DINNER', 'DESSERT', 'SNACK', 'DRINK', 'VEGETARIAN', 'VEGAN', 'GLUTEN_FREE', 'DAIRY_FREE', 'NUT_FREE', 'HIGH_PROTEIN', 'LOW_CARB', 'LOW_FAT');

-- AlterEnum
BEGIN;
CREATE TYPE "Unit_new" AS ENUM ('GRAMS_100', 'KILOGRAMS', 'MILLILITERS_100', 'LITERS', 'TEASPOONS', 'TABLESPOONS', 'CUPS', 'PIECES');
ALTER TABLE "Ingredient" ALTER COLUMN "unit" TYPE "Unit_new" USING ("unit"::text::"Unit_new");
ALTER TYPE "Unit" RENAME TO "Unit_old";
ALTER TYPE "Unit_new" RENAME TO "Unit";
DROP TYPE "Unit_old";
COMMIT;

-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "tags",
ADD COLUMN     "tags" "Tag"[],
DROP COLUMN "complexity",
ADD COLUMN     "complexity" "Complexity" NOT NULL;
