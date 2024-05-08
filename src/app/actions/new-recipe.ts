'use server';

import { Complexity, Tag } from '@prisma/client';
import db from '@shared/lib/prisma';

export async function createNewRecipe(formData: FormData) {
  const ingredients = formData.getAll('ingredients').map(ingredient => JSON.parse(ingredient as string));

  await db.recipe.create({
    data: {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      imageSrc: formData.get('imageSrc') as string,
      tags: formData.getAll('tags') as Tag[],
      cookTime: Number(formData.get('cookTime')),
      servings: Number(formData.get('servings')) as number,
      complexity: formData.get('complexity') as Complexity,
      Instructions: {
        create: {
          steps: formData.get('instructions')?.toString().split('\r\n') as string[],
          tips: formData.get('tips')?.toString().split('\r\n') as string[],
        },
      },
      RecipeIngredient: {
        create: ingredients.map(ingredient => ({
          quantity: ingredient.quantity,
          ingredientId: ingredient.id,
        })),
      },
    },
  });
}
