import { Ingredient, Macros, RecipeIngredient } from '@prisma/client';
import { StaticImageData } from 'next/image';
import { formatQuantity } from './quantityUnitTransformer';

export function generateJSONLD(
  recipeImage: StaticImageData,
  recipe: any,
  macrosPerServing: { calories: number; carbs: number; protein: number; fats: number }
) {
  const wValues = [128, 256, 384, 640, 1200];
  const imageURLs = wValues.map(w => `https://rippd.io/_next/image?url=${recipeImage.src}&w=${w}&q=75`);

  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    author: {
      '@type': 'Organization',
      name: 'Rippd',
    },
    name: recipe.name,
    description: recipe.description,
    image: imageURLs,
    recipeYield: `${recipe.servings} servings`,
    recipeIngredient: recipe.RecipeIngredient.map((recipeIngredient: { Ingredient: { unit: any }; quantity: any }) => {
      return {
        ...recipeIngredient.Ingredient,
        quantityAndUnit: formatQuantity(recipeIngredient.quantity, recipeIngredient.Ingredient.unit),
      };
    }).map(
      (ingredient: { quantityAndUnit: string; name: string }) => ingredient.quantityAndUnit + ' ' + ingredient.name
    ),
    recipeInstructions: recipe.Instructions?.steps.map((step: string) => {
      return { '@type': 'HowToStep', text: step };
    }),
    recipeCategory: recipe.tags,
    cookTime: `PT${recipe.cookTime}M`,
    nutrition: {
      '@type': 'NutritionInformation',
      calories: macrosPerServing.calories,
      carbohydrateContent: macrosPerServing.carbs,
      proteinContent: macrosPerServing.protein,
      fatContent: macrosPerServing.fats,
    },
    //TODO: Add recipeCuisine
    //TODO: Add prepTime, cookTime, totalTime
    // TODO: Imrpove this keywords section, now using tags
    keywords: recipe.name,
  };
}

export function calculateMacros(
  recipeIngredients: (RecipeIngredient & { Ingredient: Ingredient & { Macros: Macros | null } })[],
  servings: number
) {
  const macros = recipeIngredients.reduce(
    (acc, curr) => {
      if (curr.Ingredient.Macros) {
        acc.calories += curr.Ingredient.Macros.calories * curr.quantity;
        acc.carbs += curr.Ingredient.Macros.carbs * curr.quantity;
        acc.protein += curr.Ingredient.Macros.protein * curr.quantity;
        acc.fats += curr.Ingredient.Macros.fats * curr.quantity;
      }
      return acc;
    },
    { calories: 0, carbs: 0, protein: 0, fats: 0 }
  );

  return {
    calories: Math.ceil(macros.calories / servings),
    carbs: Math.ceil(macros.carbs / servings),
    protein: Math.ceil(macros.protein / servings),
    fats: Math.ceil(macros.fats / servings),
  };
}
