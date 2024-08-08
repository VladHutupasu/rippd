import { Ingredient, RecipeIngredient } from '@prisma/client';
import { formatQuantity } from '@shared/utils/quantityUnitTransformer';
import { RecipeDetails } from '../../../app/recipe/[slug]/page';

export default function Ingredients({ recipe }: { recipe: RecipeDetails }) {
  return (
    <>
      <div className="flex flex-col gap-1 font-bold mt-8 mb-4">
        <h1 className="text-lg sm:text-xl xl:text-3xl">Ingredients</h1>
        <h1 className="opacity-60 text-sm font-light">{recipe.servings} serving(s)</h1>
      </div>
      <div className="flex flex-col">
        {recipe.RecipeIngredient.map((recipeIngredient: RecipeIngredient & { Ingredient: Ingredient }) => {
          return {
            ...recipeIngredient.Ingredient,
            quantityAndUnit: formatQuantity(recipeIngredient.quantity, recipeIngredient.Ingredient.unit),
          };
        }).map((ingredient: Ingredient & { quantityAndUnit: string }) => (
          <label key={ingredient.id} className="label cursor-pointer justify-between px-0">
            <div className="flex gap-2 font-light text-sm">
              <input type="checkbox" className="checkbox checkbox-sm checkbox-primary peer" />
              <span className="opacity-60 peer-checked:line-through">{ingredient.quantityAndUnit}</span>
              <span className="peer-checked:line-through">{ingredient.name}</span>
            </div>
          </label>
        ))}
      </div>
    </>
  );
}
