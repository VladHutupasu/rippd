-- DropForeignKey
ALTER TABLE "Instructions" DROP CONSTRAINT "Instructions_recipeId_fkey";

-- AddForeignKey
ALTER TABLE "Instructions" ADD CONSTRAINT "Instructions_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
